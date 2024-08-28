export function getFormatedDate(dateString: string | Date): string {
  console.log(dateString);
  
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return day + '/' + month + '/' + year
}
