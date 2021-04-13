const GradientTags = ({ tags, valueSelect, setValueSelect }) => {

  const handleClick = (e) => {
    e.preventDefault();
    setValueSelect(e.target.value)
  }

  return (
    <div className="mt-3">
      {tags.map(elem => valueSelect === elem ? <button key={elem} type="button" className="btn btn-sm me-2 mb-2 bg-light text-secondary" value={elem} onClick={handleClick} disabled>{elem}
      </button> : <button key={elem} type="button" className="btn btn-sm me-2 mb-2 bg-dark text-white" value={elem} onClick={handleClick}>{elem}
      </button>
      )
      }
    </div>
  )
}

export default GradientTags