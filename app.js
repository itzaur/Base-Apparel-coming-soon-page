const input = document.querySelector('.message-box input');
const label = document.querySelector('.message-box label');
const errorImg = document.querySelector('.message-box figure');
const btn = document.querySelector('.btn');

function validEmail(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      input.value
    )
  ) {
    label.style.transform = 'translateY(0%)';
    label.style.visibility = 'hidden';
    label.style.opacity = 0;

    errorImg.style.display = 'none';
    errorImg.style.visibility = 'hidden';
    errorImg.style.opacity = 0;

    input.style.border = `0.2rem solid hsla(0, 36%, 70%, 0.271)`;
  } else {
    label.style.transform = 'translateY(250%)';
    label.style.visibility = 'visible';
    label.style.opacity = 1;

    errorImg.style.display = 'flex';
    errorImg.style.visibility = 'visible';
    errorImg.style.opacity = 1;

    input.style.border = `0.2rem solid hsla(0, 93%, 68%, 0.871)`;
  }
}

function btnShadow() {
  btn.classList.toggle('clicked');
}

btn.addEventListener('click', validEmail);
btn.addEventListener('click', btnShadow);
