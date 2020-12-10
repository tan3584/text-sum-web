import CommonStore from './common.store';
import FirebaseStore from './firebase.store';

export default function initStore() {
  return {
    commonStore: new CommonStore(),
    firebaseStore: new FirebaseStore(),
  };
}
