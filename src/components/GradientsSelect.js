import { uniqueTags } from "../gradients"

const GradientsSelect = (props) => {

  const { value, colorValue } = props

  return (
    <>
      <h2 className="text-center my-4">Alyra Gradients</h2>
      <div className="input-group mb-3">
        <label className="input-group-text mb-4" htmlFor="select">Filter par tag</label>
        <select className="form-select mb-4" onChange={colorValue}>
          <option value="All">Tous</option>
          {uniqueTags.map(color => color === value ? <option key={color} value={color} selected>{color}</option> : <option key={color} value={color}>{color}</option>)}
        </select>
      </div>
    </>
  )
}

export default GradientsSelect