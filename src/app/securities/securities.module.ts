import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuritesListComponent } from './securites-list/securites-list.component';
import { SecuritiesDataComponent } from './securities-data/securities-data.component';
import { SecuritiesComponent } from './securities.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [SecuritesListComponent, SecuritiesDataComponent, SecuritiesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    SecuritiesComponent
  ],
  providers: []
})
export class SecuritiesModule { }
