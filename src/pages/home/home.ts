
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { environment } from '../../app/environment';
import { AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable } from 'angularfire2/database';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    public detailPage: any = DetailPage;
    heroes = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
];
    
    objModel = {
        title:"title name",
        shortDesc:"short desc",
        desc:"long desc",
        like:2
        
    }
    
//  constructor(public navCtrl: NavController) {
//      console.log(environment);
//  }
    item: FirebaseObjectObservable<any>;
    item2: FirebaseObjectObservable<any>;
//    item2: FirebaseListObservable<any>;
    test = "";
    constructor(public navCtrl: NavController,db: AngularFireDatabase) {
        
        this.item = db.object('/sundarapp', { preserveSnapshot: true });
        this.item.subscribe(snapshot => {
            this.test = snapshot.val();
        });
        
        this.item2 = db.object('/test', { preserveSnapshot: true });
        this.item2.subscribe(snapshot => {
          console.log(snapshot.val())
            this.heroes = snapshot.val();
//            this.test = snapshot.val();
        });
//        this.item = db.object('https://apptastic-df207.firebaseio.com/sundarapp');
        console.log(this.item);
    }
    
//    testf():void{
    
    
    testf(){
        console.log("TEST2");
        
        this.navCtrl.push(this.detailPage);
    }

}
