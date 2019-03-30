import { Component, OnInit } from "@angular/core";

// Metadata ->Component Decorator, gave information to angular
@Component({
  // There is 3 ways to  specified selector
  // 1) selector: 'app-test' in the html -> <app-test></app-test>
  // 2) as .class selector: '.app-test' in the html -> <div class="app-test"></div>
  // 2) as [attribute] selector: '[app-test]' in the html -> <div app-test></div>
  //
  // There is two ways to write the html
  // 1)  templateUrl: "./test.component.html",
  // 2)  inline  -> template: `<p>test works!</p>`,
  //
  // There is two ways to write the css
  // 1)  styleUrls: ["./test.component.css"]
  // 2)  inline  -> styles:[ `
  //                          div {
  //                                   color: red
  //                              }
  //                        `]

  selector: "app-component",
  templateUrl: "./component.component.html",
  styleUrls: ["./component.component.css"]
})
export class ComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
