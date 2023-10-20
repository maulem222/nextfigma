import React from "React"

class CollapsibleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    render() {
        return (
            <button
                style={{
                    display: "inline-block",
                }}
                // Simply setting open to the opposite value.
                onClick={() =>
                          this.setState({
                              open: !this.state.open
                          }, () => {
                                  this.props.setValue(this.state.open)
                          })
                }
            >
                <span
                    style={{
                        // This makes it feel animated:
                        transition: "transform 200ms linear",
                        // This rotates the element:
                        transform: `rotateZ(${this.state.open ? 0 : "180deg"})`,
                        display: "inline-block",
                    }}
                >
                    {"<<"}
                </span>
            </button>
        );
    }
}

export default CollapsibleButton;