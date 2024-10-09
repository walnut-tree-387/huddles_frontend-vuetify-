import { apiService } from './ApiCaller'
import type { AxiosResponse } from 'axios'

interface Huddle {
  id: string
  name: string
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
