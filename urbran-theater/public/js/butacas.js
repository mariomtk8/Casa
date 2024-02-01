document.addEventListener('DOMContentLoaded', function () {
  const queryParams = new URLSearchParams(window.location.search);
  const idObra = queryParams.get('id');
  
  fetch(`http://localhost:3000/obra/${idObra}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(obra => {
      const contenedorButacas = document.getElementById('contenedor-butacas');
    
      obra.butacas.forEach(butaca => {
        const divButaca = document.createElement('div');
        divButaca.classList.add('butaca');
        if (butaca.ocupada) {
          divButaca.classList.add('ocupada');
        } else {
          // Solo las butacas no ocupadas son clickeables
          divButaca.addEventListener('click', function() {
            if (!this.classList.contains('ocupada')) {
              this.classList.toggle('seleccionada');
            }
          });
        }
        
        contenedorButacas.appendChild(divButaca);
        
      });
    })
    .catch(error => {
      console.error('Error al obtener las butacas:', error);
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const queryParams = new URLSearchParams(window.location.search);
  const idObra = queryParams.get('id');

  fetch(`http://localhost:3000/obra/${idObra}`)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(obra => {
          const displayElement = document.getElementById('info-container');
          displayElement.innerHTML = ''; // Limpia el contenido previo

          // Crear y agregar el nombre de la obra
          const constTitulo = document.createElement('div');
          constTitulo.className = 'const-Titulo';
          const titulo = document.createElement('h1');
          titulo.textContent = obra.name;
          constTitulo.appendChild(titulo);
          displayElement.appendChild(constTitulo)

          const imgContainer = document.createElement('div');
          imgContainer.className = 'img-container';
          const obraImage = new Image(); 
          obraImage.src = obra.cartel; 
          obraImage.alt = `Poster of ${obra.name}`; 
          imgContainer.appendChild(obraImage);
          displayElement.appendChild(imgContainer);
      })
      .catch(error => {
          console.error('Fetch error:', error);
      });
});


//Peticion POST

document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM completamente cargado y analizado");
  const queryParams = new URLSearchParams(window.location.search);
  const idObra = queryParams.get('id');

  console.log("ID de la obra:", idObra);

  const botonGuardar = document.createElement('button');
  botonGuardar.textContent = 'Confirmar selección';
  botonGuardar.className = 'Boton-info';

  // Obtener el contenedor donde se colocará el botón
  const botonContainer = document.getElementById('boton-container');
  if (botonContainer) {
    // Añadir el botón al contenedor
    botonContainer.appendChild(botonGuardar);
  } else {
    console.log('El contenedor del botón no se encontró');
  }

  botonContainer.addEventListener('click', function() {
    const butacasSeleccionadas = Array.from(document.querySelectorAll('.butaca.seleccionada'))
      .map(div => div.textContent);

    fetch(`/api/obra/butacas/${idObra}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ butacasSeleccionadas: butacasSeleccionadas })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert(data.message);
        document.querySelectorAll('.butaca.seleccionada').forEach(div => {
            div.classList.add('ocupada');
            div.classList.remove('seleccionada');
        });
    })
    .catch(error => {
        console.error('Error al guardar las butacas:', error);
    });
  });
});
