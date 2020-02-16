let input, button, greeting, radio, email, mail,playerIndex=0
     
var form
var database
function setup() {
    createCanvas(600, 600);
    database=firebase.database();

    input = createInput();
    input.position(670, 255);
    email = createInput();
    email.position(670, 165);

    text = createElement('h1', "Lets Do A Survey On Our School Students");
    text.position(600, 5);

    question1 = createElement('h3', "Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
    question1.position(400, 300)
    radio = createRadio();
    radio.position(600, 360)
    radio.option('yes');
    radio.option('No');

question2 = createElement('h3', "Q2. Would you be willing to contribute a small amount every month for such a program?");
 question2.position(400, 390)
 radio1 = createRadio();
 radio1.position(600, 450)
radio1.option('yes');
radio1.option('No');

 question3 = createElement('h3', "Q3. How much per month would you be willing to pay?");
question3.position(400, 490)
 radio2 = createRadio();
 radio2.position(600, 550)
 radio2.option('yes');
radio2.option('No');

 
 

 greeting = createElement('h2', ' Type your name in the input box');
greeting.position(600, 105);
     mail = createElement('h2', 'Put your email id in the below input box');
     mail.position(600, 200);

    textAlign(CENTER);
    textSize(50);
 }





 
function draw(){

var peopleCount = 0;
}
    


function setup() {
    form = new Form()
    form.display();
    user = new User();

}