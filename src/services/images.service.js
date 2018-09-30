import Vue from 'vue';
import { Image, Size } from '../models/image';

/**
 * Represents an image service.
 */
export class ImagesService {
  _url =
    "http://api.flickr.com/services/feeds/photos_public.gne?tags=city&tagmode=any&format=json";

  constructor() {}

  getImages(cityName = "Kaohsiung") {
    const cityUrl = this._url.replace("city", cityName);
    const jsonpOptions = {
      jsonp: 'jsoncallback'
    }

    Vue.http.jsonp(cityUrl, jsonpOptions).then(
      res => console.log(res)
    );
  }
}
