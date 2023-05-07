import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pontuacao } from '../model/Pontuacao';

@Injectable({
  providedIn: 'root'
})
export class PontuacaoService {
  constructor(private http: HttpClient) { }

  rootURL = 'https://localhost:7171/api';

  obterRanking() {
    return this.http.get<Array<Pontuacao>>(this.rootURL + '/obter-ranking');
  }
  

  adicionarPontuacao(pontuacao: Pontuacao) {
    return this.http.post<Pontuacao>(this.rootURL + '/adicionar', pontuacao);
  }

}
