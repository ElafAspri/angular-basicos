import { Component } from "@angular/core";



@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

  nombre: string = 'Elaf';
  edad  : number = 45

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return ` ${ this.nombre } - ${ this.edad }`;
  }

  cambiarNombre(): void {

    this.nombre = 'Yevier';
  }

  cambiarEdad(): void {
    this.edad = 41;
  }


}
