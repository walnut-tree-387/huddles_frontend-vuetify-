import { apiService, apiServiceWithoutToken } from './ApiCaller'
import { isAxiosError, type AxiosResponse, AxiosError } from 'axios'
import { useTokenStore } from '@/stores/autorizationToken'

interface LoggedInUserState {
    token: string | null;
    uuid: string | null;
    name: string | null;
    email: string | null;
  }
export class LoginService {
  static async login(loginRequest: Object): Promise<LoggedInUserState> {
    try {
      const response: AxiosResponse<LoggedInUserState> = await apiServiceWithoutToken<LoggedInUserState>({
        endpoint: 'users/authenticate',
        method: 'POST',
        data: loginRequest
      })
      useTokenStore().setToken(response.data.token);
      return response.data;
    } catch (error: any) {
     throw new AxiosError(error.response.data.message);
    }
  }
  static async registration(loginRequest: Object): Promise<number> {
    try {
      const response: AxiosResponse<void> = await apiServiceWithoutToken<void>({
        endpoint: 'users/register',
        method: 'POST',
        data: loginRequest
      })
      return response.status;
    } catch (error) {
      throw new AxiosError(`Failed to fetch huddle user: ${error}`)
    }
  }
}