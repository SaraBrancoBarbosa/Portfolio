import { Outlet } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const Layout = () => {
    return (
      <div className="flex flex-col h-screen justify-between items-center">
        <div className="max-w-500 w-full">
          <Header />

          <main className="mx-auto px-20 md:flex mb-auto bg-violet-50/50">
            <Outlet />
          </main>

        </div>
        <Footer />
      </div>
    )
  }
  
  export default Layout