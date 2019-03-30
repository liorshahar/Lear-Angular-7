import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { BindingComponent } from "./binding/binding.component";
import { ProperyBindingComponent } from "./propery-binding/propery-binding.component";
import { BindClassesComponent } from "./bind-classes/bind-classes.component";
import { StyleBindingComponent } from "./style-binding/style-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { TemplateReferenceVariableComponent } from "./template-reference-variable/template-reference-variable.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { NgIfComponent } from "./ng-if/ng-if.component";
import { NgSwitchDirectiveComponent } from "./ng-switch-directive/ng-switch-directive.component";
import { NgForDirectiveComponent } from "./ng-for-directive/ng-for-directive.component";
import { ComponentInteractionComponent } from "./component-interaction/component-interaction.component";
import { ComponentInteractionFatherComponent } from "./component-interaction-father/component-interaction-father.component";
import { PipesComponent } from "./pipes/pipes.component";
//import { EmployeeService } from "./services/employee-service/employee.service";
//import { EmployeeListComponent } from "./services/employee-list/employee-list.component";
//import { EmployeeDetailComponent } from "./services/employee-detail/employee-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ProperyBindingComponent,
    BindClassesComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariableComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgSwitchDirectiveComponent,
    NgForDirectiveComponent,
    ComponentInteractionComponent,
    ComponentInteractionFatherComponent,
    PipesComponent
    //  EmployeeListComponent,
    // EmployeeDetailComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [
    /* EmployeeService */
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
