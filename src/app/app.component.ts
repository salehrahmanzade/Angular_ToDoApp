import { ToDoItem } from './../../Models/model';
import { Model } from '../../Models/model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TaskTodo';
  model = new Model();
  getname(): string {
    return this.model.user;
  }
  gettodoitem(): [] {
    return this.model.item;
  }
  additem(text): void {
    if (text !== '') {
      this.model.item.push(new ToDoItem(text, false));
    }
  }
}
