import { css } from "emotion"
import { useContext } from "react"
import { ContextActionsContext } from "src/_engine/lib/context-actions/context/context-actions-context.tsx"

const getContextActionsStyle = (mouseX: number, mouseY: number) =>
  css({
    position: "absolute",
    top: mouseY,
    left: mouseX,

    width: "200px",
    height: "200px",

    padding: "10px 12px",

    backgroundColor: "white",
    border: "solid 1px #0003",
    borderRadius: "4px",
  })

const contextActionsContainerStyles = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
})

export const ContextActionsUI = (props: {
  text: string
  mouseX: number
  mouseY: number
}) => {
  const { setContextActionsConf } = useContext(ContextActionsContext)
  return (
    <div
      className={contextActionsContainerStyles}
      onClick={() => setContextActionsConf(null)}
    >
      <div
        id="context"
        className={getContextActionsStyle(props.mouseX, props.mouseY)}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {props.text}
      </div>
    </div>
  )
}
