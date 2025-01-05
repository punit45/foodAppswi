import { Component } from '@angular/core';
import { CartserviceService } from '../services/cart/cartservice.service';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../services/order/order.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: any;
  placeOrder = true;
  singleRestuarant: boolean = true;
  restuarantName: string | null = null;
  totalPrice: number | null = null;
  showOrderModal = false;
  orderFailed: boolean | null = null;
  isItemAdded: boolean = false;

  showItemAddedPopup(): void {
    this.isItemAdded = true;
  }
  
  constructor(
    private cartservice: CartserviceService,
    private loginservice: LoginService,
    private orderservice: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cart = this.cartservice.getCartItems();
    this.restuarantName = this.cartservice.getRestaurantName();
    console.log(this.cart);
  }

  // Add to cart
  addToCart(item: any) {
    console.log("item", item);
    this.singleRestuarant = this.cartservice.addtoCart(item, this.restuarantName);
    this.cart = this.cartservice.getCartItems();
    console.log(this.cart);
  }

  // Remove from cart
  removeFromCart(item: any) {
    this.cartservice.removeFromCart(item);
    this.cart = this.cartservice.getCartItems();
  }

  // Calculate total price
  calculateTotal() {
    return this.cartservice.getTotalPrice();
  }

  // Check out and open modal
  checkOut() {
    const loggedin = this.loginservice.getLoggedinData();
    if (!loggedin) {
      this.placeOrder = false;
    } else {
      this.showOrderModal = true;
    }
  }

  onOrderSubmit() {
  if ( this.cart.length > 0) {
    const order = {
      user: this.loginservice.getLoggedinData(),
      cart: { ...this.cart, restaurant: this.restuarantName },
      date: new Date()
    };

    this.orderservice.placeOrder(order).subscribe(
      (response) => {
        console.log("Order Placed Successfully:", response);
     
        this.showItemAddedPopup();

        this.cartservice.resetCart();
        localStorage.removeItem('cartItems');
        localStorage.removeItem('currentRestaurant');
        
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        
      },
      (error) => {
        console.error('Error placing order');
        this.orderFailed = true; // This could be used to show a failure message in a different modal if needed
      }
    );
  }
}


  // Close the modal
  closeModal() {
    this.showOrderModal = false;
  }
  closePopup() {
    this.isItemAdded = false;
  }
}
