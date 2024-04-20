<template>
    <div class="pagination-container">
        <div class="pagination-info">
            <span>Items per page:</span>
            <select class="per-page-dropdown">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
            <span class="total-items-info">Total items: 0</span>
        </div>
        <div class="pagination-controls">
            <button class="prev-btn">Previous</button>
            <button class="next-btn">Next</button>
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
    data() {
        return {
            perPage: 4, // Default items per page
            totalItems: 100,
            currentPage: 1
            // Add more data properties as needed
        };
    },
    methods: {
        updatePerPage() {
            // Perform any actions needed when the items per page is changed
        },
        prevPage() {
            // Handle previous page button click
            if (this.currentPage > 1) {
                this.currentPage--;
                // Perform any actions needed when going to the previous page
            }
        },
        nextPage() {
            // Handle next page button click
            // Assuming totalItems is updated dynamically, you may need additional logic here to determine if there are more pages
            if ((this.currentPage * this.perPage) < this.totalItems) {
                this.currentPage++;
                // Perform any actions needed when going to the next page
            }
        }
        // Add more methods as needed
    }
};
</script>