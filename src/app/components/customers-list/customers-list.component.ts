import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/common/customer';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers : Customer[];

  constructor(private productService: ProductService ,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=> {
      this.listCustomers();
    });
  }
  listCustomers() {
    this.handleListCustomers(); 
  }

  handleListCustomers(){

     this.productService.getCustomerList().subscribe(
       data => {
         this.customers = data ;
       }
     )
    }
    deleteCustomer(customer: Customer) {

      let conf = confirm('Etes-vous sûr de supprimer '+customer.firstName+' ?');
      if (conf)
        this.productService.deleteCustomer(customer.id).subscribe(() => {
          console.log('Customer deleted');
          this.SuprimerCustomerDuTableau(customer);
        });
  }
    SuprimerCustomerDuTableau(customer : Customer) {
      this.customers.forEach((cur, index) => {
        if(customer.id=== cur.id) {
          this.customers.splice(index, 1);
        }
  });
  }

}
