import { Route, Routes } from "react-router"
import { Map } from "src/pages/map/map.tsx"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Map engine="ThreeJS" />} />
    </Routes>
  )
}
