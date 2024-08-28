import AeslDropdownSubMenu from '@/components/menus/AeslDropdownSubMenu.vue'
import AeslMainMenu from '@/components/menus/AeslMainMenu.vue'
import AeslMenuDropdownItem from '@/components/menus/AeslMenuDropdownItem.vue'
import AeslUserDropdownMenu from '@/components/menus/AeslUserDropdownMenu.vue'

export const aliases = {
  AeslMainMenu: AeslMainMenu,
  AeslMenuDropdownItem: AeslMenuDropdownItem,
  AeslDropdownSubMenu: AeslDropdownSubMenu,
  AeslUserDropdownMenu: AeslUserDropdownMenu
}
export const defaults = {
  VMenu: {
    closeOnContentClick: false
  },
  AeslMainMenu: {
    VList: {
      VListItem: {
        link: true,
        exact: true,
        density: 'comfortable',
        color: 'primary',
        baseColor: 'secondary',
        variant: 'elevated',
        elevation: 0,
        VIcon: {
          end: true
        },
        VListItemTitle: {
          class: ['text-subtitle-1', 'font-weight-bold']
        }
      },
      AeslMenuDropdownItem: {
        VListGroup: {
          color: 'primary',
          baseColor: 'secondary',
          style: {
            '--prepend-width': '48px'
          },
          AeslDropdownSubMenu: {
            VListItem: {
              link: true,
              color: '#ED7CFF',
              baseColor: '#ffffff',
              variant: 'plain',
              VListItemTitle: {
                class: ['text-subtitle-2', 'font-weight-medium']
              }
            }
          }
        }
      }
    }
  },
  AeslUserDropdownMenu: {
    VBtn: {
      icon: true,
      class: 'pa-0',
      width: 40,
      height: 40,
      variant: 'tonal'
    },
    VList: {
      rounded: 'lg',
      VListItem: {
        rounded: 'lg',
        variant: 'text',
        class: ['mb-n2'],
        VListItemTitle: {
          class: ['text-subtitle-1', 'font-weight-medium']
        }
      }
    }
  }
}
