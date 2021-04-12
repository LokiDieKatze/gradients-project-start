const handleRandomButtonClick = () => {

}
const handleRightButtonClick = () => {

}
const handleLeftButtonClick = () => {

}

const Header = () => {
  return <header className="bg-dark text-center text-white py-5 mb-5">
    <h1 className="text-center my-4 display-1">Alyra Gradients</h1>
    <p>Ultime collection de plus beaux dégradés</p>
    <button onClick={handleRandomButtonClick}></button>
    <button onClick={handleRightButtonClick}></button>
    <button onClick={handleLeftButtonClick}></button>

  </header>
}