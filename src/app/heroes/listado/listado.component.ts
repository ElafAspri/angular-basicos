import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

heroes: string[] = ['Eleazar','Francisco','Javier','Gabbo','Janoi','Paulina','Luri','Oswaldo','Abril'];
heroeBorrado: string = '';

borrarHeroe() {
   this.heroeBorrado = this.heroes.shift() || '';


}
}
