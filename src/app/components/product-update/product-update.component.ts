import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  currentProduct = new Product() ;
  categories : ProductCategory[];

  constructor(private activatedRoute: ActivatedRoute,
    private productService : ProductService,
    private router :Router) { }

  ngOnInit(): void {
    this.productService.consulterProduct(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentProduct = prod; 
      } ) ;
      this.activatedRoute.paramMap.subscribe(()=> {
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

  updateProduct() {
    this.productService.updateProduct(this.currentProduct).subscribe(prod => {
    this.router.navigate(['products']);
    console.log('Product updated');
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }


}
