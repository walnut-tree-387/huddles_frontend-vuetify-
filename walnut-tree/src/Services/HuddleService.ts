import { da } from 'vuetify/locale'
import { apiService } from './ApiCaller'
import type { AxiosResponse } from 'axios'
import type { HuddleJoinRequest } from '@/components/huddle/Models/HuddleJoinRquest'
interface Huddle {
  uuid: string
  name: string
  avatar: string
  members: number
  relation: HuddleMemberRelation
}
interface HuddleMemberRelation {
  huddleUuid: string
  memberUuid: string
  status: string
}

export class HuddleService {
  static async getMyHuddles(): Promise<Huddle[]> {
    try {
      const response: AxiosResponse<Huddle[]> = await apiService<Huddle[]>({
        endpoint: '/huddles/my-huddles',
        method: 'GET'
      })
      return response.data
    } catch (error) {
      throw new Error(`Failed to fetch huddles: ${error}`)
    }
  }
  static async getHuddles(): Promise<Huddle[]> {
    try {
      const response: AxiosResponse<Huddle[]> = await apiService<Huddle[]>({
        endpoint: '/huddles',
        method: 'GET'
      })
      return response.data
    } catch (error) {
      throw new Error(`Failed to fetch huddles: ${error}`)
    }
  }
  static async addUserToHuddle(data: Object): Promise<number> {
    try {
      const response = await apiService<void>({
        endpoint: '/huddles/add-user',
        method: 'PUT',
        data: data
      })
      return response.status
    } catch (error) {
      throw new Error(`Failed to add users to the huddles: ${error}`)
    }
  }
  static async removeUserFromHuddle(huddleUuid: string, userUuid: string): Promise<number> {
    try {
      const response = await apiService<void>({
        endpoint: '/huddles/' + huddleUuid + '/remove-user',
        method: 'DELETE',
        params: {
          userUuid: userUuid
        }
      })
      return response.status
    } catch (error) {
      throw new Error(`Failed to remove users from the huddles: ${error}`)
    }
  }
  static async createHuddle(huddleData: Object): Promise<number> {
    try {
      const response: AxiosResponse<Huddle> = await apiService<Huddle>({
        endpoint: '/huddles',
        method: 'POST',
        data: huddleData
      })
      return response.status
    } catch (error) {
      throw new Error(`Failed to create huddle: ${error}`)
    }
  }
  static async getHuddle(uuid: string): Promise<Huddle> {
    try {
      const response: AxiosResponse<Huddle> = await apiService<Huddle>({
        endpoint: '/huddles/' + uuid,
        method: 'GET'
      })
      return response.data
    } catch (error) {
      throw new Error(`Failed to create huddle: ${error}`)
    }
  }
  static async getHuddleRequests(huddleUuid: string): Promise<HuddleJoinRequest[]>{
    try {
      const response: AxiosResponse<HuddleJoinRequest[]> = await apiService<HuddleJoinRequest[]>({
        endpoint: '/huddles/' + huddleUuid + "/join-request-list",
        method: 'GET'
      })
      return response.data
    } catch (error) {
      throw new Error(`Failed to create huddle: ${error}`)
    }
  }
  static async processHuddleRequest(huddleUuid: string, memberUuid: string, action: string): Promise<number>{
    try {
      const response: AxiosResponse<number> = await apiService<number>({
        endpoint: `/huddles/` + huddleUuid + `/process-request?memberUuid=${memberUuid}&action=${action}`,
        method: 'PUT'
      })
      return response.status
    } catch (error) {
      throw new Error(`Failed to create huddle: ${error}`)
    }
  }
}
