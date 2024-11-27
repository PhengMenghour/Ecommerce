<template>
    <NavigationBarComponent/>
    <productCard/>
    <items/>
</template>

<script>
    import NavigationBarComponent from "./components/NavigationBarComponent.vue"
    import productCard from "./components/productCard.vue"
    import items from "./components/items.vue"
    export default{
        components: {
            NavigationBarComponent,
            productCard,
            items,

        },
    }

</script>
<style scoped>

</style>
