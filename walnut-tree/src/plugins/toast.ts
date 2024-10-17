import { POSITION, type PluginOptions } from 'vue-toastification'

export const toastOptions: PluginOptions = {
  position: POSITION.BOTTOM_CENTER,
  timeout: 5000,
  maxToasts: 10,
  newestOnTop: false,
  transition: 'Vue-Toastification__fade',
  icon: false,
  closeButton: false,
  toastClassName: 'aesl-toast'
}
