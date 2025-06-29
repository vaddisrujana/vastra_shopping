import React, { Component } from "react";

class HoverHighlightPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false, // Track hover state
    };
  }

  // Event handlers for hover
  handleMouseEnter = () => {
    console.log('clicked')
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { isHovered } = this.state;

    return (
      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Element to hover over */}
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          style={{
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Hover over me
        </div>

        {/* Popup */}
        {isHovered && (
          <div
            style={{
              height: "100%", // Adjust position
              width: "50%",
            }}
          >
            This is the popup content!
          </div>
        )}
      </div>
    );
  }
}

export default HoverHighlightPopup;
