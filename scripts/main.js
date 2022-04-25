if (new Date().getHours() > 18) {
  const html = document.querySelector('html');
  html.style.backgroundColor = 'black';
  html.style.color = 'white';
}

if (new Date().getHours()> 18){
  const wrapperBody= document.getElementsByClassName('wrapper');
  wrapperBody[0].style.backgroundColor = 'black';
  wrapperBody[0].style.color = 'white';
}

if (new Date().getHours() > 18) {
  const primaryBody = document.getElementById('primary');
  primaryBody.style.backgroundColor = 'black';
  primaryBody.style.color = 'white';
}
