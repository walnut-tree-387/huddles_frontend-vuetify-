<template>
  <div class="about">
    <WalnutTreeGroupCard />
    <!-- <walnut-tree-events
      :title="'Ongoing Events'"
      variant="tonal"
      color="info"
      :items="userData"
      :headers="cardHeaders"
    />
    <WalnutTreePrimaryAddButton @click="showToast()" />
    <WalnutToast /> -->
    <!-- <WalnutUserAvatar color="green" /> -->
  </div>
  <!-- <WalnutTreeTableActionButton /> -->
</template>
<script lang="ts">
import { title } from 'process'
import { ref } from 'vue'
import WalnutToast from '@/components/toasts/WalnutToast.vue'
import WalnutUserAvatar from '@/components/WalnutUserAvatar.vue'
import WalnutTreePrimaryAddButton from '../components/buttons/WalnutTreePrimaryAddButton.vue'
import WalnutTreeTableActionButton from '../components/buttons/WalnutTreeTableActionButton.vue'
import WalnutTreeEvents from '@/components/WalnutTreeEvents.vue'
import { useWalnutToast } from '../composables/toast.js'
import WalnutTreeGroupCard from '../../components/cards/WalnutTreeGroupCard.vue'
const cardHeaders = [
  { key: 'host', name: 'Organizer', icon: 'mdi-account' },
  { key: 'email', name: 'Email', icon: 'mdi-email' },
  { key: 'targetAmount', name: 'Target Amount', icon: 'mdi-eye-outline' },
  { key: 'totalDonation', name: 'Total Donation', icon: 'mdi-pencil' }
]
const userData = ref([
  {
    host: 'Hope Foundation',
    email: 'hope.ase@example.com',
    targetAmount: '1000000 Tk.',
    totalDonation: '25000 Tk.',
    id: 1
  },
  {
    id: 2,
    host: 'Jaago Foundation',
    email: 'jago.bahe@example.com',
    targetAmount: '9500000 Tk.',
    totalDonation: '12000 Tk.'
  },
  {
    id: 3,
    host: 'Prothom Alo Foundation',
    email: 'prothom.alo@example.com',
    targetAmount: '9500000 Tk.',
    totalDonation: '12000 Tk.'
  },
  {
    id: 4,
    host: 'Samakal Foundation',
    email: 'samakal@example.com',
    targetAmount: '9500000 Tk.',
    totalDonation: '12000 Tk.'
  },
  {
    id: 5,
    host: 'Samakal Foundation',
    email: 'samakal@example.com',
    targetAmount: '9500000 Tk.',
    totalDonation: '12000 Tk.'
  },
  {
    id: 6,
    host: 'Samakal Foundation',
    email: 'samakal@example.com',
    targetAmount: '9500000 Tk.',
    totalDonation: '12000 Tk.'
  },
  {
    id: 7,
    host: 'Samakal Foundation',
    email: 'samakal@example.com',
    targetAmount: '9500000 Tk.',
    totalDonation: '12000 Tk.'
  }
])
const { showError, showSuccess } = useWalnutToast()
const showToast = () => {
  showError('This a sample Toast')
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
