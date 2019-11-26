import { Component, OnInit } from "@angular/core";
import { RadioOptionModel } from "app/shared/radio/radio-option.model";

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  paymentOptions: RadioOptionModel[] = [
    { label: "dinheiro", value: "MON" },
    { label: "cartão de débito", value: "DEB" },
    { label: "Cartão refeição", value: "REF" }
  ];

  constructor() {}

  ngOnInit() {}
}
