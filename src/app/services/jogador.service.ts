import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jogador } from '../model/Jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {
  jogadorSelecionado: Jogador = new Jogador;
  rootURL = 'https://localhost:7171/api';

  constructor(private http: HttpClient) { }

  obterJogador(jogador) {
    return this.http.get<Jogador>(this.rootURL + '/obter-jogador?nome=' + jogador);
  }
}
