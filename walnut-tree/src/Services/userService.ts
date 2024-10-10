import { apiService } from './ApiCaller'
import type { AxiosResponse } from 'axios'

interface User {
  uuid: string
  name: string
  email: string
  userName: string
}
export class UserService {
  static async getUsers(uuid: string): Promise<User[]> {
    try {
      const response: AxiosResponse<User[]> = await apiService<User[]>({
        endpoint: '/users',
        method: 'GET'
      })
      return response.data
    } catch (error) {
      throw new Error(`Failed to fetch huddle user: ${error}`)
    }
  }
}
