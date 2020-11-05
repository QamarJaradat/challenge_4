import React from 'react'
import ReactDOM from "react-dom";
// import ReactDev from 'react-dev'
class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            turnon: true,
            players: ['red', 'green']

        }
        this.changeplayer = this.changeplayer.bind(this)

    }

    changeplayer() {
        this.setState({
            turnon: !this.state.turnon
        })
    }

    render() {
        return (<Bord turnon={this.state.turnon} players={this.state.players} changeplayer={this.changeplayer}></Bord>)
    }
}

class Bord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            turnon: true,
            playes: ['red', 'green'],
            bord: [] //matrix

        }

        this.clicked = this.columnclicked.bind(this)
    }
    columnclicked(y) {
        this.props.changeplayer()
        //turn on = true (its red player turn) turn on = false (its green player turn)
        var whosturn = (this.props.turnon) ? 0 : 1
        this.state.bord[y].push(this.props.players[whosturn])

        this.setState({

        })

    }

    //bord 6 X 7
    render() {
        return (
            <div className='mainbord'>
                <div id='Col1' onClick={this.columnclicked}>
                    <Square x={} y={1}></Square>
                    <Square x={} y={2}></Square>
                    <Square x={} y={3}></Square>
                    <Square x={} y={4}></Square>
                    <Square x={} y={5}></Square>
                    <Square x={} y={6}></Square>
                </div>
                <div id='Col2' onClick={this.columnclicked}>
                    <Square x={} y={1}></Square>
                    <Square x={} y={2}></Square>
                    <Square x={} y={3}></Square>
                    <Square x={} y={4}></Square>
                    <Square x={} y={5}></Square>
                    <Square x={} y={6}></Square>
                </div>
                <div id='Col3' onClick={this.columnclicked}>
                    <Square x={} y={1}></Square>
                    <Square x={} y={2}></Square>
                    <Square x={} y={3}></Square>
                    <Square x={} y={4}></Square>
                    <Square x={} y={5}></Square>
                    <Square x={} y={6}></Square>
                </div>
                <div id='Col4' onClick={this.columnclicked}>
                    <Square x={} y={1}></Square>
                    <Square x={} y={2}></Square>
                    <Square x={} y={3}></Square>
                    <Square x={} y={4}></Square>
                    <Square x={} y={5}></Square>
                    <Square x={} y={6}></Square>
                </div>
                <div id='Col5' onClick={this.columnclicked}>
                    <Square x={} y={1}></Square>
                    <Square x={} y={2}></Square>
                    <Square x={} y={3}></Square>
                    <Square x={} y={4}></Square>
                    <Square x={} y={5}></Square>
                    <Square x={} y={6}></Square>
                </div>
                <div id='Col6' onClick={this.columnclicked}>
                    <Square x={} y={1}></Square>
                    <Square x={} y={2}></Square>
                    <Square x={} y={3}></Square>
                    <Square x={} y={4}></Square>
                    <Square x={} y={5}></Square>
                    <Square x={} y={6}></Square>
                </div>
                <div id='Col7' onClick={this.columnclicked}>
                    <Square x={} y={1}></Square>
                    <Square x={} y={2}></Square>
                    <Square x={} y={3}></Square>
                    <Square x={} y={4}></Square>
                    <Square x={} y={5}></Square>
                    <Square x={} y={6}></Square>
                </div>


            </div>
        )
    }

}

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <div ></div>
        )
    }


}

ReactDOM.render(<App />, document.getElementById('app'))

