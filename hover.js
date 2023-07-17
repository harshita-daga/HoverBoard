 // creating boxes
 const container = document.getElementById('container');
 const noOfBoxes= 1825;
 for(let i = 0; i < noOfBoxes; i++) {
     const box = document.createElement('div');
     box.classList.add('box');
     container.appendChild(box);
     box.addEventListener('mouseover', () => hoverIn(box))
     box.addEventListener('mouseout', () => hoverOut(box))
 }

 let color='';
 let C='0c0b0b'; 

 // Function to generate a random color
 function generateColor() {
         const randomColor=Math.floor(Math.random()*16777215).toString(16);
         return randomColor;
     }

 // To change the background color of the page
 function changeBgColor() {
     color= generateColor();
     document.body.style.backgroundColor = "#" + color;
 }

 btn1.addEventListener('click',changeBgColor);
 


 // To change the color of the pen
 function changePenColor() {
     color= generateColor();
     return color;
 }
 
 // A function to call generateColor() to generate random pen color On button click
  function temp() {
      C=generateColor();
      return C;
  }

  btn2.addEventListener('click',temp);

  //To reset colours to default
  function reset() {
     document.body.style.backgroundColor='#DEE6D6';
     C='0c0b0b';
  }
  btn3.addEventListener('click',reset);

  // Mouse event functions
 function hoverIn(segment) {
     segment.style.backgroundColor="#" + C;
     segment.style.boxShadow='0 0 5px #cdcdcd';
 }
 function hoverOut(segment) {
     segment.style.background='#dbdbdb';
     segment.style.boxShadow='0 0 3px #0c0b0b';
 }