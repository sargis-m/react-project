import React from "react";
import ReactDOM from "react-dom";

class JSXDemo extends React.Component {
    handleOnClick = () => {
        console.log("button clicked");
    };
    render() {
        return (
            <button id="btn" onClick={this.handleOnClick}>
                Click Here
            </button>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));