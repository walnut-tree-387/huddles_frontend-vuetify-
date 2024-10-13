<template>
    <v-card class="login-card">
        <v-card-text>
            <v-form class="login-form" ref="form" v-model="valid" lazy-validation>
                <div style="width: 300px;"><v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    required 
                ></v-text-field></div>
                <v-text-field 
                    v-model="name" 
                    label="Name" 
                    type="text" 
                    reqired
                >
                </v-text-field>
                <v-text-field 
                    v-model="userName" 
                    label="Username" 
                    type="text" 
                    reqired
                >
                </v-text-field>
                <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    type="password"
                    required
                ></v-text-field>
                <v-btn size="small" :disabled="!valid" @click="register" color="green">Register</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { LoginService } from '@/Services/HuddleLoginService.js';
import { defineComponent } from 'vue';
import { loggedInUserStore }  from '../../stores/loggedInUser.js';
import { useWalnutToast } from '../../composables/toast.js';

export default defineComponent({
    components : {  },
    setup() {
        const { showError, showSuccess } = useWalnutToast();
        const showToast = () => {
            showError('This is a sample Toast');
        };
        return {
            showSuccess, 
            showToast,
            showError
        };
    },
    data() {
        return {
            loginToast: {
                type: 'error',
                toastId: null,
                message: '',
            },
            name: '',
            userName: '',
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
        async register() {
            this.error = '';
            if (this.$refs.form.validate()) {
                try {
                    let requestBody = {
                        name: this.name,
                        email: this.email,
                        userName: this.userName,
                        password: this.password,
                    }
                    const loginResponse = await LoginService.registration(requestBody);
                    this.showSuccess('Registration successful! Redirecting to Login...');
                    this.$emit('success');
                } catch (err) {
                    this.showError(err.message)
                }
            }
        },
    },
});
</script>

<style scoped>
.login-card {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
}

.login-form {
    display: flex;
    flex-direction: column; 
}
</style>
