<template>
    <div class="pagination-container">
        <div class="pagination-info">
            <span>Items per page:</span>
            <select class="per-page-dropdown" v-bind="perPage" @change="updatePerPage()">
                <option v-for="option in perPageOptions" :value="option" :key="option">{{ option }}</option>
            </select>
            <span class="total-items-info">Total items: {{ totalItems }}</span>
        </div>
        <div class="pagination-controls">
            <button class="prev-btn" @click="getPage('previous')">Previous</button>
            <button class="next-btn" @click="getPage('next')">Next</button>
        </div>
    </div>
</template>
<style scoped>
.pagination-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
}
.pagination-controls button {
    padding: 8px 12px;
    background-color: #1f4102;
    color: #fff;
    border: none;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    margin-right: 10px;
}
.per-page-dropdown {
    padding: 8px;
    margin: 8px;
}
.total-items-info {
    margin-left: 10px;
}
.pagination-controls{
    margin: 0px 0px 0px 10px;
}
</style>
<script>
export default {
    props: {
        perPage: {
            type: Number,
            required: true
        },
        totalItems: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        perPageOptions: {
            type: Array,
            default: () => [10, 20, 30] 
        }
    },
    methods:{
        getPage(value){
            this.$emit('pagination-action', value);
        },
        updatePerPage(){
            this.$emit('updatePerPage', this.perPage)
        }
    }
};
</script>