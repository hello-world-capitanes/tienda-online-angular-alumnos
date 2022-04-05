import { User } from 'src/app/features/user/models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFirestoreService {
  private collection: string;
  private readonly USER_COLLECTION = "users";

  constructor(
    protected  firestore: AngularFirestore;
  ) {
    this.collection = this.USER_COLLECTION;
  }

  findUserByEmail(email:string): Promise<User | undefined> {
    this.firestore.collection(this.collection).ref.where("email", "==", email).get().then(user =>{
      return (user?.docs[0]?.data() as User);
    })

  }
}

