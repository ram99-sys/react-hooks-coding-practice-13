import './index.css'

const BrowserHistoryItem = props => {
  const {historyDetails, deleteHistoryTab} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onClickDeleteButton = () => {
    deleteHistoryTab(id)
  }

  return (
    <li className="list-item">
      <div className="list-element">
        <p className="access-time">{timeAccessed}</p>
        <div className="image-and-url">
          <img src={logoUrl} alt="domain logo" className="image-sizing" />
          <div className="title-section">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div>
        <button
          className="button"
          type="button"
          testid="delete"
          onClick={onClickDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistoryItem
