import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import path from 'node:path'
import fs from 'node:fs/promises'
import { CustomIconLoader } from 'unplugin-icons/dist/types.js'

const iconsPath = path.resolve('./src/assets/icons')
const customElements = ['v-list-item-content', 'v-list-item-group', 'v-list-item-avatar', 'v-title', 'v-cl'];

async function mapIconsWithFileSystemLoader(variant: 'light' | 'regular' | 'filled') {
  const icons: Record<string, CustomIconLoader> = {}
  try {
    const iconGroups = await fs.readdir(path.resolve(iconsPath, variant))
    iconGroups.forEach((iconGroup) => {
      icons[`wt-${variant}-${iconGroup}`] = FileSystemIconLoader(
        path.resolve(iconsPath, variant, iconGroup)
      )
    })
  } catch (e) {
    console.log(e)
  }
  return icons
}
const aesLightIcons = await mapIconsWithFileSystemLoader('light')
const aesRegularIcons = await mapIconsWithFileSystemLoader('regular')
const aesFilledIcons = await mapIconsWithFileSystemLoader('filled')

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElements.includes(tag)
        }
      }
    }),
    vuetify({
      styles: {
        configFile: 'src/assets/settings.scss'
      }
    }),
    Icons({
      compiler: 'vue3',
      customCollections: {
        ...aesLightIcons,
        ...aesRegularIcons,
        ...aesFilledIcons
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 1111
  }
})
