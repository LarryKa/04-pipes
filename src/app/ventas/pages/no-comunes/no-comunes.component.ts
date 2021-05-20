import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = "Stefan";
  genero: string = "masculino";
  elegido: boolean = false;

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = [ 'María', 'Janet', 'Melissa', 'Raquel', 'Andrea'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  public cambiarCliente( genero: boolean ): void{
    if( genero ){
      this.nombre = 'Stefanny';
      this.genero = 'femenino';
    }else{
      this.nombre = "Stefan";
      this.genero = "masculino";
    }

    this.elegido = genero;    
  }

  public borrarCliente(){
    this.clientes.pop();
  }

}
