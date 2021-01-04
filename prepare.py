from zipfile import ZipFile
import os
from os.path import basename

# List all the files in the programs directory
for file in os.listdir(os.path.dirname(__file__) + '/programs'):
    # We zip each folder + file
    if file != 'RUN.BAT':
        with ZipFile(os.path.dirname(__file__) + '/dist/' + file + '.zip', 'w') as zipObj:
                for folderName, subfolders, filenames in os.walk(os.path.dirname(__file__) + '/programs/' + file):
                    for filename in filenames:
                        filePath = os.path.join(folderName, filename)
                        zipObj.write(filePath, basename(filePath))
    else:
        with ZipFile(os.path.dirname(__file__) + '/dist/RUN.zip', 'w') as zipObj:
            zipObj.write(os.path.dirname(__file__) + '/programs/RUN.BAT', '/RUN.BAT')
