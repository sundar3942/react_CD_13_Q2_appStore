// Write your code here
import './index.css'

const TabItem = props => {
  const {isActive, eachTabItem, handleOnTabClick} = props
  const {displayText, tabId} = eachTabItem

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const onClickTab = () => {
    handleOnTabClick(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
