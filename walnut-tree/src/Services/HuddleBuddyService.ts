import { apiService } from './ApiCaller'
import type { AxiosResponse } from 'axios'

interface HuddleBuddy {
  uuid: string
  name: string
  email: string
  userName: string
}
export class HuddleBuddiesService {
  static async getBuddies(): Promise<HuddleBuddy[]> {
    try {
      const response: AxiosResponse<HuddleBuddy[]> = await apiService<HuddleBuddy[]>({
        endpoint: '/huddles/buddies',
        method: 'GET'
      })
      return response.data
    } catch (error) {
      throw new Error(`Failed to fetch huddle user: ${error}`)
    }
  }
}
