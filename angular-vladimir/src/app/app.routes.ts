import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { ApiDataComponent } from '../app/api-data/api-data.component';
import { FormComponent } from '../app/form/form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api-data', component: ApiDataComponent },
  { path: 'form', component: FormComponent }
];
