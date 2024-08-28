import { isAxiosError } from 'axios'

export function extractErrorMessage(err: unknown) {
  const defaultErrorMsg = 'Something went wrong!'

  if (typeof err === 'string') {
    // direct error message is passed
    return err || defaultErrorMsg
  } else if (isAxiosError(err)) {
    // this is an axios error
    return err.response?.data?.message || err.message || defaultErrorMsg
  } else if (err instanceof Error) {
    // this is a normal error instance
    return `${err.name || 'Error'}: ${err.message || defaultErrorMsg}`
  } else {
    // handle all remaining cases
    return defaultErrorMsg
  }
}
