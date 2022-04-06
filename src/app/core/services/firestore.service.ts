import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export abstract class FirestoreService {
  protected abstract collection: string;

  constructor(protected firestore: AngularFirestore) {}

  protected getCollection() {
    return this.firestore.collection(this.collection);
  }
}
