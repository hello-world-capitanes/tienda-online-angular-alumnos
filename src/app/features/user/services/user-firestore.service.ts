import { User } from 'src/app/features/user/models/user.module';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserFirestoreService{

  private collection: string;
  private readonly USERS_COLLECTION = "users";

  constructor( private firestore: AngularFirestore) {

    this.collection = this.USERS_COLLECTION;
   }


   public async findUserByEmail(email: string): Promise<User | undefined>{
     /*
  this.firestone.collection(this.USER_COLLECTION).doc(id).set({id: id, email: email})
   */

     return this.firestore.collection(this.collection).ref.where("email", "==", email).get().then(user => {
       return (user?.docs[0]?.data() as User);
     });
   }
}


