import { Routes } from "react-router-dom"
import { AppLayout } from "./components/layouts/app-layout"

function App() {
  
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="products" />} />
          <Route index element={<Navigate to="products" />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
