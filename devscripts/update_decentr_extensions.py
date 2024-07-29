import os
import os.path
import shutil
import sys


extensions_grd_filepath = "../chrome/browser/resources/component_extension_resources.grd"
extensions_grd_filepath_bak = "../chrome/browser/resources/component_extension_resources.grd.bak"

if os.path.isfile(extensions_grd_filepath_bak):
  os.remove(extensions_grd_filepath_bak)
shutil.copy2(extensions_grd_filepath, extensions_grd_filepath_bak)


sys.argv = ['update_extension_ids.py', 'tblock', 'IDR_TBLOCK']
exec(open("./update_extension_ids.py").read())

sys.argv = ['update_extension_ids.py', 'tvpn', 'IDR_TVPN']
exec(open("./update_extension_ids.py").read())

print("SUCCESS")
