import { useEffect } from 'react'
import { API } from 'aws-amplify'
import React from 'react'



function App() {
  useEffect(() => {
    const getData = async () => {
      const data = await API.get('cloudrentallistapi', '/listing')
      console.log(data)
    }
    getData()
  })


  return <div></div>
}

export default App