declare module 'sockjs-client' {
  interface SockJS extends WebSocket {
    onopen: (event?: Event) => void
    onclose: (event?: Event) => void
    onmessage: (event: MessageEvent) => void
    send(data: any): void
    close(): void
  }

  export default class SockJS {
    constructor(url: string, protocols?: string[], options?: object)
    onopen: (event?: Event) => void
    onclose: (event?: Event) => void
    onmessage: (event: MessageEvent) => void
    send(data: any): void
    close(): void
  }
}
