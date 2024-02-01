<script setup lang="ts">
  import {RouterLink} from 'vue-router'
</script>

<template>
    <header class="header">
      <div class="header__logo">
        <RouterLink to="/html/index.html">
          <img src="../assets/img/logo.png" alt="Logo del Teatro Example" class="logo__image">
        </RouterLink>
      </div>
      <nav class="header__nav">
        <RouterLink to="/Programacion" class="nav__link">Programación</RouterLink>
        <RouterLink to="/About" class="nav__link">Información</RouterLink>
        <RouterLink to="/OtrasActividades" class="nav__link">Otras Actividades</RouterLink>
        <RouterLink to="/Contact" class="nav__link">Contacto</RouterLink>
      </nav>
    </header>
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

.header {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    color: #000000;
    height: 23vh;
    max-width: 1000px;
    margin: auto;
}

.header__logo {
    flex: 1;
    text-align: center;
}

.logo__image {
    max-width: 140px;
    height: auto;
}

  .header__nav {
    flex: 2.2;
    display: flex;
    text-align: left;
    justify-content: left;
    gap: 20px;
}

.nav__link {
    color: #000000;
    text-decoration: none;
}
</style>