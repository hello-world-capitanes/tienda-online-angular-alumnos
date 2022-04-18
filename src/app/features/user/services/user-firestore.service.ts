import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, throwError } from 'rxjs';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { User } from '../models/user.model';
import { USER_ERRORS } from '../utils/user.errors';

interface UserToRegister {
  id: string,
  email: string,
  name: string,
  lastname1: string,
  lastname2: string,
  active: boolean,
}

@Injectable({
  providedIn: 'root',
})
export class UserFirestoreService extends FirestoreService {
  protected collection: string;

  private readonly USERS_COLLECTION = 'users';

  constructor(
    firestore: AngularFirestore
  ) {
    super(firestore);
    this.collection = this.USERS_COLLECTION;
  }

  public signUp(user: User): Promise<User | undefined> {
    if (!user || !user?.id || user?.id.length <= 0) {
      return Promise.reject(USER_ERRORS.database.notFound);
    }
    user.active = true;
    const userToStore = user as UserToRegister;
    return this.getCollection().doc(user?.id).set(user).then(() => {
      return user;
    });
  }

  public findUserByEmail(email: string): Promise<User | undefined> {
    if (!email || email.length <= 0) {
      return Promise.reject(USER_ERRORS.email.notProvided);
    }
    return this.getCollection()
      .ref.where('email', '==', email)
      .limit(1)
      .get()
      .then((user) => {
        return user?.docs[0]?.data() as User;
      }).catch(error=> {
        console.error(error);
        return undefined;
      });
  }

  public findUserById(id: string): Observable<User | undefined> {
    if (!id || id.length <= 0) {
      return throwError(() => new Error(USER_ERRORS.id.notProvided));
    }
    return this.getCollection()
      .doc(id)
      .valueChanges()
      .pipe(map((user) => user as User));
  }

}
