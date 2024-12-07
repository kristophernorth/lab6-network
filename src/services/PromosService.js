import { AppState } from "@/AppState.js"
import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Promo } from "@/models/Promo.js"

class PromosService {
  async getPromos() {
    const response = await api.get('api/ads')
    logger.log('Got promos', response.data)
    const promos = response.data.map(promoPOJO => new Promo(promoPOJO))
    AppState.promos = promos
  }
}

export const promosService = new PromosService()