import { Component, OnInit } from "@angular/core";

// Send data to child // like DOM propery
//  [parentData]="massageFromParent"
//  [parentDataDetails]="parentDetails"
//
// Get data from child
//  (childEvent)="messageFromChild = $event"
//  (childEvent1)="getByeFromChild($event)"

@Component({
  selector: "app-component-interaction-father",
  template: `
    <div class="father">
      <p>Child Message: {{ messageFromChild }}</p>
      <app-component-interaction
        [parentData]="massageFromParent"
        [parentDataDetails]="parentDetails"
        [parentFunction]="sendFunctionToChild"
        [parentArrowFunction]="arrowFunction"
        (childEvent)="messageFromChild = $event"
        (childEvent1)="getByeFromChild($event)"
      ></app-component-interaction>
    </div>
  `,
  styles: [
    `
      .father {
        background-color: green;
        width: 400px;
        height: 700px;
        padding-top: 200px;
      }
    `
  ]
})
export class ComponentInteractionFatherComponent implements OnInit {
  public massageFromParent = "Hey From Parent";
  public parentDetails = {
    name: "Lior",
    age: 20,
    gender: "man"
  };

  public messageFromChild = "";

  constructor() {}

  ngOnInit() {}

  getByeFromChild(event) {
    this.messageFromChild = event;
  }

  sendFunctionToChild() {
    console.log(this);
  }

  arrowFunction = () => {
    //bind this to father
    console.log(this);
  };
}
