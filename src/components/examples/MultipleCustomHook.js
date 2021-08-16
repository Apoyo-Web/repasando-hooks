import React  from 'react'
import { useCounter } from '../../hook/useCounter'
import { useFetch } from '../../hook/useFetch'
import './multiple.css'

export const MultipleCustomHook = () => {

    const { number, sumNumber, restNumber } = useCounter(
        
    )

    console.log(number)
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${number}`)
    const {author, quote} = !!data && data[0]
    console.log(author, quote)
    return (
        <div>
            <h1>Breaking Bad</h1>
            <hr />
            {
                loading
                    ? (
                        <div className="alert alert-info text-center">
                Loading...
            </div>
                    ) :
                    (<blockquote className="blockquote text-end">
                    <p > {quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>)
            }
            

            <button className="btn btn-primary ms-1" onClick={restNumber}>Previus Quote</button>
            <button className="btn btn-primary ms-3" onClick={sumNumber}>Next Quote</button>
        </div>

        
    )
}
