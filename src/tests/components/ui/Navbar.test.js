import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { types } from '../../../types';

import Navbar from '../../../components/ui/Navbar';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Tests in <Navbar />', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: true, name: 'Welcome' }
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<Navbar />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h3').text().trim()).toBe('Welcome');
  });

  test('should call to logout, call the navigate and the dispatch with args', () => {
    wrapper.find('button').prop('onClick')();
    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
    expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
