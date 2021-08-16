import {useState} from 'react'

export const useCounter = () => {
    
    const [number, setNumber] = useState(1)

    const sumNumber = () => {
        setNumber(number + 1)
    }

    const restNumber = () => {
        setNumber(number - 1)
    }

    return {number,sumNumber,restNumber}
}
