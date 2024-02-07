document.addEventListener('DOMContentLoaded', function () {
  fetch('/api/obras')
    .then(response => response.json())
    .then(listadoDeObras => {
      const contenedor = document.getElementById('lista-de-obras');
      const fila1 = document.createElement('div');
      fila1.className = "fila";
      const fila2 = document.createElement('div');
      fila2.className = "fila";
      const fila3 = document.createElement('div');
      fila3.className = "fila";

      listadoDeObras.forEach((obra, index) => {
        const contenedor_obra = document.createElement('div');
        contenedor_obra.className = "bloque_obra";
        
        const img = document.createElement('img');
        img.src = obra.cartel;
        img.className = "img_obra";
        
        const info = document.createElement('div');
        info.className = "info_obra";
        
        const nombre = document.createElement('h3');
        nombre.textContent = obra.name;
        nombre.className = "nombre_obra";
        //Boton Id
        const button = document.createElement('a');
        button.textContent = "Compra e información";
        button.href = `FuntionName.html?id=${obra.id}`; 
        button.className = "boton_obra";
        
        info.appendChild(nombre);
        info.appendChild(button);
        
        contenedor_obra.appendChild(img);
        contenedor_obra.appendChild(info);

        
        if (index < 3) {
          fila1.appendChild(contenedor_obra);
        } else if (index < 6) {
          fila2.appendChild(contenedor_obra);
        } else {
          fila3.appendChild(contenedor_obra);
        }
      });

      contenedor.appendChild(fila1);
      contenedor.appendChild(fila2);
      contenedor.appendChild(fila3);
    })
    .catch(error => console.error('Error al cargar los datos:', error));
});