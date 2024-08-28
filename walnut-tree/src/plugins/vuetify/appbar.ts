import AeslMainAppbar from '@/components/appbars/AeslMainAppbar.vue'

export const aliases = {
  AeslMainAppbar: AeslMainAppbar
}
export const defaults = {
  AeslMainAppbar: {
    VAppBar: {
      border: true,
      elevation: 0,
      flat: false,
      location: 'top',
      class: ['px-2'],

      VToolbarTitle: {
        class: ['text-h5', 'font-weight-black']
      }
    }
  }
}
