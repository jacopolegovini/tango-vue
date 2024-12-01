<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>

    <body>
        <h1>Regolamento di Tango</h1>

        <p><strong>Obiettivo del gioco:</strong> Metti alla prova la tua attenzione ai dettagli, velocità di
            ragionamento e capacità di risolvere problemi. <br> Tango consiste in una griglia 6x6 (36 celle) nella quale
            ogni
            cella può contenere un elemento: un <span class="highlight">sole</span> <span class="sun">☀</span> o una
            <span class="highlight">luna</span><span class="moon">🌙</span>. Il tuo
            compito è identificare in che cella inserire il sole e in quale la luna.
        </p>

        <h2>Come giocare</h2>
        <ul>
            <li>Clicca una volta per il sole, due volte per la luna e tre volte per resettare la casella.</li>
            <li>Una riga deve contenere lo stesso numero di soli e lune, lo stesso vale per le colonne.</li>
            <li>Due elementi uguali possono stare vicini, tre no.</li>
            <li>Il simbolo "X" indica che in quelle due celle è necessario inserire lo stesso elemento.</li>
            <li>Il simbolo "=" indica che in quelle due celle è necessario inserire due elementi diversi.</li>
        </ul>

        <h2>Consigli utili</h2>
        <ul>
            <li>È un gioco di deduzione, non bisogna procedere a caso!.</li>
            <li>Pianifica quali possono essere le tue mosse future così da uscire dalle situazioni più complesse.</li>
            <li>Divertiti e rilassati! In questa versione non è ancora presente il cronometro.</li>
        </ul>
    </body>
</template>

<style scoped>
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 20px;
    color: #333;
}

h1,
h2 {
    color: #007BFF;
}

ul {
    list-style-type: disc;
    margin-left: 20px;
}

.highlight {
    font-weight: bold;
    color: #28A745;
}

.sun {
    color: #FCA61B;
}

.moon {
    color: #1B71FC;
}
</style>