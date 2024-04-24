<template>
    <v-card class="profile-tab">
        <v-tabs
            align-tabs="center"
            color="deep-purple-accent-4"
            v-model="activeTab"
        >
            <v-tab :value="1">User Information</v-tab>
            <v-tab :value="2">Registered Users</v-tab>
        </v-tabs>
        <v-window class="tab-window" v-model="activeTab">
            <v-window-item :value="1">
                <NilamUserInformation />
            </v-window-item>
            <v-window-item :value="2">
                <NilamUserInformation />
            </v-window-item>
        </v-window>
    </v-card>
</template>

<script>
import NilamUserInformation from '@/components/NilamUserInformation.vue';
export default {
    components: {
        NilamUserInformation,
    },
    data() {
        return {
            activeTab: 1
        };
    }
};
</script>

<style scoped>
.profile-tab {
    margin: 10px;
    background-color: #ffffff;
    padding: 10px; 
    border-radius: 10px; 
    box-shadow: none; 
    border: none; 
}
.tab-window{
    display: flex;
    align-items: center;
}
</style>
