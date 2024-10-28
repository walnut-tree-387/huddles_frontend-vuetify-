import axios, { AxiosError } from 'axios'
import { useTokenStore } from '@/stores/autorizationToken'
import type { AxiosResponse } from 'axios'
const baseURL = 'http://localhost:8084/api/'

interface ApiServiceParams {
  endpoint: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: any
  params?: Record<string, any>
}

export async function apiService<T>({
  endpoint,
  method,
  data = {},
  params = {}
}: ApiServiceParams): Promise<AxiosResponse<T>> {
  try {
    const token = useTokenStore().getToken
    const response = await axios({
      baseURL,
      url: endpoint,
      method,
      params,
      data,
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    return response
  } catch (error) {
    throw error
  }
}

export async function apiServiceWithoutToken<T>({
  endpoint,
  method,
  data = {},
  params = {}
}: ApiServiceParams): Promise<AxiosResponse<T>> {
  try {
    const response = await axios({
      baseURL,
      url: endpoint,
      method,
      params,
      data
    })
    return response
  } catch (error) {
    throw error;
  }
}
