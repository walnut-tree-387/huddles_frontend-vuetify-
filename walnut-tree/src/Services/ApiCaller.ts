import axios from 'axios'
import type { AxiosResponse } from 'axios'

const baseURL = 'http://localhost:8083/api'

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
    const response = await axios({
      baseURL,
      url: endpoint,
      method,
      params,
      data,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhdGF1cjM4NyIsInBhc3N3b3JkIjoiMTIzNDUiLCJyb2xlcyI6W3siYXV0aG9yaXR5IjoiQ09NTU9ORVIifV0sImV4cCI6MTcyODUwMjc3MSwiaWF0IjoxNzI4NDU5NTcxLCJlbWFpbCI6ImF0YXVyLnN0dTIwMTZAanVuaXYuZWR1In0.GPjQlInCiAzMkrsNsesP60LUjIjHnM_-4_Txw5EJxj0'
      }
    })
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API call failed: ${error.response?.data || error.message}`)
    }
    throw new Error(`API call failed: ${error}`)
  }
}
