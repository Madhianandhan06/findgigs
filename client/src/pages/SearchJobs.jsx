import React, { useContext, useEffect } from 'react'
import { JobsContext } from '../contexts/JobsContext'

const SearchJobs = () => {
  const {user, loading, error, fetchUser } = useContext(JobsContext)
   useEffect(() => {
    fetchUser()
   }, [fetchUser])
  return (
    <div>
      {loading ? <p>Loading</p> 
        : error ? <p>error.message</p> 
        : (user.map(user => (
          <div key={user.id} >{user.name}</div>
        )))}
    </div>
  )
}

export default SearchJobs