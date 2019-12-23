import { Injectable } from "@angular/core";

@Injectable()
export class GlobalService {
  requests = [];

  get load() {
    return this.requests.length > 0;
  }

  addRequest(url: string, type: string) {
    this.requests.push(`${type}${url}`);
  }

  removeRequest(url: string, type: string) {
    this.requests = this.requests.filter(item => item !== `${type}${url}`);
  }
}
