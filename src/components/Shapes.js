import React, { Component, useState, } from 'react';
import ReactDOM from 'react-dom';




class Shapes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: "#77b3d1",
            size: 100,
            perCent: 50,
        }
        this.changeColor = this.changeColor.bind(this);
        this.changeSize = this.changeSize.bind(this);
        this.changeShape = this.changeShape.bind(this);
    }



    //generates a random number for the width/height for each shape
    GenerateRandomWH = () => {
        var RandomNumber = Math.floor(Math.random() * 100) + 1;
        this.setState({
            NumberHolder: RandomNumber
        })
    }



    changeColor() {
        let randomIndexColor = Math.floor(Math.random() * 19 + 0)
        var colors = ["#77b3d1", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552",
            "#A40E4C", "#85AFC0", "#296573", "#AA8552", "#CC0E4C", "#567187", "#c6c976", "#967c64",
            "#e497ed", "#d24cff", "#e2ceb1", "#cc999e", "#97bf9a"];
        this.setState({ bgColor: colors[randomIndexColor] });

    }
    changeSize() {
        let randomIndexSize = Math.floor(Math.random() * 125 + 0)
        this.setState({ size: randomIndexSize });
    }
    changeShape() {
        let randomIndexShape = Math.floor(Math.random() * 100 + 0)
        this.setState({ perCent: randomIndexShape });
    }
    componentDidMount() {
        setInterval(this.changeColor, 1000);
        setInterval(this.changeSize, 1000)
        setInterval(this.changeShape, 1000)
    }



    render() {


        var circleStyle = {
            padding: 10,
            margin: 20,
            display: "inline-block",
            backgroundColor: this.state.bgColor,
            borderRadius: this.state.perCent,
            width: this.state.size,
            height: this.state.size
        };

        return (
            <div style={circleStyle}>
            </div>
        );
    }
}



function counter() {
    const element = (
        <div>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

//setInterval(tick, 1000);



export default Shapes

