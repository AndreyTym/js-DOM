const link = document.querySelector('a');
link.textContent = 'Dinosaurs beginning with T';
link.href = 'https://www.nhm.ac.uk/discover/dino-directory/name/t/gallery.html';

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the Dino'; //добавляем новый параграф
sect.appendChild(para);

// Добавляем 10 параграфов
// for (let i = 1; i <= 10; i++) {
//   const p = document.createElement('p');
//   p.textContent = i + 'We hope you enjoyed the T-Rex';
//   sect.appendChild(p);
// }

// [...Array(10)].forEach((_, i) => {
//   const p = document.createElement('p');
//   p.textContent = i + 1 + 'We hope you enjoyed the T-Rex';
//   sect.appendChild(p);
// });

//appendChild перемещает linkPara
// const linkPara = document.querySelector('p');
// sect.appendChild(linkPara);

// делаем копию параграфа
const linkPara = document.querySelector('p');
sect.appendChild(linkPara.cloneNode(true));

// удалить
// linkPara.parentNode.removeChild(linkPara);
//или
linkPara.remove();

// Manipulating styles
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

para.classList.add('formatted');

const clock = document.querySelector('.clock');
const showClock = () => (clock.innerText = new Date()).toLocaleTimeString();
setInterval(showClock, 1000);

// JQuery
$('.click-me').click(() => $('img').toggle(3000));
