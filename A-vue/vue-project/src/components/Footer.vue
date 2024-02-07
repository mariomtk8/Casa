<template>
    <footer class="footer">
        <div class="footer__logo">
            <img src="../assets/img/logo2.png" alt="">
        </div>
        <div class="footer__menu">
            <a href="/html/Programacion.html" class="footer__menu-link">Programación</a>
            <a href="/html/informacion.html" class="footer__menu-link">Información</a>
            <a href="/html/OtrasActividades.html" class="footer__menu-link">Otras Actividades</a>
            <a href="/html/Contacto.html" class="footer__menu-link">Contacto</a>
        </div>
        <div class="footer__networks">
            <img src="../assets/img/tweeter.png" alt="">
            <img src="../assets/img/instagram.png" alt="">
            <img src="../assets/img/facebook.png" alt="">
        </div>
    </footer>
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
.footer {
    margin-top: 13vh;
    display: flex;
    align-items: center;
    background-color: #1E3367;
    text-align: center;
    width: 100%;
    height: 25vh;
}

.footer {
    margin-top: 10vh;
    display: flex;
    align-items: center;
    background-color: #1E3367;
    text-align: center;
    width: 100%;
    height: 25vh;
}

.footer__logo {
    flex: 0.7;
    text-align: right;
}

.footer__menu {
    flex: 1;
    text-align: center;
}

.footer__menu a {
    color: white;
    margin-right: 2vh;
}

.footer__networks {
    flex: 0.7;
    text-align: left;
}

.footer__logo img {
    width: 90px;
    border-radius: 70px;
}

.footer__networks img {
    width: 40px;
    margin-right: 4vh;
}

</style>