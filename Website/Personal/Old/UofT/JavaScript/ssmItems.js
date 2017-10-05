<!--

/*
Configure menu styles below
NOTE: To edit the link colors, go to the STYLE tags and edit the ssm2Items colors
*/
YOffset=150; // no quotes!!
XOffset=0;
staticYOffset=30; // no quotes!!
slideSpeed=20 // no quotes!!
waitTime=100; // no quotes!! this sets the time the menu stays out for after the mouse goes off it.
menuBGColor="black";
menuIsStatic="yes"; //this sets whether menu should stay static on the screen
menuWidth=180; // Must be a multiple of 10! no quotes!!
menuCols=2;
hdrFontFamily="verdana";
hdrFontSize="2";
hdrFontColor="white";
hdrBGColor="#170088";
hdrAlign="left";
hdrVAlign="center";
hdrHeight="15";
linkFontFamily="Verdana";
linkFontSize="2";
linkBGColor="white";
linkOverBGColor="#FFFF99";
linkTarget="_top";
linkAlign="Left";
barBGColor="#444444";
barFontFamily="Verdana";
barFontSize="2";
barFontColor="white";
barVAlign="center";
barWidth=20; // no quotes!!
barText="SIDE MENU"; // <IMG> tag supported. Put exact html for an image to show.

///////////////////////////

// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
ssmItems[0]=["Miscallaneous"] //create header
ssmItems[1]=["Dynamic Drive", "http://www.dynamicdrive.com", ""]
ssmItems[2]=["Star Trek", "http://www.startrek.com", ""]
ssmItems[3]=["DragonballZ", "http://www.dragonballZ.com", ""]
ssmItems[4]=["Toronto Stock Exchange", "http://www.tse.com", ""]
ssmItems[5]=["Medabots", "http://www.medabots.com", ""]

ssmItems[6]=["Email Me at", "", ""] //create header
ssmItems[7]=["ECF", "mailto:liuq@ecf.utoronto.ca", "", 1, "no"] //create two column row
ssmItems[8]=["Hotmail", "mailto:gokuandpiccalo@hotmail.com", "",1]

ssmItems[9]=["MP3 Sites", "", ""] //create header
ssmItems[10]=["2000 Mp3", "http://2000mp3.com", ""]
ssmItems[11]=["21st Century Mp3", "http://www.21century-mp3.com", ""]

buildMenu();

//-->