class form{
constructor(){}
    display()
    {
        var div=[];
        document.getElementsByTagNameNS("div",div);
        div.display=false;
var title=createElement("h2");
title.html('survey');
title.position(130,0);
var Q1=createElement("h2");
Q1.html("Q1 . Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");


var radio=createRadio("h3");

radio.option("yes");
radio.option("no");



Q1.position(130,160);
radio.position(130,240);


var Q2=createElement("h2");
Q2.html("Q2 . Would you be willing to contribute a small amount every month for such a program?");
//var inputQ2=createInput("answer");
var radio2=createRadio("h3");

radio2.option("yes");
radio2.option("no");

Q2.position(130,250);
radio2.position(130,340);

var Q3=createElement("h2");
Q3.html("Q3 . How much per month would you be willing to pay?");
//var inputQ3=createInput("answer");
var radio3=createRadio("h3");

radio3.option("yes");
radio3.option("no");


Q3.position(130,350);
radio3.position(130,400);
var name= createElement("input");
name.html("name");
name.position(180,450);

var label =createElement("lable");
label.html("Name");
label.position(130,450);
var button=createElement("Button");

button.html("Click to Submit");

button.position(130,500);


var greeting=createElement("h2");
button.mousePressed(function()
{
   var player1= new player();
    
    button.hide();
    
    Q3.hide();
    Q2.hide();
    Q1.hide();
    name.hide();
    label.hide();
    radio.hide();
    radio2.hide();
    radio3.hide();
    playercount=playercount+1;
    player1.updateplayercount(playercount);
   // player1.updateName(name.value());
    var ans1=radio.value();
    
    var ans12=radio2.value();
    //player1.updateQuestion2(ans12);
    var ans3=radio3.value();
    //player1.updateQuestion3(ans3);
    player1.updateQuestion1(ans1,ans12,ans3,name.value());
    
    greeting.html("Thank you for taking the survey");
    greeting.position(130,160);
})
    }
}