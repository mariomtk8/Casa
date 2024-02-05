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
          displayElement.innerHTML = ''; 

          //  nombre de la obra
          const constTitulo = document.createElement('div');
          constTitulo.className = 'const-Titulo';
          const titulo = document.createElement('h1');
          titulo.textContent = obra.name;
          constTitulo.appendChild(titulo);
          displayElement.appendChild(constTitulo)

          //imagen principal
          const imagenPrincipal = document.createElement('img');
          imagenPrincipal.src = obra.images[0]; // Asumiendo que el primer elemento es la imagen principal
          imagenPrincipal.alt = `Imagen principal de ${obra.name}`;
          imagenPrincipal.style.width = '100%'; // La imagen ocupará el ancho completo del contenedor
          displayElement.appendChild(imagenPrincipal);

          //horarios de la función
          const horarios = document.createElement('div');
          horarios.className = 'cont-horarios'
          const horariosTitulo = document.createElement('h2');
          horariosTitulo.textContent = 'Horarios de la función';
          horarios.appendChild(horariosTitulo);

          obra.dates.forEach(date => {
              const horario = document.createElement('p');
              horario.className = 'DatesCon'
              horario.textContent = date;
              horarios.appendChild(horario);
          });

          displayElement.appendChild(horarios);

          const contenedorImagenesSecundarias = document.createElement('div');
            contenedorImagenesSecundarias.className = 'contenedor-imagenes-secundarias';

            obra.images.slice(1).forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = `Imagen secundaria de ${obra.name}`;
                img.className = 'img-obra-secundaria'; 
                contenedorImagenesSecundarias.appendChild(img);
            });

            displayElement.appendChild(contenedorImagenesSecundarias);


          //descripción
          const bloqueDesc = document.createElement('div');
          bloqueDesc.className = 'container-desc';
          const descTitulo = document.createElement('h2');
          descTitulo.textContent = 'Información de la función';
          const descripcion = document.createElement('p');
          descripcion.textContent = obra.description;
          bloqueDesc.appendChild(descTitulo);
          bloqueDesc.appendChild(descripcion);
          displayElement.appendChild(bloqueDesc);

          // elenco
          const elenco = document.createElement('div');
          elenco.className = 'reparto-cont'
          const elencoTitulo = document.createElement('h2');
          elencoTitulo.textContent = 'Reparto';
          elenco.appendChild(elencoTitulo);

          obra.actors.forEach(actor => {
              const actorNombre = document.createElement('p');
              actorNombre.textContent = actor;
              elenco.appendChild(actorNombre);
          });

          displayElement.appendChild(elenco);

          //Boton Id
          const botonCont = document.createElement('div')
          botonCont.className = 'botonCont';
          const botonCompra = document.createElement('a');
          botonCompra.textContent = 'Click para compra de entradas';
          botonCompra.href = `CompraEntradas.html?id=${obra._id}`; // Aquí debería ir el enlace a la página de compra de entradas
          botonCompra.className = 'boton-compra';
          botonCont.appendChild(botonCompra);
          displayElement.appendChild(botonCont);

      })
      .catch(error => {
          console.error('Fetch error:', error);
      });
});
