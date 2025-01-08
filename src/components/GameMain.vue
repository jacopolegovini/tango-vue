<script>
import axios from 'axios';
export default {
    data() {
        return {
            squares: Array(36).fill(0),
            currentIndex: null,
            apiUrl: 'http://127.0.0.1:8000/api/tangos',
            tangoPosition: [],
            rightPositionIcon: 0
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
        },
        submitResult() {
            for (let i = 0; i < 36; i++) {
                if (this.tangoPosition[i].initial_position_icon === this.tangoPosition[i].final_position_icon) {
                    console.log(this.tangoPosition[i].initial_position_icon)
                    this.rightPositionIcon++
                }
            }
            console.log(this.rightPositionIcon)
        },
        resetGame() {
            // window.location.reload()
            this.getTangoApi()
            this.rightPositionIcon = 0
        }
    },
    mounted() {
        this.getTangoApi()
    }
}
</script>

<template>
    <!-- Qui compare la soluzione una volta che si è premuto il bottone -->
    <div class="general-container d-flex flex-column gap-4">
        <div class="solution">
            <div class="correct-solution" v-if="rightPositionIcon === 36">
                <h3>Hai vinto, complimenti!</h3>
            </div>
            <div class="wrong-solution" v-else-if="rightPositionIcon !== 36 && rightPositionIcon !== 0">
                <h3>Hai sbagliato, provaci di nuovo!</h3>
            </div>
        </div>

        <!-- Qui è la griglia di gioco -->
        <ul class="game-container">
            <li v-for="(square, index) in tangoPosition" :key="index" class="square" @click="showSymbol(index)">
                <div v-if="tangoPosition[index].initial_position_icon === 1"
                    class="square-clicked inner-square sun-click">
                </div>
                <div v-if="tangoPosition[index].initial_position_icon === 2"
                    class="square-clicked inner-square moon-click">
                </div>

                <!-- Qua sono i simboli -->
                <div v-if="tangoPosition[index].initial_position_icon === 0">
                    <div v-if="getSymbol(tangoPosition[index].initial_position_symbol) === 0">
                        <div v-if="getSymbolPosition(tangoPosition[index].initial_position_symbol) === 2">
                            <div class="symbol-position-2 symbol-different">
                                X
                            </div>
                        </div>
                        <div v-else-if="getSymbolPosition(tangoPosition[index].initial_position_symbol) === 3">
                            <div class="symbol-position-3 symbol-different">X</div>
                        </div>
                    </div>
                    <div v-else-if="getSymbol(tangoPosition[index].initial_position_symbol) === 1">
                        <div v-if="getSymbolPosition(tangoPosition[index].initial_position_symbol) === 2">
                            <div class="symbol-position-2 symbol-equal">
                                =
                            </div>
                        </div>
                        <div v-else-if="getSymbolPosition(tangoPosition[index].initial_position_symbol) === 3">
                            <div class="symbol-position-3 symbol-equal">
                                =
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="tangoPosition[index].initial_position_icon !== 0">
                    <div v-if="getSymbol(tangoPosition[index].initial_position_symbol) === 0">
                        <div v-if="getSymbolPosition(tangoPosition[index].initial_position_symbol) === 2">
                            <div class="symbol-position-2-click symbol-different">
                                X
                            </div>
                        </div>
                        <div v-else-if="getSymbolPosition(tangoPosition[index].initial_position_symbol) === 3">
                            <div class="symbol-position-3-click symbol-different">X</div>
                        </div>
                    </div>
                    <div v-else-if="getSymbol(tangoPosition[index].initial_position_symbol) === 1">
                        <div v-if="getSymbolPosition(tangoPosition[index].initial_position_symbol) === 2">
                            <div class="symbol-position-2-click symbol-equal-click">
                                =
                            </div>
                        </div>
                        <div v-else-if="getSymbolPosition(tangoPosition[index].initial_position_symbol) === 3">
                            <div class="symbol-position-3-click symbol-equal-click">
                                =
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="!getSymbol(tangoPosition[index].initial_position_symbol)"></div>
            </li>
        </ul>
        <div class="d-flex justify-content-center gap-4">
            <button class="btn btn-primary" @click="submitResult">Ho finito!</button>
            <button class="btn btn-secondary" @click="resetGame">Reset</button>
        </div>
    </div>
</template>

<style scoped>
h3 {
    margin: 0;
    font-weight: 700;
}

.solution {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
}

.correct-solution {
    color: green;
}

.wrong-solution {
    color: #b80328;
}

.general-container {
    max-width: 1000px;
    margin: 0 auto;
    height: 700px;
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
    width: 60%;
    height: 60%;
}

.sun-click {
    position: relative;
    left: 17px;
    top: 17px;
    border: 2px solid #A55F2C;
    background-color: #FCA61B;
    border-radius: 50%;
}

.moon-click {
    border-radius: 50%;
    box-shadow: 1.1rem 1.1rem 0 0 #1B71FC;
    position: relative;
    left: -2px;
    top: -2px;
}

.symbol-position-2 {
    position: relative;
    top: 31px;
    left: 77px;
    font-weight: bold;
    width: 24px;
    text-align: center;
    background-color: white;
}

.symbol-position-3 {
    position: relative;
    top: 76px;
    left: 32px;
    font-weight: bold;
    width: 24px;
    text-align: center;
    background-color: white;
}

.symbol-position-2-click {
    position: relative;
    top: -20px;
    left: 77px;
    font-weight: bold;
    width: 24px;
    text-align: center;
    background-color: white;
    padding: 0;
}

.symbol-position-3-click {
    position: relative;
    top: 23px;
    left: 32px;
    font-weight: bold;
    width: 24px;
    text-align: center;
    background-color: white;
    padding: 0;
}

.symbol-equal {
    font-size: 1.4rem;
    top: 70px;
    left: 34px;
}

.symbol-equal-click {
    font-size: 1.4rem;
    top: 17px;
    left: 34px;
}
</style>