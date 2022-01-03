import firebaseInitializeApp from "../Firsebase/firebaseInitialzeApp";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


firebaseInitializeApp();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const auth = getAuth();

    const registerUser = (email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const user = userCredential.user;

            })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => {
                setLoading(false)
            });
    }

    const loginNewUser = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            
        });
    }, [])

    const logOutUser = () => {
        setLoading(true)
        const auth = getAuth();
        signOut(auth).then(() => {

        }).catch((error) => {

        })
        .finally(() => {
            setLoading(false)
        });
    }


    return {
        user,
        error,
        registerUser,
        logOutUser,
        loading,
        loginNewUser

    }
}

export default useFirebase;