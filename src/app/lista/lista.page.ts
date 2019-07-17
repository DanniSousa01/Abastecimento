
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NovoPerfilPage } from '../novo-perfil/novo-perfil.page';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage {

  clientes;

  constructor(private http: HttpClient, public service: UsuarioService, 
    public loadingController: LoadingController, public modalController: ModalController) {
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.service.list().subscribe(
        (data) => {
          this.clientes = data
          loader.dismiss()
        }
      )
    })
  }

  add(cliente) {
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.service.post(cliente).subscribe(
        (data) => {
          this.clientes.push(data)
          loader.dismiss()
        }
      )
    })
  }
  
  remove(cliente) {
    this.loadingController.create({
      message: "Removido com sucesso !"
    }).then((loader) => {
      loader.present()
      this.service.delete(cliente.id).subscribe(
        (data) => {
          var i = this.clientes.indexOf(cliente);
          this.clientes.splice(i, 1);
          loader.dismiss()
        }
      )
    })
  }

  async abrir_modal() {
    const modal = await this.modalController.create({
      component: NovoPerfilPage
    });
    await modal.present();

    modal.onDidDismiss().then((dados) => {
      this.add(dados.data)
    })
  }

}
