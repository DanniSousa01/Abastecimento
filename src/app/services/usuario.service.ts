import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  URL_BASE = "https://5d262f92eeb36400145c59c4.mockapi.io/abastecimento/";

  list() {
    return this.http.get(this.URL_BASE)
  }

  post(cliente) {
    return this.http.post(this.URL_BASE, cliente)
  }

  delete(cliente) {
    return this.http.delete(this.URL_BASE + cliente)
  }

}
