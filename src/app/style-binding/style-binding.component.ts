import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-style-binding",
  template: `
    <h2>Hey {{ name }}</h2>
    <h2 [style.color]="'blue'">style-binding 1</h2>

    <h2 [style.color]="highLightColor">
      style-binding 2
    </h2>

    <h2 [style.color]="hasError ? 'red' : 'green'">
      condition expression style-binding
    </h2>

    <h2 [style.color]="!hasError ? 'red' : 'green'">
      condition expression style-binding
    </h2>

    <h2 [ngStyle]="myColor">
      [ngStyle] style-binding
    </h2>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `
  ]
})
export class StyleBindingComponent implements OnInit {
  public name = "style-binding";
  public hasError = true;
  public highLightColor = "orange";
  public myColor = {
    color: "blue",
    fontStyle: "italic"
  };
  constructor() {}

  ngOnInit() {}
}
