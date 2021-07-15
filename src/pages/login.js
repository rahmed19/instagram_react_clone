import { useHistory } from 'react-router-dom'
import FirebaseContext from '../context/firebase'
import { useContext, useState, useEffect } from 'react'

export default function Login() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const isInvalid = password === '' || emailAddress === ''

    const handleLogin = () => { }

    useEffect(() => {
        document.title = 'Login - Instagram'
    }, [])

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" className="max-w-md"></img>
            </div>
            <h1 className="flex justify-center w-full">
                <img src="/images/logo.png" alt="instagram" className="mt2 w-6/12"></img>
            </h1>
            {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

            <form onSubmit={handleLogin} method="POST">
                <input
                    aria-label="Enter your email address"
                    type="text"
                    placeholder="Email Address"
                    className="text-sm text-gray-base"
                />
            </form>
        </div>
    )
}
