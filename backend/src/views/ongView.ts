import Ong from '../models/Ongs';
import imagesView from './imagesView';

export default {
  // Função para retorno de dados para uma ong
  render(ong: Ong) {
    return {
      id: ong.id,
      name: ong.name,
      latitude: ong.latitude,
      longitude: ong.longitude,
      about: ong.about,
      instructions: ong.instructions,
      opening_hours: ong.opening_hours,
      open_on_weekends: ong.open_on_weekends,
      image: imagesView.renderMany(ong.images) 
    }
  },
  /**
   * Função para retorno de dados de várias ong's
   * 
   * this.render(ong) = reaproveitando os dados já passados da função de cima
   * */ 
  renderMany(ongs: Ong[]) {
    return ongs.map(ong => this.render(ong))

  }
}