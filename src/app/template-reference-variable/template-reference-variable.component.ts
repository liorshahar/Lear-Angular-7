import { Component, OnInit } from "@angular/core";

// to get easly to the DOM propertys like form input
// angular provid as template reference variables
// #-> is a reference to the html tag

@Component({
  selector: "app-template-reference-variable",
  template: `
    <h2>app-template-reference-variable</h2>
    <input #myInput [style.marginRight.px]="20" type="text" />

    <button (click)="onClick(myInput)">Log</button>
  `,
  styles: [``]
})
export class TemplateReferenceVariableComponent implements OnInit {
  public inputValue = "";

  constructor() {}

  ngOnInit() {}

  onClick(myInput) {
    console.log(myInput);
  }
}
