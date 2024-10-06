// document.getElementById() -> element
// rubah warna h1
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';

// rubah tulisan




// document.getElementsByTagName() - HTMLCollection
// rubah bgwarna semua tag p
const tagP = document.getElementsByTagName('p');
tagP[0].style.backgroundColor = 'lightblue'

// document.getElementByClassName() -> HTMLCollection
// rubah class p
// const p1 = document.getElementsByClassName('p1');
// p1[0].style.backgroundColor = 'yellow'

// document.querySelector() -> element
// rubah bgcolor p4
// const p = document.querySelector('p');
// p.style.color = 'orange'

// const p4 = document.querySelector('#b p');
// p4.style.backgroundColor = 'green';


// document.querySelectorAll() -> NodeList
// const p = document.querySelectorAll('p');

// for (let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }