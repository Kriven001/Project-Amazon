import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  items!: string;

  constructor(private shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  getShoppingCart(){
    this.items = this.shopping_cart.get_shopping_cart_items();
  }


}
