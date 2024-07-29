import { useContext, useEffect } from "react"
import { TextFieldContext } from "../contexts/TextfieldContext"

const TextGenerator = () => {
  const textField = useContext(TextFieldContext)
  const text = textField?.text
  let resultText: string | undefined = undefined

  useEffect(() => {
    console.log("oi galera")
  }, [text])

  console.log("this is result text" + resultText)

  return (
    <>
      <textarea placeholder="Result text...">{text}</textarea>
    </>
  )
}

export default TextGenerator
