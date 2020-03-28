import { Component, OnInit } from '@angular/core';
import { Recipe } from '../workstation.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [new Recipe('Curry', 'nice curry :)', 'https://www.jocooks.com/wp-content/uploads/2019/10/coconut-chicken-curry-1-10-768x960.jpg')];

  constructor() { }

  ngOnInit(): void {
  }

}
