import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  allProductCount:number = 0;

  @Input()
  availableProductCount:number = 0;

  @Input()
  unavailableProductCount:number = 0;
}
