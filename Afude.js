"use strict";
let saveFile = () => {
    
const name=document.getElementById("name")
const adress=document.getElementById("adress")
const date=document.getElementById("date")
const email=document.getElementById("email")
const number=document.getElementById("number")
const M=document.getElementById("M")
const F=document.getElementById("F")
const faible=document.getElementById("faible")
const moyen=document.getElementById("moyen")
const bien=document.getElementById("bien")
const argument1= document.getElementById('argument1')
const argument2= document.getElementById('argument2')
const argument3= document.getElementById('argument3')
const comment= document.getElementById('comment')
const first= document.getElementById('first')
const second= document.getElementById('second')
const gender= document.getElementById('gender')

let data = "\r Name: " + name.value + " \r\n " + "adress: " + adress.value + " \r\n " + "Email: " + email.value + " \r\n " + "M: " + M.value + " \r\n " + "F: " + F.value +"\r\n"+ "first:"+ first.value + " \r\n "+ "second:"+ first.value + " \r\n "+ "gender:"+ gender.value + " \r\n "+ "argument1:"+ argument1.value + " \r\n "+ "argument2:"+ argument2.value + " \r\n "+ "argument3:"+ argument3.value + " \r\n "+ "comment:"+ comment.value ;
console.log(data);
const textToBLOB = new Blob([data], { type: "text/plain" });
var filename = new Date();
var month =new Date(); 
month = month.getMonth();
var day = new Date();
var day = day.getUTCDate();
var year = new Date();
var year = year.getUTCFullYear();

 const newdate = year + "/" + month + "/" + day;
const sFileName = filename; // The file to save the data.

let newLink = document.createElement("a");
newLink.download = new Date();

if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
} else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
}

newLink.click();



/*form.addEventListenner('submit', (e)=>{
    let messages=[]
    if(mail.value != type.email){
        messages.push("You need to Entr your E-mail adress!")
    }
    if(emssages.length >0){
        e.preventDefault()
    }
    
})*/
};
































































































