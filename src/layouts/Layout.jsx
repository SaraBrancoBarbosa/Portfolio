import { Outlet } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const Layout = () => {
    return (
      <div className="flex flex-col min-h-[calc(100vh-91px)] justify-between items-center">
        <div className="w-full">
          <Header />

          <main className="mx-auto px-5 xl:px-20 md:flex mb-auto min-h-[calc(100vh-185px)]">
            <Outlet />
          </main>

        </div>
        <Footer />
      </div>
    )
  }
  
  export default Layout