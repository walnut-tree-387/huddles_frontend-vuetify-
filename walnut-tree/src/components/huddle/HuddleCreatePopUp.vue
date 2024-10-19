<template>
    <div v-if="isVisible" class="popup-backdrop" @click.self="close">
      <div class="popup-content">
        <HuddlePopUpCloseButton size="28" class="pop-up-close-btn" @click="close" />
        <v-card class="huddle-create-card">
            <v-card-title> Create new Huddle</v-card-title>
            <v-card-text>
                <v-form class="huddle-create-form" ref="form" lazy-validation>
                    <v-text-field
                        v-model="huddleName"
                        label="Enter the name"
                        type="text"
                        required
                    ></v-text-field>
                </v-form>
                <v-btn size="small" @click="createHuddle" color="primary">Create</v-btn>
            </v-card-text>
        </v-card>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { loggedInUserStore } from '../../stores/loggedInUser.js'; 
  import { useTokenStore } from '../../stores/autorizationToken.js'; 
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import HuddlePopUpCloseButton from '../buttons/HuddlePopUpCloseButton.vue'
  import { useWalnutToast } from '../../composables/toast.js';
  import { HuddleService } from '@/Services/HuddleService.js';
  export default defineComponent({
    components : {HuddlePopUpCloseButton},
    props: {
      isVisible: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
        async createHuddle(){
            try{
                const response = await HuddleService.createHuddle({name : this.huddleName});
                this.close();
                if(response === 201){
                    this.showSuccess('Huddle create successfully.')
                }
            }catch(error){
                this.showError('Huddle create failed. ' + error.message);
            }
        }
    },
    setup(props, { emit }) {
      const huddleName = ref('');
      const router = useRouter();
      const user = loggedInUserStore().getUser;
      const { showError, showSuccess } = useWalnutToast();
      const showToast = () => {
        showError('This is a sample Toast');
      };
      const logout = () => {
        useTokenStore().clearToken();
        loggedInUserStore().clearUser();
        close();
        showSuccess('Log out successful! Redirecting to Login...');
        setTimeout(() => {
          router.push('/huddles/login');
        }, 2000);
        router.push('/huddles/login');
      };
  
      const close = () => {
        emit('close');
      };
  
      return {
        huddleName,
        showSuccess,
        showError,
        user,
        logout,
        close
      };
    }
  });
  </script>

<style scoped>
.popup-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
}

.popup-content {
  background-color: white;
  border-radius: 8px;
  min-width: 400px;
  min-height: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  z-index: 1001;
}

.pop-up-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  z-index: 1002;
}
.huddle-create-form{
    display: flex;
    flex-direction: column; 
}
.huddle-create-card{
    min-width: 300px;
}
</style>
  