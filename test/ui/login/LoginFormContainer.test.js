import 'test/enzyme-init';

import { mapStateToProps, mapDispatchToProps } from 'ui/login/LoginFormContainer';

// Using real react component and not LoginFormContainer in __mocks__/ui/login
jest.unmock('ui/login/LoginFormContainer');

const TEST_STATE = {
  loginForm: { loginErrorMessage: 'test' },
};

// declare a mock empty function
const dispatchMock = jest.fn();

describe('LoginFormContainer', () => {
  it('maps login error message property with state.form.loginErrorMessage', () => {
    expect(mapStateToProps(TEST_STATE)).toEqual({ loginErrorMessage: 'test' });
  });


  it('verify that performLogin is called from mapDispatchToProps', () => {
    const result = mapDispatchToProps(dispatchMock);
    expect(result.performLogin).toBeDefined();
  });

  it('verify that performLogin is called from mapDispatchToProps', () => {
    const result = mapDispatchToProps(dispatchMock);
    result.performLogin('gianni', 'moi');
    expect(dispatchMock).toHaveBeenCalled();
  });
});
