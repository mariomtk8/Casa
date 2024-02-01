const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const jsonObrasDeTeatro = [
  {
    "_id": "1",
    "name": "Esperando a Godot",
    "description": "Una obra teatral absurda que sigue a dos personajes, Vladimir y Estragon, mientras esperan en un lugar desolado a alguien llamado Godot, explorando temas de la existencia, la alienación y la esperanza.",
    "authors": ["Samuel Beckett"],
    "duration": "2",
    "actors": [
      "Alexander Montgomery",
      "Isabella Ramirez",
      "Benjamin Worthington",
      "Olivia Hawthorne", 
      "Nathaniel Harrington"
    ],
    "images": [
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Esperando-Godot/esperando-a-godot_FN.jpg",
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Esperando-Godot/esperando-a-godot_FN2.jpg",
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Esperando-Godot/una-escena-de-esperando-a-godot.jpg"
    ],
    "dates": [
      "2024-03-03 - 21:00",
      "2024-03-09 - 22:00",
      "2024-03-18 - 23:00"
    ],
    "cartel": "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Esperando-Godot/esperando-a-godot.jpg",
    
  },
  {
    "_id": "2",
    "name": "El Fantasma de la Ópera",
    "description": "Una icónica obra de teatro musical que narra la historia de un misterioso y desfigurado hombre conocido como el Fantasma, que vive en los pasadizos de la Ópera de París y se obsesiona con una joven y talentosa soprano, Christine.",
    "authors": ["Andrew Lloyd Webber"],
    "duration": "2.5",
    "actors": [
      "Sophia Anderson",
      "Daniel Blackwood",
      "Elena Rodriguez",
      "Nicholas Smith",
      "Isabella Johnson"
    ],
    "images": [
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Fantasma-opera/fantasma-opera_FN.jpg",
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Fantasma-opera/Fantasma-operea_FN2.jpg"
    ],
    "dates": [
      "2024-01-07 - 20:30",
      "2024-01-12 - 21:00",
      "2024-01-22 - 19:00"
    ],
    "cartel": "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Fantasma-opera/fantasma-opera.jpg",
  },
  {
    "_id": "3",
    "name": "Esto No Es Un Show",
    "description": "Un audaz espectáculo que desafía las convenciones, combinando elementos de teatro, danza y performance art. La trama sigue a un grupo ecléctico de artistas mientras exploran temas de identidad, realidad y percepción a través de actuaciones vanguardistas.",
    "authors": ["Valentina Moreno", "Carlos Ruiz"],
    "duration": "1.75",
    "actors": [
      "Miguel Ángel Jiménez",
      "Laura González",
      "José Martín",
      "Carmen Sánchez",
      "Diego Torres"
    ],
    "images": [
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Galder/galder2.jpg",
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Galder/galder3.jpg"
    ],
    "dates": [
      "2024-05-01 - 23:00",
      "2024-05-15 - 22:00",
      "2024-05-20 - 21:00"
    ],
    "cartel": "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Galder/Galder.jpeg",
  },
  {
    "_id": "4",
    "name": "Hamlet",
    "description": "Una de las tragedias más emblemáticas de William Shakespeare, centrada en la historia del príncipe Hamlet de Dinamarca, quien busca vengar la muerte de su padre. La obra explora temas complejos como la locura, la traición, la venganza y la moralidad.",
    "authors": ["William Shakespeare"],
    "duration": "3",
    "actors": [
      "Alexander Knight",
      "Sarah Miller",
      "David Johnson",
      "Emily White",
      "Richard Brown"
    ],
    "images": [
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Hamlet/hamlet_FN2.jpg",
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Hamlet/hamlet_FN.jpg"
    ],
    "dates": [
      "2024-06-01 - 18:30",
      "2024-06-06 - 19:00",
      "2024-06-10 - 22:00"
    ],
    "cartel": "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Hamlet/hamlet.jpg",
  },
  {
    "_id": "5",
    "name": "El Rey León",
    "description": "Un musical espectacular basado en la famosa película animada de Disney. La historia sigue las aventuras de Simba, un joven león que debe enfrentar numerosos desafíos para reclamar su lugar como el legítimo rey de la sabana. El musical es conocido por su impresionante uso de disfraces, marionetas y efectos visuales para recrear el ambiente de África.",
    "authors": ["Irene Mecchi", "Jonathan Roberts", "Linda Woolverton"],
    "duration": "2.5",
    "actors": [
      "Michael James",
      "Elizabeth Green",
      "Thomas Hill",
      "Rachel Adams",
      "William Parker"
    ],
    "images": [
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Rey-Leon/reyleonIMG3.jpg",
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Rey-Leon/reyLeonImg1.jpg",
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Rey-Leon/reyleonIMG2.avif"
    ],
    "dates": [
      "2024-07-01 - 21:00",
      "2024-07-10 - 19:00",
      "2024-07-20 - 20:00"
    ],
    "cartel": "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Rey-Leon/reyLeon.webp",
  },
  {
    "_id": "6",
    "name": "Bodas de sangre",
    "description": "Una comedia romántica contemporánea que sigue la historia de varias parejas que se preparan para sus respectivas bodas. La obra teje una trama llena de enredos amorosos, malentendidos cómicos y momentos de reflexión sobre las relaciones y el matrimonio.",
    "authors": ["Ana García", "Luis Hernández"],
    "duration": "2",
    "actors": [
      "Elena Sánchez",
      "Carlos Pérez",
      "María López",
      "José Torres",
      "Laura Jiménez"
    ],
    "images": [
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/BodasDeSangre/BodasDeSangre_NF2.jpg",
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/BodasDeSangre/BodasDeSangre_NF.jpg"
    ],
    "dates": [
      "2024-08-02 - 21:00",
      "2024-08-12 - 20:00",
      "2024-08-21 - 21:00"
    ],
    "cartel": "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/BodasDeSangre/BodasDeSangre.jpg",
  },
  {
    "_id": "7",
    "name": "B-Vocal",
    "description": "Un aclamado grupo vocal que destaca por su habilidad para fusionar a cappella y comedia en sus actuaciones. B-Vocal cautiva al público con su mezcla única de música, humor y la sorprendente habilidad de crear sonidos instrumentales con sus voces, explorando diversos géneros musicales desde el pop hasta el clásico.",
    "authors": ["Alberto Marco", "Carlos Marco", "Augusto González", "Fernando Ardévol", "Juan Luis García"],
    "duration": "1.5",
    "actors": [],
    "images": [
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/B-vocal/b-vocal_NF.jpg",
      "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/B-vocal/b.jpg"
    ],
    "dates": [
      "2024-09-01 - 21:00",
      "2024-09-03 - 22:30",
      "2024-09-10 - 23:00"
    ],
    "cartel": "https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/B-vocal/b-vocal_LG.jpg",
  }
]

