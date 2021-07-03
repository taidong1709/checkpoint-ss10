import { Component } from "react";
import { Button as BTButton } from "react-bootstrap";

export default class Counter extends Component {
    state = {
        currentValue: 0
    }

    render() {
        return (
            <div>
                <div style={{
                    border: "1px solid black",
                    marginTop: "4px",
                    marginBottom: "4px",
                    width: "fit-content",
                    marginLeft: "auto",
                    marginRight: "auto",

                    display: "flex",
                    paddingTop: "4px",
                    paddingBottom: "4px"
                }}>
                    <div style={{
                        backgroundColor: "lightblue",
                        color: "darkred",
                        fontFamily: "monospace",
                        fontSize: "30px",
                        marginLeft: "4px",
                        marginRight: "4px",
                        paddingLeft: "2px",
                        paddingRight: "2px"
                    }}><span>{this.state.currentValue ? this.state.currentValue : "Zero"}</span></div>
                    <BTButton onClick={() => this.setState({
                        ...this.state, currentValue: this.state.currentValue + 1
                    })} style={{ marginLeft: "4px", marginRight: "4px" }}>Increase</BTButton>
                    <BTButton onClick={() => this.setState({
                        ...this.state, currentValue: this.state.currentValue - 1
                    })} style={{ marginLeft: "4px", marginRight: "4px" }}>Decrease</BTButton>
                    <BTButton onClick={() => this.props.handleDelete(this.props.id)} variant="danger" style={{ marginLeft: "4px", marginRight: "4px" }}>Delete</BTButton>
                </div>
            </div>
        );
    }
}