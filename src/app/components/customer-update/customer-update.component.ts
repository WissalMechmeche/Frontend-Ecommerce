import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/common/customer';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  currentCustomer = new Customer() ;

  constructor(private activatedRoute: ActivatedRoute,
    private productService : ProductService,
    private router :Router) { }

  ngOnInit(): void {
    this.productService.consulterCustomer(this.activatedRoute.snapshot.params['id']).
    subscribe( Customer =>{ this.currentCustomer = Customer;
       } ) ;
  }

  updateCustomer() {
    this.productService.updateCustomer(this.currentCustomer).subscribe(Customer => {
    this.router.navigate(['customers']);
    console.log('Customer updated');
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}
