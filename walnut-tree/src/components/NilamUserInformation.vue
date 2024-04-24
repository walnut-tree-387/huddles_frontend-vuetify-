<template>
    <v-card class="profile-tab">
        <div class="key-value">
            <div class="key">Name:</div>
            <div class="value">Mathew Perry</div>
        </div>
        <div class="key-value">
            <div class="key">Age:</div>
            <div class="value">50</div>
        </div>
        <div class="key-value">
            <div class="key">Gender:</div>
            <div class="value">Male</div>
        </div>
        <div class="key-value">
            <div class="key">Location:</div>
            <div class="value">Savar, Dhaka</div>
        </div>
    </v-card>
</template>

<script>
export default {
    // Your script code here
};
</script>

<style scoped>
.profile-tab {
    border: none;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #ffffff;
    width: 300px;
    margin: 20px auto;
}

.key-value {
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
}

.key {
    font-weight: bold;
    /* margin-right: 20px; */
}

.value {
    color: #555;
    width: 200px;
    margin-left: 20px;
}
.v-window__container{
    justify-content: space-between;
}
</style>
