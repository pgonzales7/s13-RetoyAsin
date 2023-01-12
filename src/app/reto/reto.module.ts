import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente1Component } from './componente1/componente1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    Componente1Component,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports: [
    Componente1Component,
    
  ]
})
export class RetoModule { }
