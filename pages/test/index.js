import React from 'react'
import MessageTop from '../../components/MessageTop'
import { sync } from '../../db/relations'

const Test = ({ data }) => {

  return (
    <div className="container">
      {!data.status && !!data.message && <MessageTop message={data.message} /> && !!data.data && data.data.map((el, key) => <p key={key}>{el.title}</p>)}
      Test
    </div>
  )
}

export default Test

export async function getServerSideProps() {
  const data = await sync();
  return { props: { data: data } }
}

