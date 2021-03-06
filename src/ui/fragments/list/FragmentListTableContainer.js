import { connect } from 'react-redux';

import { fetchFragments, sendDeleteFragment } from 'state/fragments/actions';
import { getFragmentList } from 'state/fragments/selectors';
import { getLoading } from 'state/loading/selectors';
import { getCurrentPage, getTotalItems, getPageSize } from 'state/pagination/selectors';
import FragmentListTable from 'ui/fragments/list/FragmentListTable';

export const mapStateToProps = state => (
  {
    fragments: getFragmentList(state),
    page: getCurrentPage(state),
    totalItems: getTotalItems(state),
    pageSize: getPageSize(state),
    loading: getLoading(state).fragments,
  }
);

export const mapDispatchToProps = dispatch => ({
  onWillMount: (page = { page: 1, pageSize: 10 }) => {
    dispatch(fetchFragments(page));
  },
  onClickDelete: (fragmentCode) => {
    dispatch(sendDeleteFragment(fragmentCode.code));
  },
});

const FragmentListTableContainer = connect(mapStateToProps, mapDispatchToProps)(FragmentListTable);

export default FragmentListTableContainer;
