import { Route, Routes } from "react-router"
import { lazy, Suspense } from "react"
const Map = lazy(() => import("../pages/map/map.tsx"))

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Map engine="ThreeJS" />
          </Suspense>
        }
      />
      <Route
        path="/orto"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Map engine="ThreeJSOrto" />
          </Suspense>
        }
      />
    </Routes>
  )
}
