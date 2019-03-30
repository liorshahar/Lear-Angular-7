import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-component-interaction",
  template: `
    <div class="child">
      <p>{{ messageFromParent }}</p>
      <ul>
        <li>Parent name: {{ parentDetails.name }}</li>
        <li>Parent age: {{ parentDetails.age }}</li>
        <li>Paremt Gender: {{ parentDetails.gender }}</li>
        <br />
        <br />
        <button (click)="fireEvent()">Send Hey to Father</button>
        <br />
        <br />
        <button (click)="fireEvent1()">Send Bye to Father</button>
        <br />
        <br />
        <button (click)="functionFromParent()">function From Parent</button>
        <br />
        <br />
        <button (click)="arrowfunctionFromParent()">
          Arrow function From Parent
        </button>
      </ul>
    </div>
  `,
  styles: [
    `
      .child {
        background-color: gray;
        width: 250px;
        height: 450px;
        margin: 0 auto;
      }
    `
  ]
})
export class ComponentInteractionComponent implements OnInit {
  //Get data from Parent

  //@Input() public parentData; or alias
  @Input("parentData") public messageFromParent;
  @Input("parentDataDetails") public parentDetails;
  @Input("parentFunction") public functionFromParent;
  @Input("parentArrowFunction") public arrowfunctionFromParent;

  //Send data to father -> new EventEmitter
  @Output() public childEvent = new EventEmitter();
  @Output() public childEvent1 = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  fireEvent() {
    this.childEvent.emit("hey from child");
  }

  fireEvent1() {
    this.childEvent1.emit("Bye from child");
  }
}
