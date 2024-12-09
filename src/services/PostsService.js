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
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }
  
  async getPostsByCreatorId(profileId) {
    AppState.posts = []
    const response = await api.get(`api/posts?creatorId=${profileId}`)
    logger.log('Got posts by creatorId', response.data)
    const posts = response.data.map(postPOJO => new Post(postPOJO))
    AppState.posts = posts
  }
  
  async changePage(pageNumber) {
    const response = await api.get(`api/posts?page=${pageNumber}`)
    const posts = response.data.map(postPOJO => new Post(postPOJO))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
    logger.log ('Got page numbers', response.data)
  }

  async getSearchResults(searchTerm) {
    AppState.currentSearch = searchTerm
    const response = await api.get(`api/profiles?query=${searchTerm}`)
    logger.log('Got search results', response.data)
    const posts = response.data.map(postPOJO => new Post(postPOJO))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }

  async changeSearchPage(pageNumber, searchTerm) {
    const response = await api.get(`api/profiles?query=${pageNumber}&query=${searchTerm}`)
    logger.log('Got search results', response.data)
    const posts = response.data.map(postPOJO => new Post(postPOJO))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }

  // setActivePost(post) {
  //   AppState.activePost = post
  // }
}

export const postsService = new PostsService()