import React from 'react'
import MessageTop from '../../components/MessageTop'
import { useEffect } from 'react'
import PostTemplete from '../../components/Reports/PostsTemplete'

const Test = () => {

  useEffect(() => { 
    PostTemplete();
  }, [])

  return (
    <div className="container">
      {/* {(!!data && data.status === false) && <MessageTop message={data.message} />} */}
      Test
    </div>
  )
}

export default Test

export async function getServerSideProps() {
  /* const data = await sync(); */
  return { props: { data: null } }
}

