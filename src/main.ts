import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Project } from './servce';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>Hello from {{name}}!</h1>

    <div class="container row">
     
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">
                Temporary Project For Learning
                </h3>
            </div>
            <div class="card-body" *ngFor="let i of tempproejcts ">
            <form class="form-horizontal">
              <div class="row" >
                
                  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
                  <label class="form-label">Name</label>:
                  <input type="text" placeholder="Please Write Name" [(ngModel)]="i.name" [ngModelOptions]="{standalone: true}">
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <label class="form-label">Age</label>:
                  <input type="text" placeholder="Please Age"  [(ngModel)]="i.age"  [ngModelOptions]="{standalone: true}">
                
                  </div>

                  
                 
              </div>
              
            </form>
          </div>
          
      </div>
      <button type="button" class="btn btn-primary mt-3" (click)="createreplicate($event)">Add New Block </button>
    </div>
  `,
})
export class App {
  name = 'Angular';

  //tempproejct: any[]
  public tempproejct = new Project();
  public tempproejcts = [];

  createreplicate(days: any) {
    
    //let count = 1;
    //let length = this.tempproejcts.length +1;
    const tempobj = Object.assign({}, this.tempproejct);
    //tempobj.no = this.tempproejcts.length + 1;
      this.tempproejcts.push(tempobj);
      //this.tempproejcts.length + 1;
  
  }
}

bootstrapApplication(App);
