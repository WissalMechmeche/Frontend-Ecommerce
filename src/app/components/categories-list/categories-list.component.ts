import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  categories : ProductCategory[];

  constructor(private productService: ProductService ,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=> {
      this.listCategories();
    });
  }

  listCategories() {
    this.handleListCategories(); 
  }

  handleListCategories(){

     this.productService.getCategoryList().subscribe(
       data => {
         this.categories = data ;
       }
     )
    }

    deleteCategory(cat: ProductCategory) {

      let conf = confirm('Etes-vous sûr de supprimer '+cat.name+' ?');
      if (conf)
        this.productService.deleteCategory(cat.id).subscribe(() => {
          console.log('Category deleted');
          this.SuprimerCategorieDuTableau(cat);
        });
}
    SuprimerCategorieDuTableau(cat : ProductCategory) {
      this.categories.forEach((cur, index) => {
        if(cat.id=== cur.id) {
          this.categories.splice(index, 1);
        }
});
  }
}
