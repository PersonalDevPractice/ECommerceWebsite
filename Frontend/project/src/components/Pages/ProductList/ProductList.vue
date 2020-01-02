<template>
<div>
    <div class="card-deck" v-for="chunk in productChunks" :key="chunk">
        <list-item v-for="item in chunk" :key="item" :item="item"></list-item>
    </div>
</div>
</template>

<script>
import ProductItem from './ListItem.vue';
import _ from 'lodash';

export default {
    data: function () {
        return {
            itemList: [1, 2, 3, 4, 5, 6]
        }
    },
    components: {
        listItem: ProductItem
    },
    computed: {
        productChunks(){
          return _.chunk(this.itemList, 3);
      }
    }
}
</script>

<style scoped>
.card-deck {
    padding: 10px;
}
</style>