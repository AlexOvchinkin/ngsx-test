import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageUserDataComponent } from './page-user-data/page-user-data.component';
import { PageCarDataComponent } from './page-car-data/page-car-data.component';
import { PageDataConfirmComponent } from './page-data-confirm/page-data-confirm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KaskoShellComponent } from './kasko-shell/kasko-shell.component';
import { NgxsModule } from '@ngxs/store';
import { KaskoState } from './kasko.state';

const routes: Routes = [
  {
    path: 'count',
    component: KaskoShellComponent,
    children: [
      { path: '', redirectTo: 'step1', pathMatch: 'full' },
      { path: 'step1', component: PageUserDataComponent },
      { path: 'step2', component: PageCarDataComponent },
      { path: 'end', component: PageDataConfirmComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([KaskoState]),
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [PageUserDataComponent, PageCarDataComponent, PageDataConfirmComponent, KaskoShellComponent]
})
export class KaskoModule { }
