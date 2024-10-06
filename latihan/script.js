// getElementById -> element
// var let const

const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'green';

judul.innerHTML = 'Classroom';


// // getElementsByTagName() -> HTMLCollection'
// // merubah warna bg semua tag p
// const tagP = document.getElementsByTagName('p');

// //    tagP[0].style.backgroundColor = 'lightblue';


//    // getElementsByClassName -> HTMLCollection
// const p2 = document.getElementsByClassName('p2');
// p2[0].style.backgroundColor = 'lightblue';


// // querySelector -> element
// const p4 = document.querySelector('section#b p');
// p4.style.backgroundColor = 'yellow';




// // querySelectorAll -> NodeList

const p = document.querySelectorAll('p');
for (let i =0; i < p.length; i++ ){
    p[i].style.backgroundColor = 'red';
}
