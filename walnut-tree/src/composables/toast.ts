import { useToast } from 'vue-toastification'
import WalnutToast from '@/components/toasts/WalnutToast.vue'
import { extractErrorMessage } from '@/plugins/error'

export type ToastType = 'success' | 'error' | 'info' | 'warning'

export function useWalnutToast() {
  const toast = useToast()

  function callToast(message: string, type: ToastType, options?: Record<string, any>) {
    const charCount = message.length
    const timeout = Math.min(charCount * 50, 8000)
    toast(
      {
        component: WalnutToast,
        props: {
          message,
          type
        }
      },
      {
        timeout,
        ...options
      }
    )
  }

  const showSuccess = (msg: string, options?: Record<string, any>) => {
    callToast(msg, 'success', options)
  }
  const showError = (err: unknown, options?: Record<string, any>) => {
    callToast(extractErrorMessage(err), 'error', options)
  }
  const showWarning = (msg: string, options?: Record<string, any>) => {
    callToast(msg, 'warning', options)
  }
  const showInfo = (msg: string, options?: Record<string, any>) => {
    callToast(msg, 'info', options)
  }

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo
  }
}
