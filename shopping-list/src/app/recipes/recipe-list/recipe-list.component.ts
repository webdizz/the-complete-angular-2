import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Test description', 'https://c.pxhere.com/photos/c2/b0/eat_cheese_kohlrabi_tomatoes_au_gratin_meal_olives_cook-1323649.jpg!d')
  ]

  constructor() { }

  ngOnInit() {
  }

}
