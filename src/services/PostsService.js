import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {
  async getPosts() {
    const response = await api.get('api/posts')
    logger.log('Got posts', response.data)
  }
}

export const postsService = new PostsService()