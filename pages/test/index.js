const Test = () => {

  return (
    <div className="container">
      Test
    </div>
  )
}

export default Test

export async function getServerSideProps() {
  /* const data = await sync(); */
  return { props: { data: null } }
}

