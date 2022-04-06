import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, throwError } from 'rxjs';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { User } from '../models/user.model';
import { USER_ERRORS } from '../utils/user.errors';

@Injectable({
  providedIn: 'root',
})

export class UserFirestoreService extends FirestoreService {
  protected collection: string;

  constructor(firestore: AngularFirestore) {
    super(firestore);
    this.collection = this.USERS_COLLECTION;
  }

  public findUserByEmail(email: string): Promise<User | undefined> {
    if (!email || email.length <= 0) {
      return Promise.reject(USER_ERRORS.email.notProvided);
    }
    return this.firestore
      .collection(this.collection)
      .ref.where('email', '==', email)
      .limit(1)
      .get()
      .then((user) => {
        return user?.docs[0]?.data() as User;
      });
  }

  public findUserById(id: string): Observable<User | undefined> {
    if (!id || id.length <= 0) {
      return throwError(() => new Error(USER_ERRORS.id.notProvided));
    }
    return this.firestore
      .collection(this.collection)
      .doc(id)
      .valueChanges()
      .pipe(map((user) => user as User));
  }
}
