import { Component, OnInit } from "@angular/core";

// when we work with form input it essential that the
// model and the view will be always the in sync

// [(ngModel)]
// [] -> data flow from class to view (html)
// () -> data flow from view to class

@Component({
  selector: "app-two-way-binding",
  template: `
    <h2>app-two-way-binding</h2>
    <input [(ngModel)]="name" type="text" />
    {{ name }}
  `,
  styles: [``]
})
export class TwoWayBindingComponent implements OnInit {
  public name = "";
  public password = "";
  constructor() {}

  ngOnInit() {}
}
