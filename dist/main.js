"use strict";
const PELICULASDB = [
    {
        name: "Inside Out 2",
        imagen: "https://pics.filmaffinity.com/Del_revaes_2_Inside_Out_2-347157127-large.jpg",
        descripcion: "En esta nueva entrega, Riley es ahora una adolescente enfrentando nuevas emociones y situaciones propias de su edad. Mientras se adapta a los cambios y desafíos de la adolescencia, nuevos personajes emocionales se unen a la historia, llevándonos a una aventura divertida y conmovedora dentro de su mente.",
        votos: 0,
    },
    {
        name: "Spider-Man: Across the Spider-Verse",
        imagen: "https://m.media-amazon.com/images/I/617ATFuYJnL._SX300_SY300_QL70_ML2_.jpg",
        descripcion: "Miles Morales regresa para unirse a una nueva aventura a través del multiverso. Con la ayuda de Gwen Stacy y otros Spider-People, luchan contra una amenaza que pone en peligro la estabilidad de todas las realidades.",
        votos: 0,
    },
    {
        name: "The Flash",
        imagen: "https://play-lh.googleusercontent.com/qa6fuSMpBZz0DmypQW-NChIBZqv4GpPwbKFJXaOulLxqCmyyMASF2c7Akzcz3xpJmX5ViZlVr-rRAHiypEM=w240-h480-rw",
        descripcion: "Barry Allen, también conocido como The Flash, viaja en el tiempo para salvar a su madre de un trágico destino, pero sus acciones desencadenan una serie de eventos inesperados que alteran la realidad y ponen en peligro la existencia misma del universo.",
        votos: 0,
    },
    {
        name: "The Marvels",
        imagen: "https://pics.filmaffinity.com/The_Marvels-236469321-large.jpg",
        descripcion: "Carol Danvers, Kamala Khan y Monica Rambeau se ven obligadas a trabajar juntas cuando sus poderes se conectan de manera inesperada, enfrentándose a una amenaza intergaláctica que pone en peligro todo lo que conocen.",
        votos: 0,
    },
    {
        name: "Elemental",
        imagen: "https://pics.filmaffinity.com/Elemental-522221727-large.jpg",
        descripcion: "En un mundo donde los elementos de la naturaleza tienen vida propia, una joven de fuego y un joven de agua deben aprender a convivir y superar sus diferencias para salvar su hogar, mientras exploran la importancia de la aceptación y la amistad.",
        votos: 0,
    },
];
function generarId(name) {
    return name
        .split(" ")
        .map((palabra) => palabra.charAt(0))
        .join("");
}
function construirCard(pelicula) {
    const idCard = generarId(pelicula.name);
    console.log(`construyendo card de ${pelicula.name}`);
    return `
      <div class="card">
        <picture>
          <img src="${pelicula.imagen}" alt="Imagen_inside_out2" />
        </picture>
        <h3>${pelicula.name}</h3>
        <form class="rating">
          <input value="5" name="rating" id="${idCard}star5" type="radio">
          <label for="${idCard}star5"></label>
          <input value="4" name="rating" id="${idCard}star4" type="radio">
          <label for="${idCard}star4"></label>
          <input value="3" name="rating" id="${idCard}star3" type="radio">
          <label for="${idCard}star3"></label>
          <input value="2" name="rating" id="${idCard}star2" type="radio">
          <label for="${idCard}star2"></label>
          <input value="1" name="rating" id="${idCard}star1" type="radio">
          <label for="${idCard}star1"></label>
        </form>
        <p>${pelicula.descripcion}</p>
      </div>
    `;
}
document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector('main');
    for (let i = 0; i < PELICULASDB.length; i++) {
        main.innerHTML += construirCard(PELICULASDB[i]);
    }
    const forms = document.querySelectorAll("form");
    forms.forEach((form, index) => {
        form.addEventListener("input", function (event) {
            const target = event.target;
            if (target.checked) {
                PELICULASDB[index].votos = parseInt(target.value);
                console.log(`La película ${PELICULASDB[index].name} tiene ${PELICULASDB[index].votos}`);
            }
        });
    });
});
const getMostVotedMovie = () => {
    let movie = PELICULASDB[0];
    PELICULASDB.map((film) => {
        if (film.votos > movie.votos) {
            movie = film;
        }
    });
    alert(`La película más votada es ${movie.name}`);
};
