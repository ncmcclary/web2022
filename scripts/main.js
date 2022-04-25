if (new Date().getHours() > 18) {
  //alert(new Date().getHours());
  const html = document.querySelector('html');
  html.style.backgroundColor = 'black';
  html.style.color = 'white';
}

if (new Date().getHours()> 18){
  const wrapperBody= document.getElementsByClassName('wrapper');
  wrapperBody[0].style.backgroundColor = 'black';
  wrapperBody[0].style.color = 'white';
}

if (new Date().getHours()> 18){
  const header = document.getElementsByClassName('header') ;
  html.style.backgroundColor = 'black';
  html.style.color = 'white';
}
