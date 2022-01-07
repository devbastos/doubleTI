import { NavegacaoComponent } from './../../components/template/navegacao/navegacao.component';
import { navService } from './../../components/template/navegacao/navegacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private navService: navService) {
    navService.navData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
