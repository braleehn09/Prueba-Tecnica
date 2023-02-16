import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MatrixComponent } from './matrix/matrix.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'matrix', component: MatrixComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
