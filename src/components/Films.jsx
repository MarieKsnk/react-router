import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Films = () => {

  const [films, setFilms] = useState(null);

  const fetchFilms = async () => {
    try {
      const reponse = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      setUsers(response.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUsers()
}, [])


return (
  <>
  {users && users.map((user, index) => { 
    return (
      <div key={user.id}>
        <link to={`/user/${user.id}`}><h1>{user.name}</h1></link>

      </div>
    )
  })}
  </>
)
};

export default Films;
