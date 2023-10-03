import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tipoBordas = ['sem borda','catupiry','cheddar','cream cheese'];

  produtos = [
    {codigo:123,nome:'calabreza',preco:15,descricao:'calabreza,queijo,azeitona',borda:'sem borda'},
    {codigo:124,nome:'mista',preco:15,descricao:'queijo,presunto,oregano',borda:'sem borda'},
    {codigo:125,nome:'portuguesa',preco:18,descricao:'queijo,ovo,tomate,azeitona',borda:'sem borda'},
  ]

  public receberDados(dado: any){
    console.log('fora do componente: '+dado.codigo+' '+dado.nome+' '+dado.preco+' '+dado.descricao);
    this.produtos.push(dado);
  }

}