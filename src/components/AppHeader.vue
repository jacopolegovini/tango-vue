<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="header-general">
        <div class="container flex-container">
            <div class="logo">
                <div class="square-general square1"></div>
                <div class="square-general square2"></div>
                <div class="square-general square3"></div>
                <div class="square-general square4"></div>
            </div>
            <h1 class="modak-regular">TANGO</h1>
            <navbar class="navbar-links">
                <ul class="d-flex gap-4">
                    <li>
                        <RouterLink :to="{ name: 'game' }">
                            Game
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'instruction' }">
                            Instruction
                        </RouterLink>
                    </li>
                </ul>
            </navbar>
        </div>
    </div>
</template>

<style scoped>
.modak-regular {
    font-family: "Modak", system-ui;
    font-weight: bold;
    font-style: normal;
}

h1 {
    margin: 0;
    padding-right: 20px;
    border-right: 4px solid #28231D;
}

.header-general {
    background-color: lightsalmon;
    height: 70px;
}

.flex-container {
    display: flex;
    gap: 20px;
    align-items: center;
    height: 100%;
}

.logo {
    width: 40px;
    height: 40px;
    display: flex;
    flex-wrap: wrap;
}

.square-general {
    height: 20px;
    width: 20px;
}

.square1 {
    background-color: #65B0FF;
}

.square2 {
    background-color: white;
}

.square3 {
    background-color: white;
}

.square4 {
    background-color: #FFB500;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li * {
    color: #28231D;
    font-weight: bold;
}
</style>