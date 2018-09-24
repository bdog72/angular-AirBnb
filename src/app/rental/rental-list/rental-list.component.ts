import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  rentals: any[] = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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

  constructor() {}

  ngOnInit() {}
}
