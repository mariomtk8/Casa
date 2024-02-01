<template>
<section class="performance-block">
            <div class="performance-block__info">
                <h2 class="performance-block__title">Próxima Función</h2>
                <a href="#" class="performance-block__button">Comprar Entradas</a>
            </div>
            <div class="performance-block__image">
                <img src="../assets/img/fotos-descripción-obras-teatro/romo-julieta/ROMEO-Y-JULIETA.jpeg" alt="Función de Teatro" class="image__img">
            </div>
            <div class="performance-block__name">
                <h2 class="performance-block__name-title">Romeo y Julieta</h2>
                <a class="performance-block__name-text">"Romeo y Julieta" es una obra de teatro escrita por William Shakespeare en el siglo XVI. La trama sigue a dos jóvenes amantes, Romeo y Julieta, cuyas familias rivales generan conflictos. A pesar de las adversidades, se enamoran y casan en secreto, pero una serie de malentendidos y tragedias lleva a un desenlace fatal. La obra explora temas como el amor, la rivalidad familiar y el destino, convirtiéndose en una de las historias de amor más conocidas de la literatura.</a>
            </div>
        </section>
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

.performance-block {
    background-color: #1E3367;
    display: flex;
    align-items: center;
    min-height: 60vh;
}

.performance-block__info {
    flex: 0.7;
    text-align: center;
    margin-bottom: 10vh;
}

.performance-block__title {
    color: #ffffff;
    margin-bottom: 5vh;
    font-size: xxx-large;
}

.performance-block__button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ffffff;
    color: #000000;
    text-decoration: none;
    border-radius: 8px;
    font-size: x-large;
}

.performance-block__image {
    flex: 0.7;
    text-align: center;
}

.performance-block__image img {
    width: 350px;
}

.performance-block__name {
    flex: 1;
    text-align: left;
    align-self: start;
    margin-top: 10vh;
}

.performance-block__name-title {
    font-size: xx-large;
    color: white;
    margin-bottom: 5vh;
}

.performance-block__name-text {
    color: white;
    text-align: center;
}
</style>