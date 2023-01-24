import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  GoSimple(){
    this.router.navigate(['simples/dragdrop/firststep']);
  }

  GoExchanging(){
    this.router.navigate(['simples/dragdrop/secondstep']);
  }
}
