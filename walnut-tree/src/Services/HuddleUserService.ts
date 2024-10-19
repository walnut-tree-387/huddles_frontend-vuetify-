import { apiService } from './ApiCaller'
import type { AxiosResponse } from 'axios'
interface HuddleMemberRelation {
  huddleUuid: string
  userUuid: string
  huddleMemberStatus: string
}
export class HuddleUserService {
  static async getHuddleUsers(uuid: string): Promise<HuddleMember[]> {
    try {
      console.log('making call for huddle users after processing join request')
      const response: AxiosResponse<HuddleMember[]> = await apiService<HuddleMember[]>({
        endpoint: '/huddles/' + uuid + '/members',
        method: 'GET'
      })
      return response.data
    } catch (error) {
      throw new Error(`Failed to fetch huddle user: ${error}`)
    }
  }
  static async createHuddleEntryRequest(uuid: string): Promise<number> {
    try {
      const response: AxiosResponse<HuddleMember[]> = await apiService<HuddleMember[]>({
        endpoint: '/huddles/' + uuid + '/add-request',
        method: 'POST'
      })
      return response.status
    } catch (error) {
      throw new Error(`Failed to fetch huddle user: ${error}`)
    }
  }
  static async getMemberHuddleRelation(huddleUuid: string): Promise<HuddleMemberRelation> {
    try {
      const response: AxiosResponse<HuddleMemberRelation> = await apiService<HuddleMemberRelation>({
        endpoint: `/huddles/${huddleUuid}/member-relation`,
        method: 'POST'
      })
      return response.data
    } catch (error) {
      throw new Error(`Failed to fetch huddle user: ${error}`)
    }
  }
}
