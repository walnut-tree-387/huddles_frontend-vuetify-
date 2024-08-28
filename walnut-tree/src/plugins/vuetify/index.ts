// Vuetify
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import { aliases as btnAliases, defaults as btnDefaults } from './v-button'
import { aliases as sheetAliases, defaults as sheetDefaults } from './v-sheet'
import { aliases as textFieldAliases, defaults as textFieldDefaults } from './v-text-field'
import { aliases as selectAliases, defaults as selectDefaults } from './v-select'
import { aliases as fileInputAliases, defaults as fileInputDefaults } from './v-file-input'
import {
  aliases as expansionPanelsAliases,
  defaults as expansionPanelsDefaults
} from './v-expansion-panels'
import { aliases as checkboxAliases, defaults as checkboxDefaults } from './v-checkbox'
import { aliases as menuAliases, defaults as menuDefaults } from './menu'
import { aliases as tableAliases, defaults as tableDefaults } from './table'
import { aliases as appbarAliases, defaults as appbarDefaults } from './appbar'
import { aliases as formAliases, defaults as formDefaults } from './forms'
import { aliases as dialogAliases, defaults as dialogDefaults } from './dialogs'
import { iconsConfig } from './icons'
import { aeslTheme } from './theme'

export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: aeslTheme
    }
  },
  icons: {
    ...iconsConfig
  },
  aliases: {
    ...sheetAliases,
    ...btnAliases,
    ...textFieldAliases,
    ...selectAliases,
    ...fileInputAliases,
    ...expansionPanelsAliases,
    ...checkboxAliases,
    ...menuAliases,
    ...tableAliases,
    ...appbarAliases,
    ...formAliases,
    ...dialogAliases
  },
  defaults: {
    ...sheetDefaults,
    ...btnDefaults,
    ...textFieldDefaults,
    ...selectDefaults,
    ...fileInputDefaults,
    ...expansionPanelsDefaults,
    ...checkboxDefaults,
    ...menuDefaults,
    ...tableDefaults,
    ...appbarDefaults,
    ...formDefaults,
    ...dialogDefaults,
    AeslAuthFormFooter: {
      VBtn: {
        class: ['w-100']
      }
    }
  }
})
