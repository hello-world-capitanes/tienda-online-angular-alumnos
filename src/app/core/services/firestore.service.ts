import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private collection!: string;

  constructor(private firestore: AngularFirestore) { }

  getCollection(){
    return this.firestore.collection(this.collection);
  }
}
