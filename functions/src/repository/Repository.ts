import * as admin from 'firebase-admin'
import { DocumentReference, Firestore } from '@google-cloud/firestore';

export default class Repository<T> {
    collection: string;
    parent?: DocumentReference;
    db: Firestore;

    constructor(collection: string) {
        this.collection = collection;
        !admin.apps.length ? admin.initializeApp() : admin.app()
        this.db = admin.firestore();
    }

    //update fields in document
    update(item: T,ref: DocumentReference) {
        if (!this.parent) {
            this.db.collection(this.collection).add(item).then().catch((e) => (console.log(e)));
        } else {
           //await this.db.doc(this.parent.id).collection(this.collection).doc(ref.id).update(Object.assign({}, item)).then().catc h( (e)=>(console.log(e)));
        }
    }

    //add new document with generated id
    add(item: T) {
        if (!this.parent) {
            this.db.collection(this.collection).add(item).then().catch((e) => (console.log(e)));
        } else {
            //await this.db.doc(this.parent.id).collection(this.collection).add(Object.assign({}, item)).then().catch((e) => (console.log(e)));
        }
    }

    //overwrite document
    set(item: T, ref: DocumentReference) {
        if (!this.parent) {
            //Is main collection
            this.db.collection(this.collection).add(item).then().catch((e) => (console.log(e)));
        } else {
            //Is sub collection
            //await this.db.doc(this.parent.id).collection(this.collection).doc(ref.id).set(Object.assign({}, item)).then().catch((e) => (console.log(e)));
        }
    }

    delete(item: T, ref: DocumentReference) {
        //should work out a recursive solution to delete possible subcollections aswell if needed.
    }

    setParent(docRef: DocumentReference) {
        this.parent = docRef;
    }
}