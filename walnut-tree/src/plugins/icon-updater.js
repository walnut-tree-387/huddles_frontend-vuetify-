import fs from 'node:fs/promises'
import path from 'node:path'

const iconVariantPath = path.resolve('src/assets/icons/light')

async function updateIcon() {
  try {
    let iconsCount = 0
    const iconGroups = await fs.readdir(iconVariantPath)
    const iconGroupPromises = []
    iconGroups.forEach((iconGroup) => {
      console.log({ iconGroup })
      iconGroupPromises.push(
        // eslint-disable-next-line no-async-promise-executor
        new Promise(async () => {
          try {
            const iconGroupPath = path.resolve(iconVariantPath, iconGroup)
            console.log({ iconGroupPath })
            const iconFileNames = await fs.readdir(iconGroupPath)
            const updateFilePromises = []
            iconFileNames.forEach((iconFileName) => {
              const iconFilePath = path.resolve(iconGroupPath, iconFileName)
              updateFilePromises.push(
                // eslint-disable-next-line no-async-promise-executor
                new Promise(async () => {
                  try {
                    const content = await fs.readFile(iconFilePath, 'utf-8')
                    console.log(iconFilePath)
                    console.log(content)

                    // remove width and height
                    let updatedContent = content.replace('width="24" height="24" ', '')
                    // replace fill and add stroke
                    updatedContent = updatedContent.replace(
                      'fill="none"',
                      'fill="currentColor" stroke="currentColor"'
                    )
                    // replace the last fill
                    updatedContent = updatedContent.replaceAll('fill="#25314C"', '')
                    console.log(updatedContent)

                    await fs.writeFile(iconFilePath, updatedContent)
                    iconsCount++
                  } catch (e) {
                    console.log(e)
                  }
                })
              )
            })
            await Promise.all(updateFilePromises)
          } catch (e) {
            console.log(e)
          }
        })
      )
    })
    await Promise.all(iconGroupPromises)
    console.log(iconsCount, 'files updated!')
  } catch (e) {
    console.log(e)
  }
}

updateIcon()
