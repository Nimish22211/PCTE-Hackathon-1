import { useContext } from 'react'
import AuthContext from '../Context/authContext'

function useAuth() {
    return useContext(AuthContext)
}


export default useAuth