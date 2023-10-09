import './index.css'

const SelectLag = props => {
  const {lagDetails} = props
  return (
    <ul>
      <img
        src={lagDetails.imageUrl}
        alt={lagDetails.imageAltText}
        className="imgsize"
      />
    </ul>
  )
}

export default SelectLag
