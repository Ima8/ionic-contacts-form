import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactDataProvider,Contact } from '../../providers/contact-data/contact-data' ;
import { ContactDetailPage } from '../contact-detail/contact-detail' ;
/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  contacts: Contact[] ;
  picture: string ;

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public contactData: ContactDataProvider) {
  	this.contacts = this.contactData.loadFavoriteContacts()
    console.log('Constructor > Contacts') ;
  }

  showContact(contactDetail: Contact){
  	this.navCtrl.push(ContactDetailPage,{contact: contactDetail}) ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }
}
