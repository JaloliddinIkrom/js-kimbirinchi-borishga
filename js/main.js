  
  var elForm = document.querySelector('.form'); 
  var elInput = document.querySelector('.input'); 
  var elButten = document.querySelector('.butten');  
  var elSpan = document.querySelector('.span'); 

  var vaqtpyoda = document.querySelector('.span1'); 
  var vaqtvelosiped = document.querySelector('.span2'); 
  var vaqtavtomobil = document.querySelector('.span3'); 
  var vaqtsamalyot = document.querySelector('.span4'); 
   
  var piyoda = 3.6; 
  var velosiped = 20.1; 
  var avtomobil = 70; 
  var samalyot = 800; 

  function time(dis, speed) {  

    var soat = Math.floor(dis / speed); 
    var minut = Math.floor((dis / speed - soat) * 60);  
    var second = Math.floor(((dis / speed - soat) * 60 - minut) * 60); 

    return `${soat}:${minut}:${second}`;

  }
  
 elForm.addEventListener('submit', function (evt){ 
   
  evt.preventDefault(); 

  var elinpval = elInput.value; 
    
  elInput.value = '';
  if (elinpval <= 0) { 


    elSpan.textContent = 'Aka 0 dan katta son kiriting..'; 
    elSpan.style.color = 'red';  
    return; 

  } else{ 

elSpan.textContent = '';

  } 

   vaqtpyoda.textContent = time(elinpval, piyoda);  
   vaqtvelosiped.textContent = time(elinpval, velosiped);  
   vaqtavtomobil.textContent = time(elinpval, avtomobil);  
   vaqtsamalyot.textContent = time(elinpval, samalyot); 

 })
 
 











    
  
