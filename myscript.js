var design = document.querySelector(".design"); // geef waarde aan woord design en link aan de class design

design.addEventListener('click', function () { // js interactie on click aanmaken
    design.classList.add('designanimation'); // spreek de css animatie aan

    setTimeout(function () {
        window.location.href = "media.html" // link door naar volgende pagina
    }, 1000);
})



var main = document.querySelector(".main"); // geef waarde aan main en link naar class main

main.addEventListener('click', function () { // js interactie on click aan maken
    main.classList.add('mediaanimation'); // spreek mediaanimation aan in css file

    setTimeout(function () {
        window.location.href = "media.html" // link door naar volgende pagina
    }, 1000);
})


var fashion = document.querySelector(".fashion");

fashion.addEventListener('click', function () {
    fashion.classList.add('fashionanimation');

    setTimeout(function () {
        window.location.href = "media.html"
    }, 1000);
})

var music = document.querySelector(".music");

music.addEventListener('click', function () {
    music.classList.add('musicanimation');

    setTimeout(function () {
        window.location.href = "media.html"
    }, 1000);
})