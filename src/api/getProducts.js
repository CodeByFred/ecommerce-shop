import { collection, getDocs } from "firebase/firestore"; //, query, where
import { db } from "../firebase/firebase";

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};

export const getProductsByCategory = async (categoryLabel) => {
  // const q = query(collection(db, "products"), where("category", "==", categoryLabel));
  // const snapshot = await getDocs(q);
  // return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(categoryLabel, "Getting Products");
};
