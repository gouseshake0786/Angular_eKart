import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  // name: string = 'Mahmad Gouse';
  addToCart:number = 0;

  product = {
    name: 'iPhone 13',
    price: 999,
    color: 'Matte black',
    discount:8.5,
    inStock: 5,
    pImage : '/assets/images/iphone.png'
  };

  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount / 100);
  } 

  onNameChange(event: any){
    // this.name = event.target.value;
  }

  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
  }

  incrementCartValue(){
    if(this.product.inStock > this.addToCart){      
      this.addToCart++;
    }
  }
}
