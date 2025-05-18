import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore"; //
import { db } from "../firebase/firebase";

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};

export const getProductsByCategory = async (categoryLabel) => {
  const q = query(collection(db, "products"), where("category", "==", categoryLabel));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  // console.log(categoryLabel, "Getting Products");
};

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    throw new Error("Could not find a product with this id:" + id);
  }
  return { id: snapshot.id, ...snapshot.data() };
};

export const getFeaturedProducts = async () => {
  const q = query(collection(db, "products"), where("isFeatured", "==", true));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
