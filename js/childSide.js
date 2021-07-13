class childS {
 constructor (){
  this.button1 = createButton('Calculator');
  this.button2 = createButton('Dictonaries');
  this.button3 = createButton('Encyclopedia');
  this.button4 = createButton('Doubt');
  this.button5 = createButton('NCERT Solution');
  this.button6 = createButton('CBSE Sylabus');
  this.button7 = createButton('NCERT BOOKS');
  this.button8 = createButton('ICSE Syllabus');
  this.button9 = createButton('ICSE Books');
 // this.button10 = createButton('Society Problem');
  this.greeting = createElement('h2');
  this.title = createElement('h2');
 }
 hide(){
  this.button1.hide();
  this.button2.hide();
  this.button3.hide();
  this.button4.hide();
  this.button5.hide();
  this.button6.hide();
  this.button7.hide();
  this.button8.hide();
  this.button9.hide();
 // this.button10.hide();
  this.title.hide();
  this.greeting.hide();
 }
 display(){
  this.title.html("Are you a child You might Like these");
  this.title.position(displayWidth/2 - 50, 0);
  this.button1.position((displayWidth/2)/2,3*displayHeight/25);
  this.button2.position((displayWidth/2)/2,5*displayHeight/25);
  this.button3.position((displayWidth/2)/2,7*displayHeight/25);
  this.button4.position((displayWidth/2)/2,9*displayHeight/25);
  this.button5.position((displayWidth/2)/2,11*displayHeight/25);
  this.button6.position(3*displayWidth/2/2,3*displayHeight/25);
  this.button7.position(3*displayWidth/2/2,5*displayHeight/25);
  this.button8.position(3*displayWidth/2/2,7*displayHeight/25);
  this.button9.position(3*displayWidth/2/2,9*displayHeight/25);
  //this.button10.position(3*displayWidth/2/2,11*displayHeight/25);

  this.button1.mousePressed(()=>{
   location.href = 'https://dharmanshu2603.github.io/ImpFiles/cal.html';
 });
  this.button2.mousePressed(()=>{
   window.location.href = "https://googledictionary.freecollocation.com/";
  });
  this.button3.mousePressed(()=>{
   window.location.href = "https://www.wikipedia.org/";
  });
  this.button4.mousePressed(()=>{
   location.href = 'https://dharmanshu2603.github.io/ImpFiles/doubt.html';
  });
  this.button5.mousePressed(()=>{
   window.location.href = "https://www.learncbse.in/ncert-solutions-2/";
  });
  this.button6.mousePressed(()=>{
   window.location.href = "http://cbseacademic.nic.in/index.html#";
  });
  this.button7.mousePressed(()=>{
   window.location.href = "https://ncert.nic.in/textbook.php";
  });
  this.button8.mousePressed(()=>{
   window.location.href = "https://byjus.com/icse/icse-syllabus/";
  });
  this.button9.mousePressed(()=>{
   window.location.href = "https://www.cisce.org/downloads.aspx";
  });
 }
}