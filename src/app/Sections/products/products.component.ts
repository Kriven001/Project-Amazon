import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

 @Input() products!: any [];
  constructor(private shopping_cart: ShoppingCartService) { }                 //constructor(private api: ApiService) { }

  ngOnInit(): void {
  
  }

addToCart(p:any){                                             
    this.shopping_cart.addProduct(p)
  }

}
