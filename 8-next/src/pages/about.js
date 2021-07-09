// import 'bootstrap/dist/css/bootstrap.css'
import Main from '../layouts/Main'

function About () {
  const color = 'green'
  return (
    <Main>
      <div>
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>

        <style global jsx>{`
          h2 {
            color: ${color};
          }
          p {
            color: aqua;
            padding: 10px 40px;
          }
        `}</style>
      </div>
    </Main>
  )
}

export default About
