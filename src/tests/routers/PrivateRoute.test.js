import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import LoginScreen from '../../components/login/LoginScreen';
import PrivateRoute from '../../routers/PrivateRoute';

const mockNavigate = <LoginScreen />;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => mockNavigate
}));

describe('Tests in <PrivateRoute />', () => {
  test('should display the component if authenticated', () => {
    const contextValue = {
      user: { logged: true, user: 'Welcomet' }
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/*']}>
          <PrivateRoute>
            <h1>Private Route Components</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper.find('h1').text().trim()).toBe('Private Route Components');
  });

  test('should block the component if not authenticated', () => {
    const contextValue = {
      user: { logged: false }
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/*']}>
          <PrivateRoute>
            <h1>Private Route Components</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper.find('h2').text().trim()).toBe('Login');
  });
});
