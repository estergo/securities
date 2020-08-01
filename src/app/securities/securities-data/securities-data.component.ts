import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { SecurityData } from './securities-data';

@Component({
  selector: 'app-securities-data',
  templateUrl: './securities-data.component.html',
  styleUrls: ['./securities-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecuritiesDataComponent implements OnInit {
  @Input() securitiesData: SecurityData[];
  @Output() onRemove = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  removeSecurity(symbol: string) {
    this.onRemove.emit(symbol);
  }

}
