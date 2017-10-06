import { Component } from '@angular/core';

import { RecentsPage } from '../recents/recents';
import { ContactsPage } from '../contacts/contacts';

import { FavoritePage } from '../favorite/favorite';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ContactsPage;
  tab2Root = RecentsPage;
  tab3Root = FavoritePage
  constructor() {

  }
}
