import React  from 'react'
import { useFetch } from '../../hook/useFetch'
import './multiple.css'

export const MultipleCustomHook = () => {
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    const {author, quote} = !!data && data[0]
    console.log(author, quote)
    return (
        <div>
            <h1>Breakin Bad</h1>
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
            

            

        </div>
    )
}
