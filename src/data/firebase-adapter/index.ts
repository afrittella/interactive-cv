import * as firebase from 'firebase/app';
import 'firebase/database';
import { firebaseConfig as config } from 'data/firebase-adapter/definitions';
import { ICVEntity } from 'data/entities/definitions';

const app: firebase.app.App = firebase.initializeApp(config);

export const database: firebase.database.Database = app.database();

type TFirebaseResponse = ICVEntity | undefined;

export const request = async (path: string): Promise<TFirebaseResponse> => {
    try {
        const databaseRef: firebase.database.Reference = await database.ref(
            path,
        );
        const snapshot: firebase.database.DataSnapshot = await databaseRef.once(
            'value',
        );

        if (snapshot) {
            try {
                return snapshot.val();
            } catch (e) {
                console.log('error');
            }
        }
    } catch (e) {
        throw e;
    }
};
