import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService {
  async getProfiles() {
    const response = await api.get('api/profiles')
    logger.log('Got profiles', response.data)
  }
}

export const profilesService = new ProfilesService()