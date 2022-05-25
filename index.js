const items = document.getElementsByClassName("item_link");
const links = Array.from(items);

links.forEach(element => {

  const avail = element.parentNode.getElementsByClassName('avail')[0];
  const buy_button = element.parentNode.getElementsByClassName('info_button')[0];

  if (avail) {
    element.addEventListener('mouseover', () => {
      avail.style.transform = 'translateY(-' + avail.offsetHeight + 'px)';
    })
  
    element.addEventListener('mouseout', () => {
      avail.style.transform = '';
    })
  }

  if (buy_button) {
    element.addEventListener('mouseover', () => {
      buy_button.style.outline = '4px solid black';
    })
    element.addEventListener('mouseout', () => {
      buy_button.style.outline = '2px solid black';
    })
  }

});

const _buttons = document.getElementsByClassName('info_button');
const buttons = Array.from(_buttons);

buttons.forEach(element => {

  element.addEventListener('mouseover', () => {
    element.style.outline = '4px solid black';
  })
  element.addEventListener('mouseout', () => {
    element.style.outline = '2px solid black';
  })

})

document.querySelector('.submit_form_button').addEventListener('click', (e) => {
  const fname = document.querySelector('#fname').value;
  const lname = document.querySelector('#lname').value;
  const email = document.querySelector('#email').value;
  const ordern = document.querySelector('#ordern').value;
  const message = document.querySelector('#message').value;

  if (!validateEmail(email)) {
    document.querySelector('.popuptext').classList.toggle("show");
  } else {
    console.log(fname, lname, email, ordern, message);
  }
  e.stopPropagation();
})

document.onclick = function(){
  document.querySelector('.popuptext').classList.remove('show');
};

document.querySelector('#email').addEventListener('blur', () => {
  const val = document.querySelector('#email').value;

  if (!validateEmail(val)) {
    document.querySelector('#email').style.backgroundColor = 'rgb(252, 164, 164)';
    document.querySelector('#email').style.border = '2px solid red';
  }
})

document.querySelector('#email').addEventListener('focus', () => {
  document.querySelector('#email').style.backgroundColor = 'white';
  document.querySelector('#email').style.border = '2px solid black';
})

document.querySelector('.home_link').addEventListener('click', () => {
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });  
})

document.querySelector('.collection_link').addEventListener('click', () => {
  window.scroll({
    top: 754, 
    left: 0, 
    behavior: 'smooth'
  });  
})

document.querySelector('.about_link').addEventListener('click', () => {
  window.scroll({
    top: 3300, 
    left: 0, 
    behavior: 'smooth'
  });  
})

document.querySelector('.contact_link').addEventListener('click', () => {
  window.scroll({
    top: 4489, 
    left: 0, 
    behavior: 'smooth'
  });  
})

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};