<template>
    <v-card class="profile-tab">
        <v-tabs
            align-tabs="center"
            color="deep-purple-accent-4"
            v-model="activeTab"
            class="tabs-style"
        >
            <v-tab :value="1"><strong>Login</strong></v-tab>
            <v-tab :value="2"><strong>Registration</strong></v-tab>
        </v-tabs>
        <v-window class="tab-window" v-model="activeTab">
            <v-window-item :value="1">
            <LoginComponent />
            </v-window-item>
            <v-window-item :value="2">
                <RegistrationComponent @success="activeTab = 1"/>
            </v-window-item>
        </v-window>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginComponent from '../huddle/LoginComponent.vue'
import RegistrationComponent from '../huddle/RegistrationComponent.vue'
import NilamUserInformation from '@/components/NilamUserInformation.vue';
export default defineComponent({
    components: {
        LoginComponent, RegistrationComponent
    },
    data() {
        return {
            activeTab: 1
        };
    }
});
</script>

<style scoped>
.profile-tab {
    margin: 10px;
    padding: 10px; 
    border-radius: 10px; 
    box-shadow: none; 
    border: none; 
}
.tab-window{
    display: flex;
    justify-content: center;
    width: 300px;
    margin: auto;
}
.login-form{
    display: flex;
    width: 300px;
}
</style>
