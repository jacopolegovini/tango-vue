<script>
export default {
    data() {
        return {
            squares: Array(36).fill(null),
            sunClicked: false,
            moonClicked: false,
            currentIndex: null,

        }
    },
    methods: {
        showSun(index) {
            console.log(index)
            this.currentIndex = index
            return this.sunClicked = !this.sunClicked
        }
    }
}
</script>

<template>
    <div class="general-container">
        <ul class="game-container">
            <li v-for="(square, index) in squares" :key="index" class="square" @click="showSun(index)">
                <div v-if="sunClicked && index === currentIndex" class="inner-square sun-click">
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.general-container {
    max-width: 1000px;
    margin: 0 auto;
    height: 600px;
}

.game-container {
    height: 540px;
    width: 540px;
    display: flex;
    flex-wrap: wrap;
}

.square {
    flex-basis: 90px;
    height: 90px;
}

.inner-square {
    height: 100%;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 0;
    height: 20px;
    width: 20px;
    border: 1px solid gray;
}

.sun-click {
    border: 1px solid orange;
    background-color: yellow;
    border-radius: 50%;
}
</style>