import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-if",
  template: `
    <!-- example 1 -->

    <h2 *ngIf="displayName; else elseBlock">
      app-ng-if
    </h2>

    <!-- template-reference-variable -->

    <ng-template #elseBlock>
      <h2>
        name id hidden
      </h2>
    </ng-template>

    <!-- example 2 -->

    <div *ngIf="displayName; then thenBlock; else else1Block"></div>

    <ng-template #thenBlock>
      <h2>
        app-ng-if
      </h2>
    </ng-template>

    <ng-template #else1Block>
      <h2>
        name id hidden
      </h2>
    </ng-template>
  `,
  styles: [``]
})
export class NgIfComponent implements OnInit {
  public displayName = true;

  constructor() {}

  ngOnInit() {}
}
