import { apiService } from './ApiCaller'
import type { AxiosResponse } from 'axios'

interface HuddleUser {
  uuid: string
  memberName: string
  joinedAt: Number
  huddleRole: string
}
export class HuddleUserService {
  static async getHuddleUsers(uuid: string): Promise<HuddleUser[]> {
    try {
      const response: AxiosResponse<HuddleUser[]> = await apiService<HuddleUser[]>({
        endpoint: '/huddles/' + uuid + '/members',
        method: 'GET'
      })
      return response.data
    } catch (error) {
      throw new Error(`Failed to fetch huddle user: ${error}`)
    }
  }
}
