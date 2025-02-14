// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Lo supe cuando yo te vi entrar", time: 0.5 },
  { text: "Que contigo me ibas a llevar", time: 5 },
  { text: "Y es que voy pa donde quieras", time: 10 },
  { text: "Hoy te doy mi vida entera", time: 12 },
  { text: "Ya no tengo nada que buscar", time: 15 },
  { text: "Tus ojos, tus manos, tu risa infinita", time: 19 },
  { text: "Tu forma de amarme es mi favorita", time: 21 },
  { text: "Tus besos por siempre en las mañanitas", time: 24 },
  { text: "Te juro mi amor", time: 26 },
  { text: "Que yo prometo cuidarte", time: 28 },
  { text: "Con Dios de testigo ", time: 31 },
  { text: "Prometo quedarme", time: 33 },
  { text: "A todas contigo", time: 36 },
  { text: "Que suerte tenerte aquí vestida de blanco", time: 41 },
  { text: "Siento que vuelo que soy dueño de un banco", time: 46 },
  { text: "Que tengo poderes solo porque te amo", time: 50 },
  { text: "Que lo tengo todo si te tengo a mi lado", time: 55 },
  { text: "Que suerte la mía de verte con mis ojos", time: 59 },
  { text: "Que seas tan mía y yo tuyo sobre todo", time: 65 },
  { text: "Que de mil personas escogiste a este loco", time: 69 },
  { text: "Hay luna de miel para siempre entre nosotros", time: 75 },
  { text: "No sé si una vida va a alcanzar", time: 80 },
  { text: "Si es por mi que sean cinco más", time: 85 },
  { text: "Pero todas a tu lado", time: 89 },
  { text: "Ay mujer cuánto te amo", time: 92 },
  { text: "Bésame que ya no aguanto más", time: 94 },
  { text: "Tus ojos, tus manos, tu risa infinita", time: 98 },
  { text: "Tu forma de amarme es mi favorita", time: 100 },
  { text: "Tus besos por siempre en las mañanitas", time: 103 },
  { text: "Te juro mi amor", time: 105 },
  { text: "Que yo prometo cuidarte", time: 107},
  { text: "Con Dios de testigo", time: 110},
  { text: "Prometo quedarme", time: 113 },
  { text: "A todas contigo", time: 115 },
  { text: "Que suerte tenerte aquí vestida de blanco", time: 118 },
  { text: "Siento que vuelo que soy dueño de un banco", time: 121 },
  { text: "Que tengo poderes solo porque te amo", time: 127 },
  { text: "Que lo tengo todo si te tengo a mi lado", time: 131 },
  { text: "Que suerte la mía de verte con mis ojos", time: 136},
  { text: "Que seas tan mía y yo tuyo sobre todo", time: 141 },
  { text: "Que de mil personas escogiste a este loco", time: 147},
  { text: "Hay luna de miel para siempre entre nosotros", time: 151 },
  { text: "Que suerte tenerte aquí vestida de blanco", time: 155},
  { text: "Siento que vuelo que soy dueño de un banco", time: 161 },
  { text: "Que tengo poderes solo porque te amo", time: 165 },
  { text: "Que lo tengo todo si te tengo a mi lado", time: 170 },
  { text: "Que suerte la mía de verte con mis ojos", time: 175 },
  { text: "Que seas tan mía y yo tuyo sobre todo", time: 180 },
  { text: "Que de mil personas escogiste a este loco", time: 185 },
  { text: "Hay luna de miel para siempre entre nosotros", time: 190 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);