import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FizzBuzz test';
  public cadena$ = new Subject<String[]>();
  public cadenas: String[] = [];

  agregarCadena(texto: String) {
    this.cadenas.push(texto);
    this.cadena$.next(this.cadenas);
  }

  /* getCadenas$(): Observable<String[]> {
    return this.cadena$.asObservable();
  } */

  ngOnInit() {
    //this.cadenas = this.getCadenas$();
    this.cadena$.subscribe(cadenas => this.cadenas = cadenas);

  }

  Mostrar(): void {
    for (let i = 0; i < 100; i++) {
      let texto = '';
      if (i % 3 == 0)
        texto += "Fizz";
      if (i % 5 == 0)
        texto += "Buzz";
      if (texto == '')
        texto = i.toString();
      this.agregarCadena(texto);

    }
  }

};
