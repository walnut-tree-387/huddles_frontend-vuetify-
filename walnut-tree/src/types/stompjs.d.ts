declare module 'stompjs' {
  interface Client {
    connect(
      headers: { [key: string]: string },
      connectCallback: (frame: any) => void,
      errorCallback?: (error: string) => void
    ): void
    disconnect(disconnectCallback?: () => void, headers?: { [key: string]: string }): void
    subscribe(
      destination: string,
      callback: (message: Message) => void,
      headers?: { [key: string]: string }
    ): Subscription
    send(destination: string, headers?: { [key: string]: string }, body?: string): void
    onreceipt?: (frame: any) => void
  }

  interface Message {
    body: string
    headers: { [key: string]: string }
  }

  interface Subscription {
    unsubscribe(): void
  }

  export function over(socket: WebSocket): Client
}
