import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import styled from 'styled-components'
import './App.css'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #25262c;
`

const TextEditorContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 800px;
  background-color: #1b1c22;
  border-radius: 8px;
  padding: 20px;
  @media screen and (max-width:767px){
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
`

const Header = styled.h1`
  color: #f8fafc;
  text-align: center;
`

const Toolbar = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #334155;
  padding: 10px;
  border-radius: 5px;
`

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({active}) => (active ? '#faff00' : '#f1f5f9')};
  font-size: 20px;
  margin-right: 10px;
  outline: none;
`

const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #334155;
  border-radius: 5px;
  background-color: #1b1c22;
  color: #f8fafc;
  font-size: 16px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  outline: none;
  resize: none;
`

class App extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
    text: '',
  }

  toggleBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  toggleItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  toggleUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  onTextChange = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {isBold, isItalic, isUnderline, text} = this.state

    return (
      <AppContainer>
        <TextEditorContainer>
          <div className="image-con">
            <Header>Text Editor</Header>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              style={{width: '60%', marginBottom: '10px'}}
            />
          </div>
          <div>
            <Toolbar>
              <IconButton
                data-testid="bold"
                onClick={this.toggleBold}
                active={isBold}
              >
                <VscBold />
              </IconButton>
              <IconButton
                data-testid="italic"
                onClick={this.toggleItalic}
                active={isItalic}
              >
                <GoItalic />
              </IconButton>
              <IconButton
                data-testid="underline"
                onClick={this.toggleUnderline}
                active={isUnderline}
              >
                <AiOutlineUnderline />
              </IconButton>
            </Toolbar>
            <TextArea
              style={{
                fontWeight: isBold ? 'bold' : 'normal',
                fontStyle: isItalic ? 'italic' : 'normal',
                textDecoration: isUnderline ? 'underline' : 'none',
              }}
              value={text}
              onChange={this.onTextChange}
            />
          </div>
        </TextEditorContainer>
      </AppContainer>
    )
  }
}

export default App
