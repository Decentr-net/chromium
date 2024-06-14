import os
from re import sub
import subprocess

if os.name != 'nt':
    print("This script is only for Windows")
    exit(1)

# Global vars
sign_cfg_path = "sign.cfg"
out_dir = ""
certificate = ""
sign_tool_path = ""
sign_command = []
files_to_sign = [
  "tomi.exe",
  "setup.exe",
  "chrome_proxy.exe",
  "chrome_pwa_launcher.exe",
  "notification_helper.exe",
  "chrome.dll",
  "chrome_elf.dll",
  "chrome_child.dll",
  "chrome_wer.dll",
  "d3dcompiler_47.dll",
  "eventlog_provider.dll",
  "libEGL.dll",
  "libGLESv2.dll",
  "mojo_core.dll",
  "vk_swiftshader.dll",
  "vulkan-1.dll",  
]

# Change the current working directory to the script's directory
os.chdir(os.path.dirname(os.path.realpath(__file__)))

# If the sign.cfg file doesn't exist, create it
if not os.path.exists("sign.cfg"):
    sign_cfg_file = open(sign_cfg_path, "wt")
    sign_cfg_file.write("out_dir = out/Default\n")
    sign_cfg_file.write("certificate = cert.pfx\n")
    sign_cfg_file.write("sign_tool_path = C:/Program Files (x86)/Windows Kits/10/bin/10.0.19041.0/x64/signtool.exe\n")
    sign_cfg_file.write("sign_command = /tr http://example.com /td sha256 /fd sha256 /p test\n")
    sign_cfg_file.close()
    print("Please change the sign.cfg file to your needs.")
    exit(1)

# Read the sign.cfg file
sign_cfg_file = open(sign_cfg_path, "rt")
sign_cfg_lines = sign_cfg_file.readlines()
sign_cfg_file.close()

for line in sign_cfg_lines:
    if line.startswith("#"):
        continue
    elif line.startswith("out_dir"):
        out_dir = line.split("=")[1].strip()
    elif line.startswith("certificate"):
        certificate = line.split("=")[1].strip()
    elif line.startswith("sign_tool_path"):
        sign_tool_path = line.split("=")[1].strip()
    elif line.startswith("sign_command"):
        sign_command = line.split("=")[1].strip().split(" ")

# Save paths
src_dir = os.getcwd() + "/../"
out_dir = src_dir + out_dir
certificate = os.path.join(os.getcwd(), certificate)

# Check if the out_dir exists
if not os.path.exists(out_dir):
    print("The out_dir doesn't exist")
    exit(1)

# Check if the certificate exists
if not os.path.exists(certificate):
    print("The certificate doesn't exist")
    exit(1)

# Check if the sign_tool_path exists
if not os.path.exists(sign_tool_path):
    print("The SignTool path is incorrect")
    exit(1)

# Change the current working directory to the out directory
os.chdir(out_dir)

# Sign the files
sign_command.append("/f")
sign_command.append(certificate)
for file in files_to_sign:
    args = [sign_tool_path, "sign"]
    for arg in sign_command:
        args.append(arg)
    as_args = args.copy()
    as_args.append("/as")
    args.append("/csp")
    args.append("DigiCert Signing Manager KSP")
    args.append(file)
    as_args.append(file)
    print(args)
    subprocess.run(args)
    

# Change the current working directory to the src directory
os.chdir(src_dir)

# Pack mini_installer.exe
subprocess.run(["ninja.bat", "-C", out_dir, "mini_installer"])

# Change the current working directory to the out directory
os.chdir(out_dir)

# Sign mini_installer.exe
args = [sign_tool_path, "sign"]
for arg in sign_command:
    args.append(arg)
as_args = args.copy()
as_args.append("/as")
args.append("/csp")
args.append("DigiCert Signing Manager KSP")
args.append("mini_installer.exe")
as_args.append("mini_installer.exe")
subprocess.run(args)
subprocess.run(as_args)