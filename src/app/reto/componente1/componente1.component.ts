import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  // Ejercicio 1
name = new FormControl('')
  
// Ejercicio 2
num1=0;
op="ninguno";

// Ejercicio 3
   persona = {
    Apellido: 'Arcila',
    Casado: 'false',
    Direccion: 'Calle 35 # 43 28',
    nombre: 'Diego',
    telefono: 3859720,
    };
    
    persona2 = {
    Apellido: 'Bueno',
    Casado: 'false',
    Direccion: 'CR 16A # 53 28',
    nombre: 'Kevin',
    telefono: 31485579954,
    }
    
    persona3 = {
    Apellido: 'Palomino',
    Casado: 'false',
    Direccion: 'CR 25 # 52 33',
    nombre: 'Natalia',
    telefono: 32255945555,
    }

}
