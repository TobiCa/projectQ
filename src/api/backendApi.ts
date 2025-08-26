import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { Message } from '@/types/Message'
interface ApiResponse<T = any> {
  data: T
  status: number
  message?: string
}

class BackendApi {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8080/', // Update with your backend URL
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Response interceptor
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('API Error:', error)
        return Promise.reject(error)
      },
    )
  }

  async getMessageList<T>(params?: object): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse = await this.api.get('messages/get-message-list', {
        params,
      })
      return {
        data: response.data,
        status: response.status,
      }
    } catch (error: any) {
      throw {
        message: error.message,
        status: error.response?.status,
      }
    }
  }

  async sendMessage<T>(message: Message): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse = await this.api.post('messages/send-message/', {
        'content': message.text,
        'user_id': message.sender,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return {
        data: response.data,
        status: response.status,
      }
    } catch (error: any) {
      throw {
        message: error.message,
        status: error.response?.status,
      }
    }
  }
}

export const backendApi = new BackendApi()
export default backendApi
