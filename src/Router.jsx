import { HashRouter, Routes, Route } from "react-router"

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