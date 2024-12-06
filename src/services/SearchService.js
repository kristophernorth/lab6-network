import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class SearchService {
  async getSearchResults() {
    const response = await api.get('api/profiles')
    logger.log('Got search results', response.data)
  }
}

export const searchService = new SearchService()