import { Component, OnInit } from "@angular/core";

// The diff b/w html attribute and dom propery is ->
// Attribute defined by the html (can't change)
// propery defined by the DOM (can change)
// * When we binding with propery binding we actualy binding to
// the DOM property (they can change)
// * We can use wite string intrpolation but they are limmited to string
//
//
@Component({
  selector: "app-propery-binding",
  template: `
    <h2>hey {{ name }}</h2>
    <p>
      propery-binding!
    </p>
    <input type="text" value="regular" />
    <hr />
    <input [id]="myId" [value]="propery_binding" />
    <hr />
    <input id="{{ myId }}" value="{{ string_interpolation }}" />
    <hr />
    <!--limmited to string <input id="{{ myId }}" value="lior" />-->
    <input disabled [id]="myId" value="disabled" />
    <hr />
    <input [disabled]="false" [id]="myId" value="disabled = false" />
    <hr />
    <input [disabled]="true" [id]="myId" value="disabled = true" />
    <hr />
    <input [disabled]="input_disabled" [id]="myId" value="input_disabled" />
    <hr />
    <input
      bind-disabled="input_disabled"
      [id]="myId"
      value="bind input_disabled"
    />
    <hr />
  `,
  styles: [``]
})
export class ProperyBindingComponent implements OnInit {
  public regular = "regular";
  public propery_binding = "propery_binding";
  public string_interpolation = "string_interpolation";
  public myId = "testId";
  public input_disabled = false;
  public input_value = "test value";
  constructor() {}

  ngOnInit() {}
}
