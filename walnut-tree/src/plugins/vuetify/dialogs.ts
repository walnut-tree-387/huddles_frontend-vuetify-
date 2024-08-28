import AeslDialog from '@/components/dialogs/AeslDialog.vue'

export const aliases = {
  AeslDialog: AeslDialog
}
export const defaults = {
  AeslDialog: {
    VDialog: {
      contained: false,
      maxHeight: '100%',
      maxWidth: '100%',
      minWidth: '200px',
      minHeight: '100px',
      VCard: {
        VCardTitle: {
          class: ['text-h5', 'font-weight-bold'],
          VBtn: {
            size: 'small',
            variant: 'text',
            color: 'secondary',
            rounded: 'lg'
          }
        },
        VCardActions: {
          VBtn: {
            variant: 'elevated',
            width: 170,
            rounded: 'lg'
          }
        }
      }
    }
  }
}
