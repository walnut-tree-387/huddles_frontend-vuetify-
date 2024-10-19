// src/Services/WebsocketService.ts

import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import { loggedInUserStore } from '../stores/loggedInUser'
import { useNotificationStore } from '../stores/notificationStore'

export default class WebsocketService {
  private stompClient: Stomp.Client | null = null
  private baseURL: string

  constructor() {
    this.baseURL = 'http://localhost:8084'
  }
  //To Send a Message
  // this.stompClient?.send(`/app/send-message`, {}, JSON.stringify({ message: 'First msg' }))

  public connectWebSocket() {
    const socket = new SockJS(`${this.baseURL}/ws?token=${loggedInUserStore().getUser.token}`)
    this.stompClient = Stomp.over(socket as unknown as WebSocket)
    this.stompClient.connect(
      {},
      () => {
        console.log('WebSocket connected!')
        this.stompClient?.subscribe(`/user/queue/notification`, (message: Object) => {
          try {
            const messageBody = message?.body
            const parsedMessage = JSON.parse(messageBody)
            useNotificationStore().addNotification(parsedMessage)
          } catch (error) {
            console.error('Failed to parse message:', error)
          }
        })
      },
      (error: any) => {
        console.error('Error connecting to WebSocket:', error)
      }
    )
    this.stompClient.onreceipt = (frame) => {
      if (frame.headers['receipt-id'] === 'sub-1') {
        console.log('Subscription confirmed')
      }
    }
  }

  disconnectWebSocket() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect(() => {
        console.log('WebSocket disconnected!')
      })
    }
  }
}
