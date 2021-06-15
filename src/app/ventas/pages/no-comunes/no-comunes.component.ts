import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

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
 
  // KeyValue Pipe 
  persona = {
    nombre: 'Stefan',
    edad: 26,
    direccion: 'Ottawa, Canadá'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(5000).pipe( tap( () => console.log('intervalo') ) );

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
