import { apiService } from './ApiCaller'
import type { AxiosResponse } from 'axios'

interface MessageCreateDto {
    text: string
    huddleUuid: string
}
interface MessageGetDto {
    text: string
    uuid: string,
    createdAt: string
    createdBy: Creator
    updatedAt: string
    isOutgoing: boolean
}
interface Creator {
    status: string,
    role: string,
    uuid: string
}
export class ChatService {
    static async sendNewMessageToHuddle(message: MessageCreateDto): Promise<MessageGetDto> {
        try {
            const response: AxiosResponse<MessageGetDto> = await apiService<MessageGetDto>({
                endpoint: '/message',
                method: 'POST',
                data: message 
            })
            return response.data
        } catch (error) {
            throw new Error(`Failed to send message: ${error}`)
        }
    }
    static async getMessagesByHuddleUuid(huddleUuid: string): Promise<MessageGetDto[]> {
        try {
            const response: AxiosResponse<MessageGetDto[]> = await apiService<MessageGetDto[]>({
                endpoint: `/message?huddleUuid=${huddleUuid}&pageSize=10&pageNumber=0`,
                method: 'GET'
            })
            return response?.data?.content
        } catch (error) {
            throw new Error(`Failed to get messages: ${error}`)
        }
    }

}