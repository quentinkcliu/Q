var months=new Array(13);
months[1]="Jan.";
months[2]="Feb.";
months[3]="Mar.";
months[4]="Apr.";
months[5]="May";
months[6]="June";
months[7]="July";
months[8]="Aug.";
months[9]="Sept.";
months[10]="Oct.";
months[11]="Nov.";
months[12]="Dec.";

var clock=new Date();
var currentMonth=months[clock.getMonth() + 1];
var date=clock.getDate();
var year=clock.getYear();

document.write(currentMonth + " " + date + " " + year);

