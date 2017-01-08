import {ShippingInformation} from "../shipping-information/shipping-information.model";
import {ProductInformation} from "../product-information/product-information.model";

export class OrderInformation {
  //id: string;

  constructor(public shippingInformation: ShippingInformation,
              public products: ProductInformation[]) {
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
