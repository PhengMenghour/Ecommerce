<template>
    <div>
        <ProductCartiphone/>
        <Card/>
    </div>
</template>
<script>
import Card from '@/components/CartItemComponent.vue';
import ProductCartiphone from '@/components/ProductListComponent.vue';

export default {
    components: {
        ProductCartiphone,
        Card,
    }
}
</script>
<style scoped> 
    
</style>