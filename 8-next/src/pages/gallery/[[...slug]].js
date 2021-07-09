import Main from '../../layouts/Main'

function Gallery ({ params }) {
  return (
    <Main>
      <div>Optional Catch all routes => {params.slug?.join('/')}</div>
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

export default Gallery
