if (new Date().getHours() > 18) {
  const body = document.querySelector('body');
  body.style.backgroundColor = 'black';
  body.style.color = 'white';
}

if (new Date().getHours()> 18){
  const wrapperBody= document.getElementsByClassName('wrapper');
  wrapperBody[0].style.backgroundColor = 'black';
  wrapperBody[0].style.color = 'white';
}
if (new Date().getHours() > 18) {
  const header = document.querySelector('header');
  header.style.backgroundColor = '#424949';
  header.style.color = 'white';
}
if (new Date().getHours() > 18) {
  const footer = document.querySelector('footer');
  footer.style.backgroundColor = '#424949';
  footer.style.color = 'white';
}
