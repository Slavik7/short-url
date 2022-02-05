import { db } from "./firebase-config";

import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  updateDoc,
  doc,
} from "@firebase/firestore";

const urlsCollectionRef = collection(db, "urls");

export const getAllData = async () => {
  const data = await getDocs(urlsCollectionRef);
  if (data)
    return data.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
};

export const getDataById = async (id) => {
  const docRef = doc(db, "urls", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return { ...docSnap.data(), id: docSnap.id };
  else return null;
};
export const addData = async (data) => {
  const docRef = await addDoc(urlsCollectionRef, { ...data });
  if (docRef) return { ...data, id: docRef.id };
  else return null;
};

export const updateEntries = async (id, entries) => {
  const urlDoc = doc(db, "urls", id);
  const newField = { entries: entries + 1 };
  await updateDoc(urlDoc, newField);
};
