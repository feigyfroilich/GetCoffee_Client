import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/classes/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  categoryName: string;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }
  addCategory() {
    console.log('add categery');
    const category = new Category({name: this.categoryName});
    this.categoryService.addCategoryToDB(category).subscribe(res => {
      console.log(res);
    });
  }

}
