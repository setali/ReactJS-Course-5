import Sidebar from 'cmp/Sidebar'
import Header from 'cmp/Header'
import Footer from 'cmp/Footer'

function Main ({ children }) {
  return (
    <div>
      <Header />
      <section style={{ display: 'flex' }}>
        <Sidebar />
        <article>{children}</article>
      </section>
      <Footer />
    </div>
  )
}

export default Main
