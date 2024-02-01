<template>
    <div class="main-block">
            <h1>Otras Actividades</h1>
        </div>
        <div class="frame-VG">
            <div class="frame-VG_title">
                <h2>Visitas Guiadas</h2>
            </div>
            <div class="frame-VG_txt">
                <p>Descubre los secretos detrás del escenario con nuestras emocionantes visitas guiadas al teatro Al UrbanTheater. Únete a nosotros para explorar los rincones ocultos de este icónico espacio cultural. Nuestros guías expertos te llevarán a través de los bastidores, revelando la rica historia del teatro y compartiendo anécdotas fascinantes sobre las producciones que han iluminado nuestro escenario a lo largo de los años. Desde los camerinos hasta el telón principal, experimentarás la magia del teatro desde una perspectiva única. ¡Sumérgete en la historia y el encanto que hacen de nuestro teatro un lugar verdaderamente especial!</p>
            </div>
        </div>
</template>

<style scoped>
    body,
h1,
h2,
p,
ul,
li,
a {
    margin: 0;
    padding: 0;
    text-decoration: none;
}

body {
    font-family: 'Roboto';
    line-height: 1.6;
    overflow: auto;
}
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

.frame-VG{
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: auto; 
  }
  .frame-VG_title{
    position: relative;
    margin-bottom: 25px;
    color: #000000;
    font-size: 20px;
  }

  .frame-VG_title h2::after{
    content: "";
    width: 100%;
    position: absolute;
    height: 2px;
    display: block;
    margin: 0 auto;
    background-color: #000000;
  }
  .frame-VG_txt{
    margin-top: 3vh;
    margin-bottom: 5vh;
    font-size: 20px;
  }


</style>