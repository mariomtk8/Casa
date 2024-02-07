<template>
    <div class="main-block">
    <h1>Información</h1>
</div>
<div class="frame-Thorario">
    <div class="frame-Thorario_title">
        <h2>Horarios de taquilla</h2>
    </div>
    <div class="frame-Thorario_txt">
        <p>Nos complace anunciar que nuestro horario de apertura para la compra de entradas es especialmente conveniente para nuestros visitantes. De lunes a viernes, nuestras taquillas están abiertas desde las 8:00 a.m. hasta las 7:00 p.m., permitiendo así que tanto los madrugadores como los que prefieren las tardes puedan adquirir sus entradas sin inconvenientes. Los fines de semana, extendemos nuestro horario: abrimos a las 9:00 a.m. y cerramos a las 8:00 p.m., asegurándonos de que incluso aquellos que disfrutan de un merecido descanso en la mañana puedan planificar su visita. Además, para mayor comodidad, nuestra página web ofrece la posibilidad de comprar entradas en línea las 24 horas del día, todos los días de la semana, facilitando aún más el acceso a nuestros eventos y espectáculos.</p>
    </div>
</div>
<div class="frame-Thorario">
    <div class="frame-Thorario_title">
        <h2>Atención al cliente</h2>
    </div>
    <div class="frame-Thorario_txt">
        <p>"En nuestro compromiso por brindar un servicio excepcional, nuestro equipo de atención al cliente está disponible para responder a todas sus consultas y necesidades. De lunes a viernes, puede contactarnos de 9:00 a.m. a 6:00 p.m., donde estaremos encantados.</p>
    </div>
</div>
<div class="frame-Thorario">
    <div class="frame-Thorario_title">
        <h2>Condiciones en las instalaciones</h2>
    </div>
    <div class="frame-Thorario_txt">
        <p>Al disfrutar de las instalaciones del teatro UrbanTheater, te pedimos que sigas ciertas condiciones para garantizar una experiencia agradable para todos. Por favor, respeta las indicaciones del personal al entrar y salir, y mantén un comportamiento cortés y respetuoso en todo momento para preservar la atmósfera del lugar. Se prohíbe estrictamente fumar, consumir alimentos o bebidas no autorizadas, así como cualquier actividad que pueda interferir con el disfrute general. Asimismo, por respeto a los artistas y al público, solicitamos abstenerse de realizar fotografías y grabaciones durante las funciones. Agradecemos tu colaboración para crear un ambiente armonioso y disfrutar al máximo de tu experiencia en nuestro teatro.</p>
    </div>
</div>

</template>

<style scoped>
    .main-block {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    background-color: #1E3367;
    height: 13vh;
    margin-bottom: 10vh;
}

.main-block h1 {
    color: white;
    font-size: xx-large;
    margin-left: 20vh;
}

.frame-Thorario{
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: auto; 
  }
  .frame-Thorario_title{
    position: relative;
    margin-bottom: 25px;
    color: #000000;
    font-size: 20px;
  }

  .frame-Thorario_title h2::after{
    content: "";
    width: 100%;
    position: absolute;
    height: 2px;
    display: block;
    margin: 0 auto;
    background-color: #000000;
  }
  .frame-Thorario_txt{
    margin-top: 3vh;
    margin-bottom: 5vh;
    font-size: 20px;
  }
</style>