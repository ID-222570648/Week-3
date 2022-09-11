
//Replace
  function myFunction() {
  let text1 = document.getElementById("demo1").innerHTML;
  document.getElementById("demo1").innerHTML =
  text1.replace("walk", "jogging");
  }
  //Length
  function getlength(){
      let text2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  document.getElementById("demo2").innerHTML = text2.length;
  }
  //includes
 function lineincludes(){
  let text3 = "Hello. I am Moushumi";
  let result = text3.includes("Hello");
  document.getElementById("demo3").innerHTML = result;
 }        //search
  function linesearch(){
      let text4 = "Rabbits are jumping"
  let position = text4.search("jumping");
  document.getElementById("demo4").innerHTML = position;
  }
//JavaScript String Methods (w3schools.com) Date of access: 7/09/2022