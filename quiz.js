var structure = {
  userHeightValue: "",
  userCharacterValue: "",
}  

var userHeight = document.getElementById("height"); 
var userCharacter = document.getElementById("character");
var button = document.getElementById("myBtn");
var heightInput = document.getElementById("height");
var characterInput = document.getElementById("character");



button.addEventListener("click", validation); 
heightInput.addEventListener("keypress", pushReturn);
characterInput.addEventListener("keypress", pushReturn);

function validation(){
 if(!characterInput.value){
      alert("enter value here!")
    }else if (!heightInput.value){
    alert("enter value here!")
    }else{
      userInput();
    } 
}



function pushReturn(e){
  if(e.keyCode == 13){
    validation();
  }

}


function userInput() {
  var grow = {userHeight:userHeight.value, userCharacter:userCharacter.value};
  pineTree(grow);
}

function pineTree(stars) {
  for(var i=0; i<stars.userHeight; i++) {
    var numStars = i*2+1;
    var allStars = stars.userCharacter.repeat(numStars);
    var numSpaces = ((stars.userHeight*2-1)-(numStars))/2;
    var leftSpaces = " ".repeat(numSpaces);
    console.log(leftSpaces+allStars);
  }
}