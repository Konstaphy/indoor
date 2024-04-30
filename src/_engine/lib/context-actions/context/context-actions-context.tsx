import { createContext, FC, PropsWithChildren, useState } from "react"
import { Vector2 } from "three"
import { ContextActionsUI } from "src/_engine/lib/context-actions/context/ui/context-actions-ui.tsx"

type ContextActionsConfType = {
  cursorPos: Vector2
  text?: string
}

type ContextActionsContextType = {
  contextActionsConf: ContextActionsConfType | null
  setContextActionsConf: (conf: ContextActionsConfType | null) => void
}

export const ContextActionsContext = createContext<ContextActionsContextType>({
  contextActionsConf: null,
  setContextActionsConf: () => undefined,
})

export const ContextActionsContextProvider: FC<PropsWithChildren> = (props) => {
  const [contextActionsConf, setContextActionsConf] =
    useState<ContextActionsConfType | null>(null)

  return (
    <ContextActionsContext.Provider
      value={{ contextActionsConf, setContextActionsConf }}
    >
      {props.children}
      {contextActionsConf && (
        <ContextActionsUI
          mouseY={contextActionsConf.cursorPos.y}
          mouseX={contextActionsConf.cursorPos.x}
          text={contextActionsConf.text || "Элемент без названия"}
        />
      )}
    </ContextActionsContext.Provider>
  )
}
