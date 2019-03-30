import { Injectable } from "@angular/core";

//ng g s <service name>
//This service responsible at the employee list data
//The best plase to register a service is in the app.module in -> providers
@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor() {}

  getEmployees() {
    return [
      { id: 1, name: "name1", age: 10 },
      { id: 2, name: "name2", age: 20 },
      { id: 3, name: "name3", age: 30 },
      { id: 4, name: "name4", age: 40 }
    ];
  }
}
