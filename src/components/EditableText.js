import {Component} from 'react'

import './index.css'

class EditableText extends Component {
  state = {
    isSaved: false,
    userText: '',
  }

  onChangeInput = event => {
    this.setState({userText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  render() {
    const {isSaved, userText} = this.state
    const buttonText = isSaved ? 'Edit' : 'Save'
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="header">Editable Text Input</h1>
          <div className="input-container">
            {isSaved ? (
              <p>{userText}</p>
            ) : (
              <input
                type="text"
                value={userText}
                onChange={this.onChangeInput}
                className="input"
              />
            )}
            <button
              className="btn"
              type="button"
              aria-label="button"
              onClick={this.onClickButton}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default EditableText
