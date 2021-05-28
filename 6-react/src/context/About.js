import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function About () {
  const theme = useContext(ThemeContext)

  return (
    <div
      style={{
        border: '1px solid',
        margin: '1em',
        padding: '1em',
        flex: 3,
        ...theme
      }}
    >
      <h2>My About page</h2>

      <p>
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
        explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione
        voluptatem sequi nesciunt
      </p>
    </div>
  )
}
