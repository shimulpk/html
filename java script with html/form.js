function formDataSend(event){
event.preventDefault();
let uName=document.getElementById("name").value;
let email=document.getElementById("email").value;

let gender=document.querySelector('input [name="gender"]:checked');
let hobby=document.querySelectorAll('input [name="hobby"]:checked');



let subject=document.getElementById("subject").value;
let about=document.getElementById("about").value;


let hobbyValue=[];
for(let i=0;i<hobby.length; i++){
hobbyValue.push(hobby[i].value);
}

let output="Name: " +uName+"\n "
+"Email: "+ eamil+ "\n"
+"Gender: "+ gender+ "\n"
+"Hobby: " + hobby+ "\n"
+ "Subject: " + subject+ "\n"
+ "About: " + about+ ;
let newWindow=window.open('', "_blank");
newWindow.document.writeln(output);
}
let myForm=document.getElementById('myForm');
myForm.addEventListener('submit', formDataSend);