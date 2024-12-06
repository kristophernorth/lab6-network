import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Post } from "@/models/Post.js"

class PostsService {
  async getPosts() {
    const response = await api.get('api/posts')
    logger.log('Got posts', response.data)
    const posts = response.data.map(postPOJO => new Post(postPOJO))
    AppState.posts = posts
  }
}

export const postsService = new PostsService()