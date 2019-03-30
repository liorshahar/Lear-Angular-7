import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-for-directive",
  template: `
    <h2>"app-ng-for-directive</h2>
    <div
      *ngFor="
        let color of colors;
        index as i;
        first as f;
        last as l;
        odd as o;
        even as e
      "
    >
      <h2 [style.color]="color">
        {{ i }} - {{ color }} first: {{ f }} | last: {{ l }}
      </h2>
    </div>
  `,
  styles: [``]
})
export class NgForDirectiveComponent implements OnInit {
  public colors = ["red", "blue", "green", "black"];

  constructor() {}

  ngOnInit() {}
}
