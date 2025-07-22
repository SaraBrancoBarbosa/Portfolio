import { HashRouter, Routes, Route } from "react-router"
import Layout from "./layouts/Layout"
import Homepage from "./pages/homepage/Homepage"
import Error from "./pages/error/Error"
import Projects from "./pages/projects/Projects"
import Websites from "./pages/projects/Websites"
import Videos from "./pages/projects/Videos"

function AppRouter() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="projects">
                  <Route index element={<Projects />} />
                  <Route path="websites" element={<Websites />} />
                  <Route path="videos" element={<Videos />} />
                  <Route path="*" element={<Error />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    </HashRouter>
  )
}

export default AppRouter