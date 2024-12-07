import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Post } from "@/models/Post.js"

class PostsService {
  async getPosts() {
    AppState.posts = []
    const response = await api.get('api/posts')
    logger.log('Got posts', response.data)
    const posts = response.data.posts.map(postPOJO => new Post(postPOJO))
    AppState.posts = posts
  }

  async getPostsByCreatorId(profileId) {
    AppState.posts = []
    const response = await api.get(`api/posts?creatorId=${profileId}`)
    logger.log('Got posts by creatorId', response.data)
    const posts = response.data.map(postPOJO => new Post(postPOJO))
    AppState.posts = posts
  }

  setActivePost(post) {
    AppState.activePost = post
  }
}

export const postsService = new PostsService()