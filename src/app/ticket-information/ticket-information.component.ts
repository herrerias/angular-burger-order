import {Component, OnInit, Input} from '@angular/core';
import {FormArray} from "@angular/forms";

@Component({
  selector: 'app-ticket-information',
  templateUrl: './ticket-information.component.html',
  styleUrls: ['./ticket-information.component.css']
})
export class TicketInformationComponent implements OnInit {
  @Input()
  private products: FormArray;
  //private prices: Prices = SIZE_PRICES;

  ngOnInit() {
    console.log('Order Ticket',this.products);
  }

  private capitalise(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private getPrice(): string {
    let price: number = 0;

    /*this.order.value.pro.forEach((pizza: Pizza) => {
      price += this.prices[pizza.size].base;
      price += this.prices[pizza.size].toppings * pizza.toppings.length;
    });

    return price.toFixed(2);*/
    return "2.2";
  }

}
