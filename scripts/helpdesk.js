// for left button
var submit = document.getElementById('submit');

submit.onclick = function(){
  this.value='';
  this.style.fontSize='40px';
  this.style.width='2px';
  this.style.height='80px';
  this.style.marginTop='25px';
  // this.style.marginLeft='59px';
  this.style.color='#2dce53';
  this.style.padding=0;
  var that = this;
    setTimeout(function(){
    that.style.width='70px';
    that.style.border='5px solid #2dce53';
    that.style.background='#fff';
    // that.style.marginLeft='35px';
    that.style.height='70px';
    that.style.borderRadius='35px';
  },400);
    setTimeout(function(){
      that.value='✓';
    },1500);
};


// for right button
var submit1 = document.getElementById('submit1');

submit1.onclick = function(){
  // this.style.fontSize='80px';
  this.style.transform='scale('+0+')';
  this.style.marginLeft='59px';
  this.style.color='#2dce53';
  that.style.marginTop='+30px';
  this.style.padding=0;
  var that = this;
    setTimeout(function(){
    that.value='';
    that.style.width='70px';
    that.style.border='5px solid #2dce53';
    that.style.background='#fff';
    that.style.marginLeft='-35px';
    that.style.marginTop='+30px';
    that.style.height='70px';
    that.style.borderRadius='35px';
    that.style.fontSize='40px';
  },400);
  
  setTimeout(function(){
  that.style.transform='scale('+1+')';
  },800);
    setTimeout(function(){
      that.value='✓';
    },1500);
};