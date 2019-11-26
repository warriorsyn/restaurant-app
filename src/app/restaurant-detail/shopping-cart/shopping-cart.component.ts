import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "./shopping-cart.service";
import { CartItemModel } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

@Component({
  selector: "mt-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {}

  addMenuItem(item: MenuItem) {
    this.shoppingCartService.add(item);
  }

  items(): CartItemModel[] {
    return this.shoppingCartService.items;
  }

  clear() {
    this.shoppingCartService.clear();
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  removeItem(item: CartItemModel) {
    this.shoppingCartService.remove(item);
  }
}
