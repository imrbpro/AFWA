import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  RestuarantDetails(pageurl:any, params:any){
    this.nav.navigateForward(pageurl,params);
  }
}