//METODOS

//Generar butacas
jsonObrasDeTeatro.forEach(obra => {
  obra.butacas = generarButacas(6, 8);
}); 
function generarButacas() {
  const butacas = [];
  const filas = ['A', 'B', 'C', 'D', 'E', 'F','H','I','J','K','L','M','N','O','P','Q'];
  const columnas = 8;

  filas.forEach(fila => {
    for (let col = 1; col <= columnas; col++) {
      butacas.push({ "numero": fila + col, "ocupada": false });
    }
  });

  return butacas;
}
//Programacio.html
function obtenerNombresEImagenesDeObras() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const nombresEImagenes = jsonObrasDeTeatro.map(obra => {
        return { id: obra._id, name: obra.name, cartel: obra.cartel };
      });
      resolve(nombresEImagenes);
    });
  });
}

  //Detalles de obra 
  function obtenerDatosObra(id) {
    return new Promise((resolve, reject) => {
      // Encuentra la obra por ID
      const obra = jsonObrasDeTeatro.find(obra => obra._id === id);
  
      if (obra) {
        resolve(obra); 
      } else {
        reject('Obra no encontrada'); 
      }
    });
  }

  //PETICIONES

  //Detalles de obra y compra de entradas
  app.get('/obra/:id', (req, res) => {
    const id = req.params.id;
  
    obtenerDatosObra(id)  
      .then(obra => {
        res.json(obra); 
      })
      .catch(error => {
        res.status(404).send(error);
      });
  });

  //Programacion.html
app.get('/api/obras', function(req, res) {
  obtenerNombresEImagenesDeObras().then(listadoDeObras => {
    res.json(listadoDeObras);
    console.log(listadoDeObras)
  });
});

//Ver butacas
app.get('/api/obras/butacas/:obraId', (req, res) => {
  const obraId = req.params.obraId;
  const obra = jsonObrasDeTeatro.find(obra => obra._id === obraId);

  if (obra) {
      res.json(obra.butacas);
  } else {
      res.status(404).send('Obra no encontrada');
  }
});

//Pintar Butacas
app.post('/api/obra/butacas/:id', (req, res) => {
  const id = req.params.id;
  const butacasSeleccionadas = req.body.butacasSeleccionadas;
  const obra = jsonObrasDeTeatro.find(obra => obra._id === id);
  if (obra) {
      butacasSeleccionadas.forEach(numButaca => {
          const butaca = obra.butacas.find(b => b.numero === numButaca);
          if (butaca && !butaca.ocupada) {
              butaca.ocupada = true;
          }
      });
      res.status(200).json({ message: 'Butacas actualizadas correctamente' });
  } else {
      res.status(404).send('Obra no encontrada');
  }
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});