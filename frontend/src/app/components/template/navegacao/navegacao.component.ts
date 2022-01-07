import { navService } from './navegacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
  
})
export class NavegacaoComponent implements OnInit {

    constructor(private navService: navService) { }
  
    ngOnInit(): void {
    }
  
    get title(): string {
      return this.navService.navData.title
    }
  
    get icon(): string {
      return this.navService.navData.icon
    }
  
    get routeUrl(): string {
      return this.navService.navData.routeUrl
    }
}
