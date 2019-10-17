<template>
    <div id="app">
        <h1>{{ $t('dashboard') }}</h1>
        <base-button>Base button</base-button>
        <base-link :to="{ name: 'profile' }">Base link</base-link>
        <router-view :key="$route.fullPath" />
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
#app {
    margin-top: 60px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
}
</style>
