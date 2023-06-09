import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { CardModule } from '../card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationModule } from '../information/information.module';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    InformationModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingModule
  ],
  exports: [
    SearchComponent
   ]
})
export class SearchModule { }
