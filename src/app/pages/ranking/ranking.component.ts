import { Component, OnInit, AfterViewInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Jogador } from 'src/app/model/Jogador';
import { Pontuacao } from 'src/app/model/Pontuacao';
import { JogadorService } from 'src/app/services/jogador.service';
import { PontuacaoService } from 'src/app/services/pontuacao.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  
  pontuacoes: Array<Pontuacao>;
  jogadorSelecionado: boolean = false;
  jogador: Jogador;
  constructor(private pontuacaoService: PontuacaoService, private jogadorService: JogadorService, private _router: Router) { }

  ngOnInit() {
    this.pontuacaoService.obterRanking().subscribe(res => this.pontuacoes = res);
    
  }

  selecionarJogador(jogador) {
    this.jogadorService.obterJogador(jogador).subscribe(res => this.jogador = res);
    this.jogadorSelecionado = true;
  }
}
