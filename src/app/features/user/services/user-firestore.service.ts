import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserFirestoreService {

  private readonly USERS_COLLECTION = 'users';
  private collection = this.USERS_COLLECTION;

  constructor(protected firestore: AngularFirestore) {
  }

  public async findUserByEmail(email: string): Promise<User | undefined> {
    return this.firestore
      .collection(this.collection)
      .ref.where('email', '==', email)
      .get()
      .then((user) => {
        return user?.docs[0]?.data() as User;
      });
  }
}
