<script>
export default {
    data() {
        return {
            squares: Array(36).fill(0),
            currentIndex: null,
        }
    },
    methods: {
        showSun(index) {
            console.log(index)

            console.log(this.squares[index])
            if (this.squares[index] === 0 || this.squares[index] === 1) {
                this.squares[index]++
            } else {
                this.squares[index] = 0
            }

            console.log(this.squares[index])
        }
    }
}
</script>

<template>
    <div class="general-container">
        <ul class="game-container">
            <li v-for="(square, index) in squares" :key="index" class="square" @click="showSun(index)">
                <div v-if="squares[index] === 1" class="inner-square sun-click">
                </div>
                <div v-if="squares[index] === 2" class="inner-square moon-click">
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

.inner-square {
    width: 80%;
    height: 80%;
}

.sun-click {
    position: relative;
    left: 9px;
    top: 9px;
    border: 1px solid orange;
    background-color: yellow;
    border-radius: 50%;
}

.moon-click {
    border-radius: 50%;
    box-shadow: 1.1rem 1.1rem 0 0 blue;
    position: relative;
    left: -12px;
    top: -10px;
}
</style>