import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppComponent from '../components/app-component';
import * as appActions from '../actions/app-actions';
import { getFlip, getStacks } from '../reducers/app-reducers';

function mapStateToProps(state) {
	return {
		stacks: getStacks(state.mainAppReducers),
		flip: getFlip(state.mainAppReducers)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		appActions: bindActionCreators(appActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppComponent);
