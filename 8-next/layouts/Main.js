import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
