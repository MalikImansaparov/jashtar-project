import {useState, useRef, useEffect} from 'react'


export function getFetch(url, options) {
    const [isLoading, setLoading] = useState(true)
    const [res, setRes] = useState(null)
    const [error, setError] = useState(null)
    const cache = useRef({})

    useEffect(() => {
        if (!url) return

        async function fetchData() {
            if (cache.current[url]) {
                const data = cache.current[url]
                setRes(data)
            } else {
                try {
                    const response = await fetch(url, options)
                    const json = await response.json()
                    cache.current[url] = json
                    setRes(json)
                } catch (error) {
                    setError(error)
                }
            }

            setLoading(false)
        }

        fetchData()
    }, [url])
    return { isLoading, res, error }
}