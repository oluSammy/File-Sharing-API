import firebaseAdmin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import credentials from "../firebase-admin-key";

const credential = firebaseAdmin.credential.cert(
  credentials as firebaseAdmin.ServiceAccount
);
const admin = firebaseAdmin.initializeApp({
  credential,
  databaseURL: "https://file-sharing-e07cf-default-rtdb.firebaseio.com/",
});

const db = getFirestore();

class FirebaseService {
  async verifyToken(token: string) {
    try {
      const data = await admin.auth().verifyIdToken(token);
      return data;
    } catch (error: any) {
      throw new Error("unable to verify token");
    }
  }

  async getUserById(uid: string) {
    try {
      const user = await admin.auth().getUser(uid);

      return user;
    } catch (error: any) {
      throw new Error("unable to get user");
    }
  }

  async saveImage(imageId: string, uid: string, tags: string[]) {
    try {
      await admin
        .firestore()
        .collection("images")
        .doc()
        .set({
          userId: uid,
          image: imageId,
          tags,
          time: firebaseAdmin.firestore.Timestamp.fromDate(new Date()).toDate(),
          shared: false,
        });
    } catch (error: any) {
      throw new Error("unable to save image");
    }
  }

  async shareFiles(docId: string, uid: string) {
    try {
      const docRef = db.collection("images").doc(docId);
      docRef.set(
        {
          shared: true,
          receiver:
            uid === "XXj05gAOCOXrFPaT3kSBdxn3o8L2"
              ? "1OoD3W2FCQaF6kVuXEdRobM8NNu1"
              : "XXj05gAOCOXrFPaT3kSBdxn3o8L2",
        },
        { merge: true }
      );

      return docRef;
    } catch (e: any) {
      throw new Error("unable to share files");
    }
  }
}

export default FirebaseService;
