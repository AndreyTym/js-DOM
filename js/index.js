const link = document.querySelector('a');
link.textContent = 'Dinosaurs beginning with T';
link.href = 'https://www.nhm.ac.uk/discover/dino-directory/name/t/gallery.html';

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the Dino';
sect.appendChild(para);

// for (let i = 1; i <= 10; i++) {
//   const p = document.createElement('p');
//   p.textContent = i + 'We hope you enjoyed the T-Rex';
//   sect.appendChild(p);
// }

[...Array(10)].forEach((_, i) => {
  const p = document.createElement('p');
  p.textContent = i + 1 + 'We hope you enjoyed the T-Rex';
  sect.appendChild(p);
});

const clock = document.querySelector('.clock');
const showClock = () => (clock.innerText = new Date()).toLocaleTimeString();
setInterval(showClock, 1000);
