import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-novo-perfil',
  templateUrl: './novo-perfil.page.html',
  styleUrls: ['./novo-perfil.page.scss'],
})
export class NovoPerfilPage implements OnInit {

  cliente = {

    "cliente": "",
    "data": "",
    "qtd": "",
    "vlr_unitario": "",
    "vlr_total": ""
  }
  constructor(public modal: ModalController) { }

  ngOnInit() {
  }
  
  add() {
    this.modal.dismiss(this.cliente)
  }

}




