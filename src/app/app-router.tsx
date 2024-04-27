import { Route, Routes } from "react-router"
import { Map } from "src/pages/map/map.tsx"
import { ThreeJsEngine } from "src/_engine/model/three-js-engine.tsx"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Map engine={new ThreeJsEngine()} />} />
    </Routes>
  )
}
