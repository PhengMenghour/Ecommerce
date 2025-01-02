<template>
    <div>
        <ProductCartiphone />
        <Card />
    </div>
    <div>
        <div v-for="(comment, index) in comments" :key="index" class="comment-wrapper">
            <CommentComponent :image-src="comment.imageSrc" :name="comment.name" :rating="comment.rating"
                :comment="comment.comment" />
        </div>
    </div>
</template>
<script>
import Card from '@/components/CartItemComponent.vue';
import CommentComponent from '@/components/CommentComponent.vue';
import ProductCartiphone from '@/components/ProductListComponent.vue';

export default {
    components: {
        ProductCartiphone,
        Card,
        CommentComponent
    },

    data() {
        return {
            comments: [
                {
                    imageSrc: 'https://via.placeholder.com/50',
                    name: 'Jeffrey',
                    rating: 5,
                    comment:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at congue turpis, sed auctor nunc.',
                },
                {
                    imageSrc: 'https://via.placeholder.com/50',
                    name: 'Emily',
                    rating: 4,
                    comment:
                        'Donec bibendum orci quis magna ultrices porta. Morbi sagittis felis turpis, vitae molestie ligula viverra.',
                },
                {
                    imageSrc: 'https://via.placeholder.com/50',
                    name: 'Michael',
                    rating: 3,
                    comment:
                        'Nullam at sem vel neque finibus sollicitudin et eget enim. Fusce ac venenatis quam, sed aliquet est.',
                },
            ],
        };
    },
}
</script>
<style scoped>
.comment-wrapper {
    margin-bottom: 16px;
}
</style>