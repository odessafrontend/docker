import { Component } from "@angular/core";
import { HttpService } from "./services/http/http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "fake-client";
  body = "loading";

  constructor(private http: HttpService) {
    this.http
      .get("/", { responseType: "text" })
      .toPromise()
      .then(response => {
        this.body = response;
      })
      .catch(e => {
        debugger;
        console.error(e);
      });
  }
}
