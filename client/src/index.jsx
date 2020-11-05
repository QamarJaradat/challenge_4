import React from 'react'
import ReactDOM from "react-dom";
// import ReactDev from 'react-dev'
class App extends React.Component {

    constructor(props) {
        super(props)

        this.choosesquer = this.choosesquer.bind(this)
    }
    choosesquer() {
        console.log('clicked')
    }
    render() {
        return (<div onClick={this.choosesquer}>react</div>)
    }
}

class Bord extends React.Component {

}

class Square extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div></div>
        )
    }


}

ReactDOM.render(<App />, document.getElementById('app'))

