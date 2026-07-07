/* eslint no-unused-vars: "off" */

function savePlan(){

let subject=document.getElementById("subject").value;

let hours=document.getElementById("hours").value;

if(subject=="" || hours==""){

alert("Please enter all details.");

return;

}

document.getElementById("message").innerHTML=
"Study Plan Saved: " + subject + " - " + hours + " hour(s)";

}


