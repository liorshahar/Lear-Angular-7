import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-switch-directive",
  template: `
    <div [ngSwitch]="color">
      <div [style.color]="'red'" *ngSwitchCase="'red'">You piked red color</div>
      <div [style.color]="'blue'" *ngSwitchCase="'blue'">
        You piked blue color
      </div>
      <div [style.color]="'green'" *ngSwitchCase="'green'">
        You piked green color
      </div>
      <div *ngSwitchDefaultd>
        You piked default color
      </div>
    </div>
  `,
  styles: [``]
})
export class NgSwitchDirectiveComponent implements OnInit {
  public color = "orange";

  constructor() {
    /*     setTimeout(() => {
      this.color = "red";
    }, 3000);

    setTimeout(() => {
      this.color = "blue";
    }, 6000);

    setTimeout(() => {
      this.color = "green";
    }, 9000); */
  }

  ngOnInit() {}
}
