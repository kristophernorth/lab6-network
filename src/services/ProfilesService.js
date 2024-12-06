import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Profile } from "@/models/Profile.js"
import { AppState } from "@/AppState.js"

class ProfilesService {
  async getProfiles() {
    const response = await api.get('api/profiles')
    logger.log('Got profiles', response.data)
    const profiles = response.data.map(profilePOJO => new Profile(profilePOJO))
    AppState.profiles = profiles
  }
}

export const profilesService = new ProfilesService()