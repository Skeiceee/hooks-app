import { useState } from "react"

    const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter(counter + value)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    const decrease = (value = 1) => {
        if (counter === 0) return;
        
        setCounter(counter - value)
    }

    return {
        counter,
        increment,
        reset,
        decrease,
    }
    
}

export default useCounter