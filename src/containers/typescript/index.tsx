import React, { Component, ReactNode } from "react";
import { connect } from "react-redux";
import { updateTitle } from "../../model/home/index";

type Props = {
  title: string;
  updateTitle: Function;
};

interface State {
  [propName: string]: any;
}

class Home extends Component<Props, State> {
  handleClick: () => void = () => {
    const { updateTitle } = this.props;
    updateTitle("wtfffff");
  };

  render(): ReactNode {
    const { title } = this.props;
    return (
      <div className="home">
        {title}
        <button type="button" onClick={this.handleClick}>
          Change
        </button>
      </div>
    );
  }
}

interface Istateprops {
  typeReducer: any;
}

export default connect(
  (state: Istateprops) => ({
    title: state.typeReducer.title,
  }),
  { updateTitle }
)(Home);
