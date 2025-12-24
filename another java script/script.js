function formDataSend(event){
    event.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let gender=document.querySelector('input [name="gender"]:checked ');
   let subject=document.getElementById('subject').value;
   let hobby=document.querySelectorAll('input [name="hobby"]:checked ');
    let about=document.getElementById('about').value;

   let hobbyValue=[];
   for(let i=0; i<hobby.length; i++){
    hobbyValue.push(hobby[i].value);
   }

   let output="Name: "+name+ "\n" 
   + "Email: "+ email+ "\n"
   + "gender "+ gender+ "\n"
   + "subject "+ subject+ "\n"
   + "hobby " +hobby+ "\" 
   + "about "+about+ "\n" ;

let newWindow=window.open('', "_blank");
newWindow=document.writeln("output");

}
let myForm=document.getElementById('myForm');
myForm.addEventListener('submit',formDataSend);