import { apiService } from './ApiCaller'
import { type AxiosResponse, AxiosError } from 'axios'
import { useTokenStore } from '@/stores/autorizationToken'

interface FriendRequest {
  token: string | null
  uuid: string | null
  name: string | null
  email: string | null
}
export class HuddleFriendRequestService {
  static async getFriendRequestList(): Promise<FriendRequest[]> {
    try {
      const response: AxiosResponse<FriendRequest[]> = await apiService<FriendRequest[]>({
        endpoint: 'huddles/buddies/requests',
        method: 'GET'
      })
      return response.data
    } catch (error: any) {
      throw new AxiosError(error.response.data.message)
    }
  }
  static async processFriendRequest(requestUuid: number): Promise<number> {
    try {
      const response: AxiosResponse<number> = await apiService<number>({
        endpoint: 'huddles/buddies/process-request/' + requestUuid,
        method: 'PUT'
      })
      return response.status
    } catch (error: any) {
      throw new AxiosError(error.response.data.message)
    }
  }
}
