


let users = [
    {
        name: 'Esseie walton ',
        image:'img/images (1).jpeg',
    },
    {
        name: 'John',
        image:'img/images (2).jpeg',
    },
    {
        name: 'Bernard',
        image:'img/images (3).jpeg',
    },
    {
        name: 'Antonio',
        image:'img/images (4).jpeg',
    },
    {
        name: 'Ann',
        image:'img/images.jpeg',
    }

];

let imageEl = document.getElementById('image');
let titleEl = document.getElementById('title');


let i = 0;
setInterval(function() {
    if( i == users.length) { i = 0 };
    imageEl.src = users[i].image;
    titleEl.innerText = users[i].name;
    i++;
}, 1500);


   

   



