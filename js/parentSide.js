class parentS {
 constructor (){
  this.greeting = createElement('h2');
  this.title = createElement('h2');
  this.button1 = createButton('Child Location Tracking');
  this.button2 = createButton('Text Tracking');
  this.button3 = createButton('App Management');
  this.button4 = createButton('Browsing Management');
  this.button5 = createButton('Screen Time Restriction')
 }
 hide(){
  this.greeting.hide();
  this.title.hide();
  this.button1.hide();
  this.button2.hide();
  this.button3.hide();
  this.button4.hide();
  this.button5.hide();
 }
 display(){
  this.title.html("Welcome Parent");
  this.title.position(displayWidth/2 - 50, 0);

  this.button1.position(displayWidth/2 , 4*displayHeight/25)
  this.button2.position(displayWidth/2 , 8*displayHeight/25)
  this.button3.position(displayWidth/2 , 12*displayHeight/25)
  this.button4.position(displayWidth/2 , 16*displayHeight/25)
  this.button5.position(displayWidth/2 , 20*displayHeight/25)

  this.button1.mousePressed(()=>{
   location.href = 'https://dharmanshu2603.github.io/ImpFiles/work-under-progress.html';
 });
 this.button2.mousePressed(()=>{
  location.href = 'https://dharmanshu2603.github.io/ImpFiles/work-under-progress.html';
});
this.button3.mousePressed(()=>{
 location.href = 'https://dharmanshu2603.github.io/ImpFiles/work-under-progress.html';
});
this.button4.mousePressed(()=>{
 location.href = 'https://dharmanshu2603.github.io/ImpFiles/work-under-progress.html';
});
this.button5.mousePressed(()=>{
 location.href = 'https://dharmanshu2603.github.io/ImpFiles/work-under-progress.html';
});
 }
}