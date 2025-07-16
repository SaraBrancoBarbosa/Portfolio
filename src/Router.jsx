import { HashRouter, Routes, Route } from "react-router"
import Layout from "./layouts/Layout"
import Homepage from "./pages/homepage/Homepage"
import Error from "./pages/error/Error"

function AppRouter() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    </HashRouter>
  )
}

export default AppRouter