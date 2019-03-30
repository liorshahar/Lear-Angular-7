import { Component, OnInit } from "@angular/core";

// in previous binding we saw data flow from class to template
//                                           class -> html
// if class propery was updated then also html was updated,
// but if we want react to user event (mouse or keyboard click's )
// [DOM EVENTS]

@Component({
  selector: "app-event-binding",
  template: `
    <h2>
      DOM event-binding
    </h2>
    <button (click)="onClick()">Greet</button>
    <br />
    <br />
    <button (click)="onClickPassEvent($event)">$event</button>
    <br />
    <br />
    <button (click)="greeting = 'inline'">inline</button>
    <br />
    <br />
    <button (mouseenter)="onHover()" (mouseleave)="onLeave()">hover me</button>
    <br />
    <br />
    <p>{{ greeting }}</p>
    <p>{{ hover }}</p>
    <input [id]="myId" [value]="propery_binding" />
    <input [id]="myId" value="{{ propery_binding }}" />
    <br />
    <br />
  `,
  styles: [``]
})
export class EventBindingComponent implements OnInit {
  public greeting = "";
  public hover = "";
  public propery_binding = "propery_binding";
  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log("button greet was clicked");
    this.greeting = "button greet was clicked";
  }

  onClickPassEvent(event) {
    console.log(event);
  }

  onHover() {
    this.hover = "hover";
    this.propery_binding = "hover in";
  }
  onLeave() {
    this.hover = " and hover leave";
    this.propery_binding = " and hover leave";
  }
}
