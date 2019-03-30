import { Component, OnInit } from "@angular/core";

/* The ways to binding data*/

// 1) string interpolatoin: {{ some value }} -> limmited to string
// 2) propery binding [attribute]

@Component({
  selector: "app-binding",
  template: `
    <p>
      binding works!
    </p>
    <p>hey {{ name }}</p>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ "hey " + name }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ getName() }}</h2>
    <h2>{{ "URL: " + siteUrl }}</h2>
  `,
  styles: [``]
})
export class BindingComponent implements OnInit {
  public name = "lior";
  public siteUrl = window.location.href;
  constructor() {}

  ngOnInit() {}

  getName() {
    return "get name() :" + this.name;
  }
}
