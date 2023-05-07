import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistrarPontuacaoComponent } from './pages/registrar-pontuacao/registrar-pontuacao.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PontuacaoService } from './services/pontuacao.service';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    MenuComponent,
    RegistrarPontuacaoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PontuacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
