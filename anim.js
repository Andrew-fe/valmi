// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "At the time 🤍", time: 15 },
  { text: "The whisper of birds 🤍", time: 18 },
  { text: "Lonely before the sun cried 🤍", time: 27 },
  { text: "Fell from the sky 🤍", time: 32 },
  { text: "Like water drops 🤍", time: 33 },
  { text: "Where I'm now? I don't know why 🤍", time: 41 },
  { text: "Nice butterflies in my hands 🤍", time: 47 },
  { text: "Too much light for twilight 🤍", time: 54 },
  { text: "In the mood for the flowers love 🤍", time: 59 },
  { text: "That vision 🤍", time: 67 },
  { text: "Really strong, blew my mind 🤍", time: 72 },
  { text: "Silence Let me see what it was 🤍", time: 78 },
  { text: "I only want to live in clouds 🤍", time: 83 },
  { text: "Where I'm now? I don't know why 🤍", time: 91 },
  { text: "Nice butterflies in my hands 🤍", time: 97 },
  { text: "Too much light for twilight 🤍", time: 104 },
  { text: "In the mood for the flowers love 🤍", time: 108 },
  { text: "At the time 🤍", time: 144 },
  { text: "The whisper of birds 🤍", time: 148 },
  { text: "Lonely before the sun cried 🤍", time: 153 },
  { text: "Fell from the sky 🤍", time: 158 },
  { text: "Like water drops 🤍", time: 164 },
  { text: "Where I'm now? I don't know why 🤍", time: 169 },
  { text: "Nice butterflies in my hands 🤍", time: 176 },
  { text: "Too much light for twilight 🤍", time: 183 },
  { text: "In the mood for the flowers 🤍", time: 188 },
  { text: "Love. 🤍", time: 140 },
];

function actualizarLetra() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {

    var fadeInDuration = 0.1; 
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
  
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(actualizarLetra, 1000);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; 
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); 
}

setTimeout(ocultarTitulo, 216000);