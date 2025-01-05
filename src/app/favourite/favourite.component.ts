import { Component } from '@angular/core';
import { FavouriteService } from '../services/favourite/favourite.service';
import { RestaurantService } from '../services/restaurant/restaurant.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {
  favorites: any[] = [];

  constructor(
    private favouriteService: FavouriteService,
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit() {
    const favoriteNames = this.favouriteService.getFavourites();
    this.favorites = this.restaurantService.getRestuarantsByName(favoriteNames);
    console.log(this.favorites);
  }

  navigateToOrders(restaurant: any) {
    this.restaurantService.setRestaurantInfo(restaurant);
    this.router.navigate(['/orders']);
  }

  removeFromFavorites(index: number) {
    const restaurant = this.favorites[index];
    if (restaurant) {
      this.favouriteService.removeFavourite(restaurant.title);
      this.favorites.splice(index, 1);
      console.log('Removed', restaurant.title);
    }
  }
}
