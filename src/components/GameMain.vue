<script>
import axios from 'axios';
export default {
    data() {
        return {
            squares: Array(36).fill(0),
            currentIndex: null,
            apiUrl: 'http://127.0.0.1:8000/api/tangos',
            tangoPosition: []
        }
    },
    methods: {
        showSymbol(index) {
            if (this.tangoPosition[index].initial_position_icon === 0 || this.tangoPosition[index].initial_position_icon === 1) {
                this.tangoPosition[index].initial_position_icon++
            } else {
                this.tangoPosition[index].initial_position_icon = 0
            }

            console.log(this.tangoPosition[index].initial_position_icon)
        },
        getTangoApi() {
            axios.get(this.apiUrl)
                .then((response) => {
                    console.log(response.data.results)
                    this.tangoPosition = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getSymbol(number) {
            let numberToString = number.toString()
            if (numberToString.length > 2) {
                numberToString = numberToString.charAt(3)
                let stringToNumber = Number(numberToString)
                return stringToNumber
            } else {
                return false
            }
        },
        getSymbolPosition(number) {
            let numberToString = number.toString()
            numberToString = numberToString.charAt(4)
            let stringToNumber = Number(numberToString)
            return stringToNumber
        }
    },
    mounted() {
        this.getTangoApi()
    }
}
</script>

<template>
    <div class="general-container">
        <ul class="game-container">
            <li v-for="(square, index) in tangoPosition" :key="index" class="square" @click="showSymbol(index)">
                <div v-if="tangoPosition[index].initial_position_icon === 1"
                    class="square-clicked inner-square sun-click">
                </div>
                <div v-if="tangoPosition[index].initial_position_icon === 2"
                    class="square-clicked inner-square moon-click">
                </div>

                <!-- Qua sono i simboli -->
                <div v-if="getSymbol(tangoPosition[index].initial_position_symbol) === 0">
                    <div v-if="getSymbolPosition(tangoPosition[index].initial_position_symbol) === 2">
                        X
                    </div>
                    <div v-else-if="getSymbolPosition(tangoPosition[index].initial_position_symbol) === 3">
                        <div class="symbol-position-3">
                            X
                        </div>
                    </div>
                </div>
                <div v-else-if="getSymbol(tangoPosition[index].initial_position_symbol) === 1">
                    =
                </div>
                <div v-else-if="!getSymbol(tangoPosition[index].initial_position_symbol)"></div>
            </li>
        </ul>
    </div>
    <!-- <div v-if="getSymbol(tangoPosition[index].initial_position_symbol) === 0">
                <div>
                    X
                </div>
            </div>
            <div v-else-if="getSymbol(tangoPosition[index].initial_position_symbol) === 1">
                =
            </div>
            <div v-else-if="!getSymbol(tangoPosition[index].initial_position_symbol)">
            </div> -->
</template>

<style scoped>
.general-container {
    max-width: 1000px;
    margin: 0 auto;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
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
    margin: 0;
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

.symbol-position-2 {
    position: relative;
    top: 31px;
    left: 84px;
}

.symbol-position-3 {
    position: relative;
    top: 76px;
    left: 38px;
}
</style>