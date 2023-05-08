import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection } from 'firebase/firestore';
import { app } from '@/firebase/config'

export default function LoansList() {
const [loans, loading] = useCollection(collection(getFirestore(app), 'loans'),);

  if (!loading && loans) {
    loans.docs.map((doc) => console.log(doc.data()));
  }
  return (
    <p>open console</p>
  )
}
