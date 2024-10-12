<template>
    <v-card class="login-card">
        <v-card-title>
            <h2>Login</h2>
        </v-card-title>
        <v-card-text>
            <v-form class="login-form" ref="form" v-model="valid" lazy-validation>
                <div style="width: 300px;"><v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    required 
                ></v-text-field></div>
                <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    type="password"
                    required
                ></v-text-field>
                <v-btn size="small" :disabled="!valid" @click="login" color="primary">Login</v-btn>
                <v-alert
                    v-if="error"
                    type="error"
                    dismissible
                    class="mt-3"
                >
                    {{ error }}
                </v-alert>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { LoginService } from '@/Services/HuddleLoginService.js';
import { defineComponent } from 'vue';
import { loggedInUserStore }  from '../../stores/loggedInUser.js'

export default defineComponent({
    data() {
        return {
            email: '',
            password: '',
            valid: false,
            error: '',
            emailRules: [
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 2 || 'Password must be at least 2 characters long',
            ],
        };
    },
    methods: {
        async login() {
            this.error = '';
            if (this.$refs.form.validate()) {
                try {
                    let requestBody = {
                        userName: this.email,
                        password: this.password,
                    }
                    const loginResponse = await LoginService.login(requestBody);
                    loggedInUserStore().setUser(loginResponse)
                    this.$router.push('/huddles');
                } catch (err) {
                    this.error = 'Invalid email or password';
                }
            }
        },
    },
});
</script>

<style scoped>
.login-card {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
}

.login-form {
    display: flex;
    flex-direction: column; 
}
</style>
