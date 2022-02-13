import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NavController } from '@ionic/angular';
import {userData} from '../../userData'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private userData:userData,private nav:NavController,private fireDb:AngularFireDatabase) {
   }

  ngOnInit() {
  }
   pageControl;
  ionViewWillEnter()
  {
    (this.pageControl)=(this.userData.pageControl).toString();
    console.log(this.pageControl);
  }

  pageController(event)
  {
    this.userData.pageControl=event.detail.value;
    console.log(event.detail.value);
    this.fireDb.database.ref().update({
      page:event.detail.value
    });
  }

  back()
  {
    this.nav.back();
  }

}
