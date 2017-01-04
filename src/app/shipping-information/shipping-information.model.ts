export class ShippingInformation {
  //id: string;

  constructor(public name: string,
              public surname: string,
              public mail: string,
              public phone: string,
              public address: string,
              public postalCode: string,
              public city: string) {
    //this.id = uuid();
  }
}
