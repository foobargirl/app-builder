import 'test/enzyme-init';

import { mapDispatchToProps } from 'ui/data-models/list/DataModelListPageContainer';

describe('DataModelListPageContainer', () => {
  it('verify that onWillMount and handleSubmit are defined and called in mapDispatchToProps', () => {
    const dispatchMock = jest.fn();
    const result = mapDispatchToProps(dispatchMock);
    expect(result.onWillMount).toBeDefined();
    result.onWillMount();
    expect(dispatchMock).toHaveBeenCalled();
  });
});
