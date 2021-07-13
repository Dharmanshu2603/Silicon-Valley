class mainP{
 constructor(){
  this.button1 = createButton('Child Side');
  this.button2 = createButton('Parent Side');
  this.button3 = createButton('Registration');
  this.greeting = createElement('h2');
  this.title = createElement('h2');
 }
 hide(){
  this.button1.hide();
  this.button2.hide();
  this.button3.hide();
  this.title.hide();
  this.greeting.hide();
 }
 display(){
  this.title.html("Welcome");
  this.title.position(displayWidth/2 - 50, 0);

  this.button1.position(displayWidth/2,displayHeight/2 - 50);
  this.button2.position(displayWidth/2,displayHeight/2 + 50);
  this.button3.position(displayWidth/2,displayHeight - 50);

  this.button1.mousePressed(()=>{
   mainPage.hide();
   childSide = new childS;
   childSide.display();
  });
  this.button2.mousePressed(()=>{
   mainPage.hide();
   parentSide = new parentS;
   parentSide.display();
   
  });
  this.button3.mousePressed(()=>{
   mainPage.hide();
   location.href = '/js/work-under-progress.html';
  });
 }
}