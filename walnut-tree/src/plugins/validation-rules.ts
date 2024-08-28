export function required(value: string) {
  if (value !== undefined && value !== '' && value !== null) return true
  else return 'This field is required'
}
export function minMax(value: string) {
  if (value.length >= 4 && value.length <= 20) return true 
  else return 'Password must be between 4 - 20 Character long'
}
export function previntFutureDate(value: string) {
  const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset the time part to compare only the date

      if (selectedDate > today)  return 'Future date is not allowed'
      return true 

}

export function email(value: string) {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(value) || 'Email is invalid'
}
export function password(value: string) {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  return (
    pattern.test(value) ||
    'Password must contain a minimum of 8 letters with atleast 1 uppercase, 1 lowercase, 1 numeric and 1 special character (@$!%*?&)'
  )
}
export function confirmPassword(confirmPassword: string) {
  return (password: string) => {
    return password === confirmPassword || 'Passwords do not match'
  }
}
