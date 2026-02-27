import { auth, db } from '@/lib/firebase';
import {
  type UserCredential,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import type { SignUpData } from '@/types/sign-up-data';

const AuthService = {
  async signUp({ email, password, name }: SignUpData): Promise<void> {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredential.user;

    await updateProfile(user, { displayName: name });

    await setDoc(doc(db, 'users', user.uid), {
      name,
      email,
      createdAt: new Date().toISOString(),
    });
  },
};

export { AuthService };
