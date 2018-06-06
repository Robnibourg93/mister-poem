import * as admin from 'firebase-admin'

export default class Repository<T> {
    collection: string;
    parent?: DocumentReference;

    constructor(collection: string) {
        this.collection = collection;
    }

    update(item: T) {

    }

    add(item: T) {

    }

    set(item: T) {

    }

    delete(item: T) {

    }

    getDocRef(item: T): DocumentReference {
        const test = new DocumentReference();
        return test;
    }
}}