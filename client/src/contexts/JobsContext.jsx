import { createContext, useCallback, useState } from "react";

const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

export const JobsContext = createContext()

function JobsProvider({ children }){
	const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, seterror] = useState(null)

    const fetchUser = useCallback(() => {
        async function fetchData() {
            try {
                const response = await fetch(BASE_URL)
                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }
                const data = await response.json()
                setUser(data)
                setLoading(false)
            }
            catch (error) {
                seterror(error.message)
                setLoading(false)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    },[])

    return (
        <JobsContext.Provider value={{ user, loading, error, fetchUser }}>
            {children}
        </JobsContext.Provider>
    )
}

export default JobsProvider