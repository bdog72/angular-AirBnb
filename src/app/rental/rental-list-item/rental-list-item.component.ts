import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bwm-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.scss']
})
export class RentalListItemComponent implements OnInit {
  // rentals: any[] = [1, 2, 3, 4];

  @Input()
  rental: any;

  constructor() {}

  ngOnInit() {}
}
