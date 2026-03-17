#create script to create a new js script for scripting faster with bolerplate for running and scripting on notepad++ f5
echo 'enter file name: ';
read NAME;
if [[ -z $NAME ]] 
then
echo "invalid input";
else
touch "$NAME.js";
echo -e "//========== Notepad++ template | Press F5 to opne the RUN window ============\n" >> $NAME.js;
echo -e "//For running the file right away, use:\n" >> $NAME.js;
sed -n '3,10 s/^/\/\//p' README.md >> $NAME.js;
echo "created $NAME.js"
fi
exec bash;