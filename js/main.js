var url = document.createElement('a');
var modalCloseButton = document.querySelector('.modal-close');
var modal = document.getElementById('thanks');

url.href = document.URL;
if (url.hash === '#thanks') {
  modal.classList.add('modal-show');
}

modalCloseButton.addEventListener('click', (function(){
  modal.classList.remove('modal-show');
  window.location.href = (`${url.protocol}//${url.hostname}`);
}));
