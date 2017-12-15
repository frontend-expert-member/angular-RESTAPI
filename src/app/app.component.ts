import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './app-services.component';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  title = 'Welcome to Angular App';
  getResult: any[];

  constructor(private appComponentService: AppComponentService, private errorMessage: AppComponentService) {}

  ngOnInit() {
    this.appComponentService
        .getService('https://jsonplaceholder.typicode.com/albums')
        .subscribe(result => {
            this.getResult = result;
        } ,
          error => this.errorMessage = <any>error
        );
  }

}
