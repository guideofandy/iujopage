import React from 'react'
import { getPosts } from '../../db/Controllers/PostController'

const Test = ({ data }) => {
  console.log(data)
  return (

    <div className="container">
      {!!data && data.map((el, key) => <p key={key}>{el.title}</p>)}
      Test
    </div>
  )
}

export default Test

export async function getServerSideProps() {
  const data = await getPosts();
  return { props: { data } }
}

