import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockService } from './services/stock/stock.service';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'stock/:isinCode', component: StockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StockService];
