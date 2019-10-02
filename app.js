

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ``,
    }
  }
  // state = {
  //   text: ``,

  // }
  handleClick() {
    let number = Math.floor(Math.random() * 10);
    // this.setState(   //przekazanie do metody i obiektu
    //   {
    //     text: this.state.text + letter,
    //   }
    // )
    this.setState(() => {
      return {
        text: this.state.text + number, //do stanu poprzedniego dodaj
      }
    })
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>{this.props.btnTitle}</button>
        <PanelResult text={this.state.text} />
      </>
    )
  }
}



const PanelResult = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

ReactDOM.render(<App btnTitle="dodej cyferkę" />, document.getElementById('root'))
