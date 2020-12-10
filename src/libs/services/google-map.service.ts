import { Geocode } from '../dto/google-map/Geocode.dto';
import { Client } from '@googlemaps/google-maps-services-js';

class GoogleMapService {
  googleClient;
  constructor() {
    this.googleClient = new Client();
  }

  public async getGeocodes(address: string): Promise<Geocode[] | null> {
    try {
      const result = await this.googleClient.placeAutocomplete({
        params: {
          input: address,
          language: 'vi',
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
        },
      });

      return result.data.predictions;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new GoogleMapService();
