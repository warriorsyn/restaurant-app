import { CartItemModel } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {
  items: CartItemModel[] = [];

  clear() {
    this.items = [];
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }

  add(items: MenuItem): void {
    const foundItem = this.items.find(item => item.menuItem.id == items.id);

    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      this.items.push(new CartItemModel(items));
    }
  }

  remove(items: any): void {
    this.items.splice(this.items.indexOf(items), 1);
  }
}
