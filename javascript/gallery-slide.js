var pictures = [2];
var index = 1;

function initialize(){
  pictures[0] = new Image(50, 50);
  pictures[0].src = "../images/sawah.jpg";
  pictures[1] = new Image(50, 50);
  pictures[1].src = "../images/hacktiv8.png";
  pictures[2] = new Image(50, 50);
  pictures[2].src = "../images/Email-PNG.png";

}

function next(){
  index++;
  if (index > 2){
    index = 2;
  } 
  document.imgDisplay.src = pictures[index].src;
}
function back(){
  index--;
  if (index < 0){
    index = 0;
  }
  document.imgDisplay.src = pictures[index].src;
} 