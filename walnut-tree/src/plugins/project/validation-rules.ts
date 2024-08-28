export function requiredFile(file?: File[]) {
  if (file) return true
  else return 'This file is required'
}
