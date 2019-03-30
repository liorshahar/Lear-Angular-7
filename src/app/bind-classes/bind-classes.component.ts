import { Component, OnInit } from "@angular/core";

// To use class bindgin ->
// declare new prop and assign to it the (css) class
// can use just 1 method // regular or binding
// use ngClass directive to bind multiple classes -> bind an object
@Component({
  selector: "app-bind-classes",
  template: `
    <h2>Hey {{ name }}</h2>
    <h2 class="text-success">regular way</h2>
    <h2 [class]="successClass">propery binding way</h2>
    <h2 [class.text-danger]="hasError">[class.text-dangar]="hasError"</h2>
    <h2 [ngClass]="messageClass">[ngClass]="messageClass"</h2>
    <h2 [class]="hasError ? 'text-danger' : 'text-success'">
      class condition binding
    </h2>
    <h2 [class]="!hasError ? 'text-danger' : 'text-success'">
      class condition binding
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
export class BindClassesComponent implements OnInit {
  public name = "Lior";
  public successClass = "text-success";
  public errorClass = "text-danger";
  public hasError = true;
  public isSpecial = true;
  public messageClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": true
  };

  constructor() {}

  ngOnInit() {}
}
