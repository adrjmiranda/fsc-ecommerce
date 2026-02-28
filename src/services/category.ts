import type { Category } from '@/@types/categoy';
import { db } from '@/lib/firebase';
import {
  QueryDocumentSnapshot,
  collection,
  getDocs,
  limit,
  query,
  where,
} from 'firebase/firestore';

const categoryConverter = {
  toFirestore: (category: Category) => category,
  fromFirestore: (snapshot: QueryDocumentSnapshot) => {
    const data = snapshot.data();

    return {
      id: snapshot.id,
      name: data.name,
      displayName: data.displayName,
      imageUrl: data.imageUrl,
      products: data.products || [],
    } as Category;
  },
};

const CategoryService = {
  async fetchAll(): Promise<Category[]> {
    const querySnapshot = await getDocs(
      collection(db, 'categories').withConverter(categoryConverter),
    );

    return querySnapshot.docs.map((doc) => doc.data());
  },

  async fetchByName(name: string): Promise<Category | null> {
    const categoriesRef = collection(db, 'categories').withConverter(
      categoryConverter,
    );
    const q = query(categoriesRef, where('name', '==', name), limit(1));

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }

    return querySnapshot.docs[0].data();
  },
};

export { CategoryService };
