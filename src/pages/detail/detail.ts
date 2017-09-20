
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { environment } from '../../app/environment';
import { AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

    heroes = [
    {id: 1, name:'Superman'}
];
    

    item: FirebaseObjectObservable<any>;
    item2: FirebaseObjectObservable<any>;
    test = "";
    constructor(public navCtrl: NavController,db: AngularFireDatabase) {
        
        this.item = db.object('/sundarapp', { preserveSnapshot: true });
        this.item.subscribe(snapshot => {
            this.test = snapshot.val();
        });
        
        this.item2 = db.object('/test/0', { preserveSnapshot: true });
        this.item2.subscribe(snapshot => {
          console.log(snapshot.val())
        });
        console.log(this.item);
    }
    
    
    testf(){
        console.log("TEST2");
    }

}
