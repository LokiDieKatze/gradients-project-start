import Gradient from "./Gradient"
import { gradients } from "../gradients"

const GradientsList = (props) => {

  const { valueSelect, setValueSelect } = props

  let filterlist = ""
  valueSelect === "All" ? filterlist = gradients : filterlist = gradients.filter(el => el.tags.includes(valueSelect))
  return (
    <ul className="row list-unstyled">
      {filterlist.map(el => <Gradient key={el.name} colorStart={el.start} colorEnd={el.end} name={el.name} tags={el.tags} valueSelect={valueSelect} setValueSelect={setValueSelect} />)
      }
    </ul>
  )
}

export default GradientsList