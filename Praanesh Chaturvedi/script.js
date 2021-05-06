const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('menu');
const fullDate = document.getElementById('date');
const currentDay = document.getElementById('currentDay');

// Event Listeners
menuBtn.addEventListener('click', addClass);
closeBtn.addEventListener('click', removeClass);

// Global Functions
function addClass() {
  menu.classList.add('active');
  menuBtn.classList.add('active');
  closeBtn.classList.add('active');
  myAnimationStart();
}

function removeClass() {
  menu.classList.remove('active');
  menuBtn.classList.remove('active');
  closeBtn.classList.remove('active');
  myAnimationEnd();
}

function myAnimationStart() {
  const lists = document.querySelectorAll('li');

  lists.forEach((list) => {
    console.log(list.innerHTML);
    list.classList.add('active');
  });
}

function myAnimationEnd() {
  const lists = document.querySelectorAll('li');

  lists.forEach((list) => {
    list.classList.remove('active');
  });
}

// Get Full Date
function getFullDate() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const date = new Date();

  const day = date.getDate();
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear();

  currentDay.innerText = `${day}`;
  fullDate.innerText = `${month} | ${year}`;
}