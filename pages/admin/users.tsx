import { getFunctions, httpsCallable } from 'firebase/functions'
import { app } from '../../firebase/config'
import { useEffect, useState } from 'react'
import {
  User,
  getAuth,
  signInWithCredential,
  signInWithEmailAndPassword,
} from 'firebase/auth'

export default function Users() {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await httpsCallable<void,{users:User[]}>(getFunctions(app), 'helloWorld')()
        setUsers(response.data.users)
      } catch (error) {
      }
    }
    getdata()
  }, [])
  const sign = () => {
    signInWithEmailAndPassword(getAuth(app), 'admin@gmail.com', '123456').then(
      () => {
        // setLoggedIn(true)
      },
    )
  }

  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({displayName,email,uid}) => (
            <tr key={uid}>
              <td>{displayName}</td>
              <td>{email}</td>
              <td>Borrower</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
