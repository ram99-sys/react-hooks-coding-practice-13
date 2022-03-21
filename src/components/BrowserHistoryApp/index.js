import {useState} from 'react'
import BrowserHistoryItem from '../BrowserHistoryItem'
import './index.css'

const BrowserHistoryApp = props => {
  const [searchInput, setSearchInput] = useState('')

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const {historyList} = props
  const [newList, updateNewList] = useState(historyList)

  const deleteHistoryTab = id => {
    const filteredResults = newList.filter(eachItem => eachItem.id !== id)
    updateNewList(filteredResults)
  }

  const findingListCount = searchResults => {
    if (searchResults.length === 0) {
      return <p>There is no history to show</p>
    }
    return (
      <ul className="browser-history-items-container">
        {searchResults.map(eachHistoryItem => (
          <BrowserHistoryItem
            key={eachHistoryItem.id}
            historyDetails={eachHistoryItem}
            deleteHistoryTab={deleteHistoryTab}
          />
        ))}
      </ul>
    )
  }

  const searchResults = newList.filter(eachItem =>
    eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
  )

  const historyClassName = newList.length === 0 ? 'no-history-heading' : null

  return (
    <div className="browser-history-container">
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
        />
        <div className="search-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
            className="search-icon"
          />
          <input
            type="search"
            className="input-element"
            placeholder="Search history"
            onChange={onChangeSearchInput}
            value={searchInput}
          />
        </div>
      </div>
      <div className={`body-container ${historyClassName}`}>
        {findingListCount(searchResults)}
      </div>
    </div>
  )
}

export default BrowserHistoryApp
