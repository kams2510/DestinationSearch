// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchResults = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput)
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )
    console.log(searchResults)

    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <input
          onChange={this.searchResults}
          type="search"
          value={searchInput}
          placeholder="Search"
        />
        <ul className="destination-detail-container">
          {searchResults.map(eachItem => (
            <DestinationItem key={eachItem.id} destinationsDetail={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
