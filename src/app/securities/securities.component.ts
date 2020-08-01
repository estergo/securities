import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SecuritiesService } from './securities.service';
import { Security } from './securites-list/securities-list';
import { interval, Subscription } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { SecurityData } from './securities-data/securities-data';

@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.scss']
})
export class SecuritiesComponent implements OnInit, OnDestroy {
  securitiesList: Security[];
  securitiesData: Map<string, SecurityData> = new Map();
  selectedSecurities: string[] = [];
  subscription: Subscription;
  get securitiesArr(): SecurityData[] {
    return [...this.securitiesData.values()];
  }
  get sybmolsArr(): string[] {
    return [...this.securitiesData.keys()];
  }

  constructor(private securitesService: SecuritiesService) { }

  ngOnInit(): void {
    const storedData = JSON.parse(sessionStorage.getItem('symbolsArr') || '[]');
    storedData.forEach(symbol => this.addSecurity(symbol));
  }

  doSearch(form: NgForm) {
    if (!form.valid) return;
    this.securitesService.getSecuritiesList(form.value.search).subscribe((data: Security[]) => {
      this.securitiesList = data;
    });
  }

  addSecurity(symbol: string) {
    if (symbol[0] && this.securitiesData.has(symbol)) {
      alert('Already subscribed');
    }
    else {
       this.securitesService.getSecuritiesData([symbol], 0)
        .subscribe((security: SecurityData[]) => this.securitiesData.set(security[0].Symbol, security[0]));
    }
    if (!this.securitiesData.size) {
      this.startSubscribe();
    } 
    this.storeData();
  }

  removeSecurity(symbol: string) {
    this.securitiesData.delete(symbol);
    if (!this.securitiesData.size) {
      this.subscription.unsubscribe();
    }
    this.storeData();
  }

  startSubscribe() {
    let updateId: Number = 0;
    this.subscription = interval(500)
      .pipe(
        flatMap(() => this.securitesService.getSecuritiesData(this.sybmolsArr, updateId))
      )
      .subscribe((data: SecurityData[]) => {
        if (data.length) {
          data.forEach(security => this.securitiesData.set(security.Symbol, security));
          updateId = data[0].UpdateId;
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  storeData() {
    sessionStorage.setItem('symbolsArr', JSON.stringify(this.sybmolsArr));
  }

}
