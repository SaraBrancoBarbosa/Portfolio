import { Outlet } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const Layout = () => {
    return (
      <>
        <div>
          <Header />

          <main>
            <Outlet />
          </main>

        </div>
        <Footer />
      </>
    )
  }
  
  export default Layout