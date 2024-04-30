import { createContext, FC, PropsWithChildren, useState } from "react"

type ActiveElementContextType = {
  activeElement: string | null
  setActiveElement: (str: string) => void
}

export const ActiveElementContext = createContext<ActiveElementContextType>({
  activeElement: null,
  setActiveElement: () => undefined,
})

export const ActiveElementProvider: FC<PropsWithChildren> = (props) => {
  const [activeElement, setActiveElement] = useState<string | null>(null)
  return (
    <ActiveElementContext.Provider value={{ activeElement, setActiveElement }}>
      {props.children}
    </ActiveElementContext.Provider>
  )
}
