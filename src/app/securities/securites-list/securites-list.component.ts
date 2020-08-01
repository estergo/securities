import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Security } from './securities-list';

@Component({
  selector: 'app-securites-list',
  templateUrl: './securites-list.component.html',
  styleUrls: ['./securites-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecuritesListComponent implements OnInit {
  @Input() securitiesList: Security[];
  @Output() onSelect = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  selectSecurity(security: Security) {
    this.onSelect.emit(security.Symbol);
  }
}
