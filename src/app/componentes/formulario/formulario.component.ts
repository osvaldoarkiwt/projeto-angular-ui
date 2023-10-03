import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  codigo = 125;

  public produto = {
      codigo:this.codigo,
      nome:'',
      preco:0,
      descricao:''
  };  

  @Output() public produtoAdicionado = new EventEmitter();

  public enviarInput(event: Event){
    event.preventDefault();

    this.produto.codigo++;

    let dado = this.produto;

    this.produtoAdicionado.emit(dado);

    //console.log('funcionando: '+dado);
  }

  /*
  public alterarNome(evento: Event){
    this.nome = (evento.target as HTMLInputElement)?.value;
  }*/
}
