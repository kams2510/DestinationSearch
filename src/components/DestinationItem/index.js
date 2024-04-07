// Write your code here
const DestinationItem = props => {
  const {destinationsDetail} = props
  const {imgUrl, name} = destinationsDetail

  return (
    <li>
      <img alt={name} src={imgUrl} key={imgUrl} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
