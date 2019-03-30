import { Component, OnInit } from "@angular/core";

// Pipes allows as to transform data before displaing it in the view (only for the view)
//  | lowercase , | uppercase | , | titlecase
//  | slice: index, | slice: index : limmit
//  | json
//  | number:'min decimal numbers.min float nun-max float num
//  | percent
//  | currency: 'currency code' : 'code'
//  | date : date: 'short / mideum / long'
@Component({
  selector: "app-pipes",
  template: `
    <h2>
      app-pipes
    </h2>
    <h2>:{{ name }}</h2>
    <h2>loewrcase: {{ name | lowercase }}</h2>
    <h2>uppercase: {{ name | uppercase }}</h2>
    <h2>titlecase: {{ name | titlecase }}</h2>

    <h2>slice :2 {{ name | slice: 2 }}</h2>
    <h2>slice :2:4 {{ name | slice: 2:4 }}</h2>

    <h2>json {{ jsonPerson | json }}</h2>

    <h2>{{ 5.678 | number: "1.2-3" }}</h2>
    <h2>{{ 5.678 | number: "3.4-5" }}</h2>
    <h2>{{ 5.678 | number: "3.1-2" }}</h2>

    <h2>{{ 5.678 | percent }}</h2>

    <h2>{{ 5.678 | currency }}</h2>
    <h2>{{ 5.678 | currency: "GBP" }}</h2>
    <h2>{{ 5.678 | currency: "ILS" }}</h2>
    <h2>{{ 5.678 | currency: "ILS":"code" }}</h2>

    <h2>{{ date }}</h2>
    <h2>{{ date | date: "short" }}</h2>
    <h2>{{ date | date: "shortDate" }}</h2>
    <h2>{{ date | date: "shortTime" }}</h2>
  `,
  styles: [``]
})
export class PipesComponent implements OnInit {
  public name = "Hello Lior";
  public jsonPerson = {
    name: "personNAme",
    age: 20
  };

  public date = new Date();
  constructor() {}

  ngOnInit() {}
}
