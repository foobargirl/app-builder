import React from 'react';

import 'test/enzyme-init';
import { shallow } from 'enzyme';
import DashboardPage from 'ui/dashboard/DashboardPage';
import InternalPage from 'ui/internal-page/InternalPage';
import UserManagementContainer from 'ui/dashboard/UserManagementContainer';
import UxPatternsContainer from 'ui/dashboard/UxPatternsContainer';
import LanguagesContainer from 'ui/dashboard/LanguagesContainer';
import PageStatusContainer from 'ui/dashboard/PageStatusContainer';
import PagesListContainer from 'ui/dashboard/PagesListContainer';

describe('DashboardPage', () => {
  it('renders without crashing', () => {
    const component = shallow(<DashboardPage />);
    expect(component.exists()).toBe(true);
  });

  it('verify if it is an InternalPage', () => {
    const component = shallow(<DashboardPage />);
    expect(component.type()).toBe(InternalPage);
    expect(component.hasClass('DashboardPage')).toBe(true);
  });

  it('verify if UserManagement exists', () => {
    const component = shallow(<DashboardPage />);
    expect(component.find(UserManagementContainer)).toHaveLength(1);
  });

  it('verify if UxPatterns exists', () => {
    const component = shallow(<DashboardPage />);
    expect(component.find(UxPatternsContainer)).toHaveLength(1);
  });

  it('verify if Languages exists', () => {
    const component = shallow(<DashboardPage />);
    expect(component.find(LanguagesContainer)).toHaveLength(1);
  });

  it('verify if PageStatus exists', () => {
    const component = shallow(<DashboardPage />);
    expect(component.find(PageStatusContainer)).toHaveLength(1);
  });

  it('verify if PagesList exists', () => {
    const component = shallow(<DashboardPage />);
    expect(component.find(PagesListContainer)).toHaveLength(1);
  });
});
