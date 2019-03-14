import React from "react";
import { connect } from "react-redux";
import {
  fetchImages,
  fetchImagesRequest,
  fetchImagesSuccess,
  fetchImagesFailure
} from "./actions";

export class Images extends React.Component {
  componentDidMount() {
    this.props.fetchImages();
  }
  render() {
    return (
      <div className="counter">
        {this.props.images.map(thumb => {
          return <img key={thumb.id} src={thumb.thumbnailUrl} alt="" />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.imagesReducer.images,
    loading: state.imagesReducer.loading,
    error: state.imagesReducer.error
  };
}

const mapDispatchToProps = {
  fetchImages,
  fetchImagesRequest,
  fetchImagesSuccess,
  fetchImagesFailure
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Images);
