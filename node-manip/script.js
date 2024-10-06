// buat paragraf baru di akhir section a 
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf baru');

pBaru.appendChild(teksPBaru);

const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


// sisipkan li di antara item 2 dan 3
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');

ul.insertBefore(liBaru, li2);


// hapus link instagram
// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link);

// rubah tag p4 menjadi h2
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul Baru');

// h2Baru.appendChild(teksH2Baru);

// sectionB.replaceChild(h2Baru, p4); 