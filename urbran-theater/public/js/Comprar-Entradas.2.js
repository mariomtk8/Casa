// Variable para almacenar los asientos seleccionados
let asientosSeleccionados = []

// Recuperación del slug y carga de datos de la obra
async function fetchData () {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const slug = urlParams.get('id')
  console.log('Slug de la obra:', slug)

  const response = await fetch(`http://localhost:3000/obra/${slug}`, { method: 'GET' })
  const data = await response.json()

  const name = document.querySelector('#FunctionName')
  name.innerHTML = data.obra.name

  const photo1 = document.querySelector('#primera-img')
  photo1.src = data.obra.images[0]

  // Cargar asientos comprados para esta obra
  fetchAsientosComprados(slug)
}

// Función para cargar los asientos comprados de una obra específica
async function fetchAsientosComprados (slug) {
  const response = await fetch(`http://localhost:3000/api/asientos/${slug}`, { method: 'GET' })
  const { asientosComprados } = await response.json()
  marcarAsientosComprados(asientosComprados)
  // Al cargar los asientos comprados, actualiza la variable local
  asientosSeleccionados = asientosComprados
}

// Función para marcar asientos comprados en la UI y ponerlos en rojo
function marcarAsientosComprados (asientosComprados) {
  asientosComprados.forEach(seatId => {
    const seat = document.getElementById(seatId)
    if (seat) {
      seat.classList.add('comprado')
      seat.style.backgroundColor = 'red' // Agregar estilo de fondo rojo
    }
  })
}

document.addEventListener('DOMContentLoaded', async () => {
  // Carga inicial de datos basada en el slug
  await fetchData()

  const cinemaSeats = document.getElementById('cinema-seats')
  const totalPrice = document.getElementById('total-price')
  const buyButton = document.getElementById('buy-button')

  const filas = 4
  const asientos = 10
  let idAsientos = 0

  for (let i = 0; i < filas; i++) {
    const row = document.createElement('div')
    row.classList.add('row')

    for (let j = 0; j < asientos; j++) {
      const seat = document.createElement('div')
      seat.classList.add('seat')
      seat.id = `seat-${idAsientos++}`
      seat.addEventListener('click', () => selectSeat(seat))
      row.appendChild(seat)
      // Verifica si el asiento está en la lista de asientos seleccionados y lo marca como seleccionado
      if (asientosSeleccionados.includes(seat.id)) {
        seat.classList.add('selected')
      }
    }

    cinemaSeats.appendChild(row)
  }

  function selectSeat (seat) {
    if (!seat.classList.contains('comprado')) {
      seat.classList.toggle('selected')
      updatePrice()
    }
  }

  // Función para actualizar el precio total basado en los asientos seleccionados
  function updatePrice () {
    const selectedSeats = document.querySelectorAll('.seat.selected').length
    totalPrice.innerText = `Precio Total: ${selectedSeats * 5} €`
  }

  buyButton.addEventListener('click', async () => {
    const selectedSeats = Array.from(document.querySelectorAll('.seat.selected')).map(seat => seat.id)
    await postAsientosSeleccionados(selectedSeats)
  })

  // Función para enviar los asientos seleccionados a la API y marcarlos como comprados
  async function postAsientosSeleccionados (asientosSeleccionados) {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const slug = urlParams.get('slug')

    const response = await fetch(`http://localhost:3000/api/asientos/${slug}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ asientosSeleccionados })
    })

    if (response.ok) {
      alert('La compra ha sido un éxito')
      // Refrescar la lista de asientos comprados sin recargar la página
      asientosSeleccionados.forEach(seatId => {
        const seat = document.getElementById(seatId)
        seat.classList.remove('selected')
        seat.classList.add('comprado')
        seat.style.backgroundColor = 'red' // Agregar estilo de fondo rojo
      })
      updatePrice()
      // Actualiza la variable local de asientos seleccionados
      asientosSeleccionados = asientosSeleccionados.concat(asientosSeleccionados)
    } else {
      alert('Hubo un problema con la compra')
    }
  }
})
