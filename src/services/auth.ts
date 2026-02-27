import type { SignInData } from '@/@types/sign-in-data';
import type { SignUpData } from '@/@types/sign-up-data';
import { auth, db } from '@/lib/firebase';
import {
  GoogleAuthProvider,
  type User,
  type UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const AuthService = {
  async signUp({ email, password, name }: SignUpData): Promise<void> {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredential.user;

    await updateProfile(user, { displayName: name });

    await setDoc(
      doc(db, 'users', user.uid),
      {
        name,
        email,
        createdAt: new Date().toISOString(),
      },
      {
        merge: true,
      },
    );
  },

  async signIn({ email, password }: SignInData): Promise<User> {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  },

  async signOut(): Promise<void> {
    await signOut(auth);
  },

  async signInWithGoogle(): Promise<User> {
    const googleProvider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    await setDoc(
      doc(db, 'users', user.uid),
      {
        name: user.displayName,
        email: user.email,
        createdAt: new Date().toISOString(),
      },
      {
        merge: true,
      },
    );

    return user;
  },
};

export { AuthService };
