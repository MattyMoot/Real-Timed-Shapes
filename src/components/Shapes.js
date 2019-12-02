import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../App';
import * as serviceWorker from '../serviceWorker';


class Shapes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: "",
            size: 100,
            perCent: "50%",
        }
    }


    changeColor() {
        let randomIndexColor = Math.floor(Math.random() * 19 + 0)
        this.setState({ bgColor: this.colors[randomIndexColor] })
    }


    render() {
        var colors = ["#77b3d1", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552",
            "#A40E4C", "#85AFC0", "#296573", "#AA8552", "#CC0E4C", "#567187", "#c6c976", "#967c64",
            "#e497ed", "#d24cff", "#e2ceb1", "#cc999e", "#97bf9a"];

        var circleStyle = {
            padding: 10,
            margin: 20,
            display: "inline-block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width: 100,
            height: 100
        };

        return (
            <div style={circleStyle}>
            </div>
        );
    }
}



export default Shapes

