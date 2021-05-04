import {useState} from 'react'

const useInitialState = () => {
    const [home, setHome] = useState(true)

    const skipHome = () => {
        setHome(!home)
    }

    return{
        home,
        skipHome
    }
}

export default useInitialState