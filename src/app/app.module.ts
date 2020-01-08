import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { RowComponent } from './row/row.component';
import { TableComponent } from './table/table.component';
import { CellComponent } from './cell/cell.component';
import { HeadCellComponent } from './head-cell/head-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    RowComponent,
    TableComponent,
    CellComponent,
    HeadCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
