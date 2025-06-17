function mouseClicked() {
  
  if(tela==0){
    if(mouseX>=x && mouseX<=(x+l) && mouseY>=y && mouseY<=(y+h)){
      tela=1
    }

    if(mouseX>=x && mouseX<=(x+l) && mouseY>=(y+50) && mouseY<=(y+50+h)){
      tela=2
    }

    if(mouseX>=x && mouseX<=(x+l) && mouseY>=(y+100) && mouseY<=(y+100+h)){
      tela=3
    }
  }
  
  if(tela!=0){
    if(mouseX>=x && mouseX<=(x+l) && mouseY>=(y+200) && mouseY<=(y+200+h)){
      tela=0
    }
  }
}