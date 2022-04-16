import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  newCategory = new ProductCategory();

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService, 
    private router: Router) { }

  ngOnInit(): void {
    this.productService.getCategoryList().subscribe(()=>{
      this.addCategory();
    });
  }
   
  
  addCategory() {
    this.productService.addCategory(this.newCategory).subscribe((cat) => {
      console.log(cat);
      this.router.navigate(['categories']);
    });
  }

}
