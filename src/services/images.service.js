import Vue from 'vue';
import { Image, Size } from '../models/image';

/**
 * Represents an image service.
 */
export class ImagesService {
  _url =
    "http://api.flickr.com/services/feeds/photos_public.gne?tags=topic&tagmode=any&format=json";

  constructor() {}

  /**
   * Gets images about a specified topic.
   * @param {string} topic Topic
   */
  getImages(topic = "Kaohsiung") {
    const topicUrl = this._url.replace("topic", topic);
    const jsonpOptions = {
      jsonp: 'jsoncallback'
    }

    return Vue.http.jsonp(topicUrl, jsonpOptions);
  }
}
