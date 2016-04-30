import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as flippingActions from '../actions/flipping-actions';
import { FlipperManager } from '../components/FlipperManager';

function mapDispatchToProps(dispatch) {
  return {
    flippingActions: bindActionCreators(flippingActions, dispatch),
  };
}

export default connect(
  undefined,
  mapDispatchToProps
)(FlipperManager);
