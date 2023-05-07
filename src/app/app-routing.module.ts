import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarPontuacaoComponent } from './pages/registrar-pontuacao/registrar-pontuacao.component';
import { RankingComponent } from './pages/ranking/ranking.component';

const routes: Routes = [
  {path: 'registrar-pontuacao', component: RegistrarPontuacaoComponent},
  {path: 'ranking', component: RankingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

