import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "src/app/app-router.tsx"

export function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
