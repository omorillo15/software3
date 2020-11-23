import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';

  public usuario:string;
  public password: string;

  saludo="";
  public rol:string;



  captura(){
  	
  	this.saludo="BIENVENID@ " + this.usuario;
  }



}