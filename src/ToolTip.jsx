import React from "react";
function ToolTip(Component) {
  return class ToolTip extends React.Component {
    state = { isShow: false };
    handleIsShow = (isShowState) => {
      let { isShow } = this.props;
      isShow = isShowState;
      this.setState({ isShow });
    };
    render() {
      return (
        <div
          onMouseOver={() => {
            this.handleIsShow(true);
          }}
          onMouseOut={() => {
            this.handleIsShow(false);
          }}
        >
          <Component {...this.props} isShow={this.state.isShow} />
        </div>
      );
    }
  };
}

export default ToolTip;
