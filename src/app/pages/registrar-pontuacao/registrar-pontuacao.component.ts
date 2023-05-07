import { Pontuacao } from 'src/app/model/Pontuacao';
import { PontuacaoService } from './../../services/pontuacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-pontuacao',
  templateUrl: './registrar-pontuacao.component.html',
  styleUrls: ['./registrar-pontuacao.component.css']
})
export class RegistrarPontuacaoComponent implements OnInit {
  DataPartida: Date = new Date;
  PontuacaoTotal: number = 0;
  NomeJogador: string = '';

  pontuacao = new Pontuacao;

  constructor(private pontuacaoService: PontuacaoService) { }

  ngOnInit() {
  }

  salvarPontuacao() {
    this.pontuacao.DataPartida = this.DataPartida;
    this.pontuacao.PontuacaoTotal = this.PontuacaoTotal;
    this.pontuacao.NomeJogador = this.NomeJogador;

    this.pontuacaoService.adicionarPontuacao(this.pontuacao).subscribe();
  }

}
