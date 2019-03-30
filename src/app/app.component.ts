import { Component } from "@angular/core";

// Metadata ->Component Decorator, gave information to angular
@Component({
  selector: "app-root", // custom html tag used to represent the component
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular7";

  constructor() {}
}
