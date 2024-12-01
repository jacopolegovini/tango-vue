<script>
import AppHeader from '../src/components/AppHeader.vue'
import AppFooter from '../src/components/AppFooter.vue'
import GameMain from '../src/components/GameMain.vue'

export default {
    data() {
        return {

        }
    },
    components: {
        AppHeader,
        GameMain,
        AppFooter,
    }
}
</script>

<template>
    <AppHeader />
    <GameMain />
</template>

<style scoped></style>