import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserFirestoreService {
  private collection: string;
  private readonly USERS_COLLECTION = 'users';

  constructor(protected firestore: AngularFirestore) {
    this.collection = this.USERS_COLLECTION;
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
