import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlipperManager } from '../components/FlipperManager';
import * as flippingActions from '../actions/flipping-actions';

function mapDispatchToProps(dispatch) {
  return {
    flippingActions: bindActionCreators(flippingActions, dispatch),
  };
}

export default connect(
  undefined,
  mapDispatchToProps
)(FlipperManager);
