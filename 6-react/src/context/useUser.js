import { useContext } from 'react'
import UserContext from './UserContext'

function useUser () {
  const data = useContext(UserContext)

  return data
}

export default useUser
