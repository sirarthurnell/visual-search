import Vue from 'vue';

/** 
 * Represents a wikipedia service.
 */
export class WikipediaService {
  _url = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=topic';

  constructor() {}

  /**
   * Gets information about a specified topic.
   * @param {string} topic Topic
   */
  getInfo(topic = "Kaohsiung") {
    const topicUrl = this._url.replace("topic", topic);
    const jsonpOptions = {
      jsonp: 'callback'
    }

    return Vue.http.jsonp(topicUrl, jsonpOptions);
  }
}
