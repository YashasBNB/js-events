// Challenge 1
document.getElementById('user').onload=print();
function print(){
  document.getElementById('user').innerHTML="Yashas Balaji Naidu"
}

//challenge 2
var button=document.getElementById("btn-click");

button.onclick=changecolor;

function changecolor(){
  button.style.background='orange'
}

//challenge 3
function buildit(){
var noun=document.getElementById('noun').value;
var verb=document.getElementById("verb").value;
var adverb=document.getElementById("adverb").value;

var statement=noun+" "+verb+" "+adverb;
var div=document.getElementById('statement');
div.innerHTML=statement;
}

var buildbutton=document.getElementById('build-button')
buildbutton.addEventListener("click",buildit);

//challenge 4.1
var grandparent=document.getElementById('grandparent');
var parent=document.getElementById('parent');
var child=document.getElementById('child');

grandparent.addEventListener("click",gp);
parent.addEventListener("click",p);
child.addEventListener("click",c);

function gp(){
  console.log("Grandparent clicked");
}
function p(){
  console.log("Parent clicked");
}
function c(){
  console.log("Child clicked");
}

//challenge 4.2
var grandparent1=document.getElementById('grandparent');
var parent1=document.getElementById('parent');
var child1=document.getElementById('child');

grandparent1.addEventListener("click",e=>{console.log("Grandparent clicked")},capture=true);
parent1.addEventListener("click",e=>{console.log("Parent clicked")},capture=true);
child1.addEventListener("click",e=>{console.log("Child clicked")},capture=true);


//challenge 5
var category=document.getElementById('category');
category.addEventListener("click",function(event){
  var target=event.target;
  if(target && target.id==="blazers"){
    console.log("blazers");
  }
});