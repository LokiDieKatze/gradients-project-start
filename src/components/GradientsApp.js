import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"
import React from "react"
import { useState } from "react"


const GradientsApp = () => {

  const [valueSelect, setValueSelect] = useState("All");

  const colorValue = (e) => {
    e.preventDefault()
    setValueSelect(e.target.value)
  }

  return (
    <>
      <GradientsSelect value={valueSelect} colorValue={colorValue} />
      <GradientsList valueSelect={valueSelect} setValueSelect={setValueSelect} />
    </>
  )
}

export default GradientsApp