// let myHeading =document.querySelector('h1');
// myHeading.textContent = "Hello world!";

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

// alert(multiply(4,7));
// alert(multiply(20,20));
// alert(multiply(0.5,3));

// function multiply(num1,num2) {
//     var result = num1 * num2;
//     return result;
//   }

var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/white-cloud-blue-sky.png') 
    {
        myImage.setAttribute('src', 'images/forest.jpg');
    }
    else
    {
        myImage.setAttribute('src', 'images/white-cloud-blue-sky.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//ввод имени по нажатию на кнопку
myButton.onclick = function() {
    setUserName();
  }

  //вспылавающее окно при открытии страницы, для ввода имени
if(!localStorage.getItem('name_Check')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name_Check');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name_Check', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }






