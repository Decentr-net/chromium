import os
import os.path
import sys


def general_help():
  print("Updates ids in GRD file for a certain extension.")
  print("Does nothing if includes with 'extension_id_name' do not exist in the GRD file")
  print()
  print("Usage:")
  print("py update_extension_ids.py 'extension_folder' 'extension_id_name'")
  print()
  print("Example:")
  print("py update_extension_ids.py charon IDR_CHARON")
  print()


def no_extension_folder_error_handler():
  print("ERROR: Extension folder with that name does not exist!")
  print()
  general_help()
  exit(2)


if len(sys.argv) != 3:
  general_help()
  exit(1)


extensions_folder_path = "../chrome/browser/resources/"
extensions_grd_filepath = "../chrome/browser/resources/component_extension_resources.grd"
extensions_grd_filepath_temp = "../chrome/browser/resources/component_extension_resources.grd.tmp"

extension_folder = sys.argv[1]
extension_id_name = sys.argv[2]

extension_folder_path = extensions_folder_path + extension_folder

if not os.path.isdir(extension_folder_path):
  no_extension_folder_error_handler()


grd_file = open(extensions_grd_filepath, "rt")
grd_file_temp = open(extensions_grd_filepath_temp, "wt")

amount_of_spaces_to_add = 0
new_includes_written = False

for line in grd_file:
  index = line.find("<include name=\"" + extension_id_name + '_')
  if index != -1 and new_includes_written == False:
    new_includes_written = True
    amount_of_spaces_to_add = index
    next_id = 1
    for dirpath, dirnames, filenames in os.walk(extension_folder_path):
      for filename in filenames:
        filepath = os.path.join(dirpath, filename)
        filepath = filepath.replace('\\', '/')
    
        # Getting rid of unnecessary relative path part.
        #filepath = filepath.removeprefix("../chrome/browser/resources/")
        
        # Transforming to a necessary result.
        next_id_string = str(next_id)
        next_id_string = next_id_string.zfill(3)
        next_id_name_string = extension_id_name + '_' + next_id_string
        next_id += 1
        line_to_add = (amount_of_spaces_to_add * ' ') + "<include name=\"" + next_id_name_string + "\" file=\"" + filepath + "\" type=\"BINDATA\" />\n"

        grd_file_temp.write(line_to_add)
  elif index == -1:
    grd_file_temp.write(line)


grd_file.close()
grd_file_temp.close()

os.remove(extensions_grd_filepath)
os.rename(extensions_grd_filepath_temp, extensions_grd_filepath)
