import {Component} from 'react'

import SelectLag from '../SelectLag'
import './index.css'

class Greetings extends Component {
  state = {
    buttonTexts: 'English',
    englishbtn: true,
    telugubtn: false,
    tamilbtn: false,
  }

  englishClickbtn = () => {
    this.setState({
      buttonTexts: 'English',
      englishbtn: true,
      telugubtn: false,
      tamilbtn: false,
    })
  }

  tamilClickbtn = () => {
    this.setState({
      buttonTexts: 'Tamil',
      englishbtn: false,
      telugubtn: false,
      tamilbtn: true,
    })
  }

  teluguClickbtn = () => {
    this.setState({
      buttonTexts: 'Telugu',
      englishbtn: false,
      telugubtn: true,
      tamilbtn: false,
    })
  }

  render() {
    const {languageGreetingsList} = this.props
    const {buttonTexts, englishbtn, telugubtn, tamilbtn} = this.state

    return (
      <div className="container">
        <div className="appContainer">
          <h1>Multilingual Greetings</h1>
          <div className="listitems">
            <li>
              <button
                type="button"
                onClick={this.englishClickbtn}
                className={englishbtn ? 'special' : 'buttontext'}
              >
                English
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={this.tamilClickbtn}
                className={tamilbtn ? 'special' : 'buttontext'}
              >
                Tamil
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={this.teluguClickbtn}
                className={telugubtn ? 'special' : 'buttontext'}
              >
                Telugu
              </button>
            </li>
          </div>
          <li>
            {languageGreetingsList
              .filter(each => each.buttonText === buttonTexts)
              .map(filteredlag => (
                <SelectLag key={filteredlag.id} lagDetails={filteredlag} />
              ))}
          </li>
        </div>
      </div>
    )
  }
}

export default Greetings
