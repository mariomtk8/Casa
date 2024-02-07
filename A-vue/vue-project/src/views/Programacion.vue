<template>
     <div class="main-block">
            <h1>Programación</h1>
        </div>
          <div id="lista-de-obras"></div>
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

.title-posters {
    display: flex;
    justify-content: center;
    margin: 7vh;
}

.title-posers_txt {
    font-size: xx-large;
}

.poster-container {
    display: flex;
    justify-content: space-evenly;
    background-color: white;
    padding: 20px;
    margin: 20px;
}

.poster-container img {
    max-width: 250px;
    max-height: 400px;
}

.show-poster {
    text-align: center;
    background-color: #1E3367;
    padding: 20px;
    width: 300px;
}

.show-poster__image {
    margin-bottom: 10px;
}

.poster__img {
    height: 370px;
    width: 250px;
}

.show-poster__details {
    color: white;
}

.show-poster__title {
    margin-bottom: 10px;
}

.show-poster__button {
    padding: 10px 20px;
    background-color: #fff;
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.button-seeMore {
    background-color: #1E3367;
    border-radius: 32px;
    display: flex;
    width: 32vh;
    height: 8vh;
    margin: 10vh;
    justify-content: center;
    align-items: center;
}

.button-seeMore_txt {
    color: white;
    font-size: x-large;
}
</style>