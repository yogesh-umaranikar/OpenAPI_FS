import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

getConfig() {
  return this.http.get<any>("https://localhost:44324/api/Chuck/GetCategories");
}

getChuckbyID(s:any) {
    return this.http.get<any>("https://localhost:44324/api/Chuck/GetSearchCategory?s=" + s);
  }

  getSwapi() {
    return this.http.get<any>("https://localhost:44324/api/Swapi");
  }

}