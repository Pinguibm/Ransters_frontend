import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExportComponent } from './export/export.component'
import { FooterComponent } from './footer/footer.component'
import { Test1Component } from './test1/test1.component';
import { ExcelComponent } from './excel/excel.component';




const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'export',
    component: ExportComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'test1',
    component: Test1Component
  },
  {
    path: 'excel',
    component: ExcelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
