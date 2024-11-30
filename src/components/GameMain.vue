<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="general-container">
        <ul class="game-container">
            <li v-for="square in 36" class="square">

            </li>
        </ul>
    </div>
</template>

<style scoped>
.general-container {
    max-width: 1000px;
    margin: 0 auto;
    height: 200px;
}

.game-container {
    height: 120px;
    width: 120px;
    display: flex;
    flex-wrap: wrap;
}

.square {
    flex-basis: 20px;
}

ul {
    list-style-type: none;
}

li {
    padding: 0;
    height: 20px;
    width: 20px;
    border: 1px solid gray;
}
</style>