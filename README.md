# quick scripts I wrote for fun (reinvented the wheel fr) because im lazy asf to find a solution on the internet
========== Notepad++ template | Press F5 to open the RUN window ============
## How to run it on notepad++
- press F5
- to run the file right away, use:
- enter `"C:\Program Files\Git\git-bash.exe" -c 'cd "$(cygpath -u "$(CURRENT_DIRECTORY)")"; node "$(cygpath -u "$(FULL_CURRENT_PATH)")"; exec bash'`

- to just open the directory path, use: 
- `"C:\Program Files\Git\git-bash.exe" -c 'cd "$(cygpath -u "$(CURRENT_DIRECTORY)")"; exec bash;`

### script list
- ffc-obj-convert-script.js - convert a template string of csv-like lines separated by linebreak and spaces

