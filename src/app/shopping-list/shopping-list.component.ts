import { Component, OnInit } from '@angular/core';
import { Part } from '../shared/part.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Part[] = [new Part('apples', 5), new Part('tomatoes', 10)];
  constructor() { }

  ngOnInit(): void {
  }

}
