var btn = document.querySelector('button')
var body = document.querySelector('body')

//multiple car images ka array
var carImages = [

    './porsche.png',
    './bmw-2.png' ,
    './bmw-4-removebg-preview.png' ,
    './orange-removebg-preview.png' ,
];

btn.addEventListener('click',function(){

    var x = Math.random()*90
    var y = Math.random()*90
    var rot = Math.random()*18

    var randomCar = carImages[Math.floor(Math.random() * carImages.length)];
    
    var img = document.createElement('img')

    img.setAttribute('src', randomCar);
    img.style.height = '200px'
    img.style.position = 'absolute'
    img.style.left = x + '%'
    img.style.top = y + '%'
    img.style.rotate = `rotate(${rot}deg) scale(0.8)`;


    body.appendChild(img);

    setTimeout(() => {
        img.style.opacity = '1';
        img.style.transform = `rotate(${rot}deg) scale(1.1)`;
    }, 100);
})