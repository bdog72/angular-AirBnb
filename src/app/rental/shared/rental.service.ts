import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { setTimeout } from 'timers';
import { Rental } from './rental.model';

@Injectable()
export class RentalService {
  private rentals: Rental[] = [
    {
      id: '1',
      title: 'Central Apartment',
      city: 'New York',
      street: 'Times Square',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 3,
      description: 'Very Nice Apartment',
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    },
    {
      id: '2',
      title: 'Central Apartment 2',
      city: 'San Francisco',
      street: 'Main Street',
      category: 'condo',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 2,
      description: 'Very Nice Condo',
      dailyRate: 12,
      shared: true,
      createdAt: '24/12/2017'
    },
    {
      id: '3',
      title: 'Central Apartment 3',
      city: 'Bratsliva',
      street: 'Hlavna',
      category: 'condo',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 2,
      description: 'Very Nice Condo',
      dailyRate: 334,
      shared: true,
      createdAt: '24/12/2017'
    },
    {
      id: '4',
      title: 'Central Apartment 4',
      city: 'Berlin',
      street: 'Haupt Street',
      category: 'house',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 3,
      description: 'Very Nice House',
      dailyRate: 33,
      shared: true,
      createdAt: '24/12/2017'
    }
  ];

  public getRentals(): Observable<Rental[]> {
    const rentalObservable: Observable<Rental[]> = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);

      setTimeout(() => {
        observer.error('I am error');
      }, 2000);

      setTimeout(() => {
        observer.complete();
      }, 3000);
    });
    return rentalObservable;
  }
}
