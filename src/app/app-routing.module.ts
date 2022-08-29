import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockService } from './services/stock/stock.service';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: 'stocks', component: StockComponent },
  { path: '/stock/:isinCode', component: StockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StockService];
