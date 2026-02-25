import { db } from '@/lib/firebase';
import { QueryDocumentSnapshot, collection, getDocs } from 'firebase/firestore';

import type { Category } from '@/types/categoy';

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
};

export { CategoryService };
