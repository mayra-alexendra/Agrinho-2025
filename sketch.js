var img01
var img02
var img03
var img04

var tela=0

var x = 150
var y = 100
var l = 100
var h = 30

function setup() {
  createCanvas(400, 400)
    img01=loadImage('0a4f82ba678e4664af1fc4fd8d845bc5.jpg')
  img02=loadImage('33b6d4e0c71aaa2ff2f7dd6966fee963.jpg')
  
  img03=loadImage('9823f0f4abfee4a2a29569c40527599b.jpg') 
  
  img04=loadImage('f56d33d69405f670591b18ef8f28ff6b.jpg')
  
}

function draw() {
  
  if(tela==0){
    menu()
  }

  if(tela==1){
    tela1()
  }
  if(tela==2){
    tela2()
  }
  if(tela==3){
    tela3()
  }
}
