class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disp: "0" };

    this.clearDisplay = this.clearDisplay.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.evaluate = this.evaluate.bind(this);
  }
  clearDisplay() {
    this.setState({
      disp: "0" });

  }
  updateDisplay(event) {
    const { disp } = this.state;
    const value = event.target.value;
    if (value === ".") {
      if (disp.includes(".") && /\+|-|\/|\*/g.test(disp) === false) {
        this.setState({
          disp: disp });

      } else {
        this.setState({
          disp: disp + value });

      }
    } else if (/\+|\/|\*/g.test(value)) {
      if (
      disp[disp.length - 1] === "+" ||
      disp[disp.length - 1] === "-" ||
      disp[disp.length - 1] === "*" ||
      disp[disp.length - 1] === "/")
      {
        this.setState({
          disp: disp.substr(0, disp.length - 1) + value });

      } else
      {
        this.setState({
          disp: disp + value });

      }
    } else
    if (value === "-") {
      if (
      disp[disp.length - 1] === "+" ||
      disp[disp.length - 1] === "*" ||
      disp[disp.length - 1] === "/")
      {
        this.setState({
          disp: disp + value });

      } else if (disp[disp.length - 1] === "-") {
        this.setState({
          disp: disp.substr(0, disp.length - 1) + "+" });

      } else
      {
        this.setState({
          disp: disp + value });

      }

    } else {
      if (disp == "0") {
        this.setState({
          disp: value });

      } else {
        this.setState({
          disp: disp + value });

      }
    }

  }

  evaluate() {
    const result = eval(this.state.disp);
    this.setState({
      disp: result });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("div", { id: "display" },
      this.state.disp, /*#__PURE__*/
      React.createElement("div", { className: "formulaDisplay" }, this.state.formula), /*#__PURE__*/
      React.createElement("div", { class: "currentDisplay" }, this.state.current)), /*#__PURE__*/

      React.createElement("button", { id: "clear", onClick: this.clearDisplay }, "A C"), /*#__PURE__*/


      React.createElement("button", { id: "seven", value: "7", onClick: this.updateDisplay }, "7"), /*#__PURE__*/


      React.createElement("button", { id: "eight", value: "8", onClick: this.updateDisplay }, "8"), /*#__PURE__*/


      React.createElement("button", { id: "nine", value: "9", onClick: this.updateDisplay }, "9"), /*#__PURE__*/


      React.createElement("button", { id: "add", value: "+", onClick: this.updateDisplay }, "+"), /*#__PURE__*/


      React.createElement("button", { id: "four", value: "4", onClick: this.updateDisplay }, "4"), /*#__PURE__*/


      React.createElement("button", { id: "five", value: "5", onClick: this.updateDisplay }, "5"), /*#__PURE__*/


      React.createElement("button", { id: "six", value: "6", onClick: this.updateDisplay }, "6"), /*#__PURE__*/


      React.createElement("button", { id: "subtract", value: "-", onClick: this.updateDisplay }, "-"), /*#__PURE__*/


      React.createElement("button", { id: "one", value: "1", onClick: this.updateDisplay }, "1"), /*#__PURE__*/


      React.createElement("button", { id: "two", value: "2", onClick: this.updateDisplay }, "2"), /*#__PURE__*/


      React.createElement("button", { id: "three", value: "3", onClick: this.updateDisplay }, "3"), /*#__PURE__*/


      React.createElement("button", { id: "multiply", value: "*", onClick: this.updateDisplay }, "*"), /*#__PURE__*/


      React.createElement("button", { id: "zero", onClick: this.updateDisplay, value: "0" }, "0"), /*#__PURE__*/


      React.createElement("button", { id: "decimal", onClick: this.updateDisplay, value: "." }, "."), /*#__PURE__*/


      React.createElement("button", { id: "equals", onClick: this.evaluate }, "="), /*#__PURE__*/


      React.createElement("button", { id: "divide", value: "/", onClick: this.updateDisplay }, "/")));




  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));