import { useEffect, useState } from 'react';

const useSearch = () => {
    const [query, setQuery] = useState('')
    // const [data, setData] = useState()

   
    // useEffect(() => {

    //     fetch(`https://pokeapi.co/api/v2/pokemon/?offset=1&limit=10220`)
    //         .then(res => res.json())
    //         .then(res => setData(res.results))

    // }, [])

    // const updateQuery = (query) => {
    //     setQuery(query)
    //     const searchRes = data.filter(query => query)
    //         .filter(newQuery => newQuery.name.toLowerCase()
    //         .includes(query.toLowerCase()))

    //     setData(searchRes)

    //     return searchRes
    // }

    return [
        query,
        updateQuery,
        data,
    ];
}

export default useSearch;

