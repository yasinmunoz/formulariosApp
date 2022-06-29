import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  guardar ( ) {
    console.log ( this.miFormulario )
  }

  nombreValido(): boolean {
    
    const validProducto = this.miFormulario?.controls.producto?.invalid;
    const touchedProducto = this.miFormulario?.controls.producto?.touched;

    return validProducto && touchedProducto;
  }

  precioValido(): boolean {
    
    const touchedProducto = this.miFormulario?.controls.precio?.touched;
    const precioUnderZero = this.miFormulario?.value.precio < 0;
    
    return touchedProducto && precioUnderZero;
  }
  

}
