import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "src/app/app-router.tsx"
import { css } from "emotion"

const appStyles = css({
  margin: 0,
  padding: 0,
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
})

export function App() {
  return (
    <BrowserRouter>
      <div className={appStyles}>
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}
