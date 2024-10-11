import { da } from 'vuetify/locale'
import { apiService } from './ApiCaller'
import type { AxiosResponse } from 'axios'

interface Huddle {
  uuid: string
  name: string
  avatar: string,
  members: number
}

export class HuddleService {
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
  static async addUserToHuddle(data: Object): Promise<void> {
    try {
      await apiService<void>({
        endpoint: '/huddles/add-user',
        method: 'PUT',
        data: data
      })
    } catch (error) {
      throw new Error(`Failed to add users to the huddles: ${error}`)
    }
  }

  static async createHuddle(huddleData: Omit<Huddle, 'id'>): Promise<Huddle> {
    try {
      const response: AxiosResponse<Huddle> = await apiService<Huddle>({
        endpoint: '/huddles',
        method: 'POST',
        data: huddleData
      })
      return response.data
    } catch (error) {
      throw new Error(`Failed to create huddle: ${error}`)
    }
  }
}
