import Main from '../../layouts/Main'

function Article ({ params }) {
  return (
    <Main>
      <div>Catch all routes => {params.slug.join('/')}</div>
    </Main>
  )
}

export async function getServerSideProps ({ params }) {
  console.log(params)
  return {
    props: {
      params
    }
  }
}

export default Article
