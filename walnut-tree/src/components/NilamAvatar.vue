<template>
    <v-container class="profile-root">
        <v-avatar :size="size" class="avatar">
            <v-img alt="Avatar" :src="image"></v-img>
        </v-avatar>
        <v-card class="avatar-details">
            <template v-slot:title>
                Mathew Perry
            </template>
            <template v-slot:subtitle>
                50 / Male
            </template>
            <template v-slot:text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
            </template>
        </v-card>
    </v-container>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            required: true,
        }
    }
};
</script>

<style scoped>
.avatar-details {
    color: black;
    background-color: #ffffff;
    padding: 10px; 
    border-radius: 10px; 
    box-shadow: none; 
    border: none; 
}

.profile-root {
    display: flex;
    align-items: center;
    border: .1rem solid rgb(27, 27, 27);
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
    border-radius: 10px;
}

.avatar {
    margin-right: 20px; /* Spacing between avatar and details */
}

</style>
