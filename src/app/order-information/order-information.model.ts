import {Size} from "../product-size/product-size.model";
import {Composition} from "../product-composition/product-composition.model";
import {ShippingInformation} from "../shipping-information/shipping-information.model";

export class Product {
  //id: string;

  constructor(public size: Size,
              public composition: Composition[]){
    //this.id = uuid();
  }

  getTotalAmount(): number {
    let total: number = 0;

    if( this.composition.length > 0 ) {
      for (let item = 0; this.composition.length; item++) {
        total += this.composition[item].price;
      }
    }
    return total;
  }
}

export class OrderInformation {
  //id: string;

  constructor(public shippingInformation: ShippingInformation,
              public products: Product[]) {
    //this.id = uuid();
  }

  getTotalAmount(): number {
    let total: number = 0;

    if( this.products.length > 0 ) {
      for (let item = 0; this.products.length; item++) {
        total += this.products[item].getTotalAmount();
      }
    }
    return total;
  }
}
