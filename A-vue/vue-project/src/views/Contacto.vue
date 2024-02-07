<template>
    <div class="main-block">
            <h1>Contacto</h1>
        </div>
    
    <!-- ------------boton------------ -->

<article>
    <div class="contact-container">
        <div class="map-section">
            <!-- Cambia la URL con el enlace de tu ubicación en Google Maps -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2108.1839335373115!2d-0.8694685255356075!3d41.64661674807271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd59144d20190641%3A0xbfdbaff9968efca7!2sLas%20Fuentes%2C%20Zaragoza!5e0!3m2!1ses!2ses!4v1702157638821!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    
        <div class="contact-details">
            <h2>Contacto</h2>
    
            <div class="info-row">
                <span class="label">Código Postal:</span>
                <span class="value">50002</span>
            </div>
    
            <div class="info-row">
                <span class="label">Dirección:</span>
                <span class="value">Calle de la Villa Chiprana</span>
            </div>
    
            <div class="info-row">
                <span class="label">Teléfono:</span>
                <span class="value">+976 545 677</span>
            </div>
    
            <div class="info-row">
                <span class="label">Correo Electrónico:</span>
                <span class="value">urbantheater@gmail.com</span>
            </div>
        </div>
    </div>
</article>
</template>

<style scoped>
body, h1, h2, p, ul, li, a {
    margin: 0;
    padding: 0;
    text-decoration: none;
    }
    
    body {
    font-family: 'Roboto';
    line-height: 1.6;
    overflow: auto;
    }
    
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
  }
  
  .contact-container {
    display: flex;
    width: 1243px;
    height: 600px;
    margin: 7px auto;
    border: 20px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    background-color: #1E3367;
    color: white;
    font-size: 20px;
  }
  
  .map-section {
    flex: 1;
    text-align: center;
    margin-top: 8vh;
  }
  
  .map-section img {
      width: 100%;
      height: auto;
  }
  
  .contact-details {
      flex: 0.5;
      padding: 20px;
      margin-top: 13vh;
  }
  
  h2 {
      text-align: center;
      margin-bottom: 3vh;
  }
  
  .info-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
  }
  
  .label {
      font-weight: bold;
  }
  
  .value {
      flex: 1;
      margin-left: 10px;
  }
    /*---------Header--------*/
    
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

      /* --------boton--------- */

      article{
        display: flex;
        justify-content: right;
        margin-top: 10vh;
    }
    
    .button-bought{
        background-color: #1E3367;
        border-radius: 32px;
        display: flex;
        width: 47vh;
        height: 8vh;
        margin-right: 30vh;
        justify-content: center;
        align-items: center;
        margin-bottom: 10vh;
      }
    
      .button-bought_txt{
        color: white;
        font-size: x-large;
    
      }

</style>