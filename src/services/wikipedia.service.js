import Vue from 'vue';

/** 
 * Represents a wikipedia service.
 */
export class WikipediaService {
  _url = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=city';

  constructor() {}

  getInfo(cityName = "Kaohsiung") {
    const cityUrl = this._url.replace("city", cityName);
    const jsonpOptions = {
      jsonp: 'callback'
    }

    Vue.http.jsonp(cityUrl, jsonpOptions).then(
      res => console.log(res)
    );
  }
}
