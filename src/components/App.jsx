import Header from './Header/Header';
import UseMemoExample from './UseMemoExample';
import UseRefInputFile from './UseRefInputFile';
import UseRefRenderCountExample from './UseRefRenderCountExample';
import UseRefForwardRefExample from './UseRefForwardRefExample';
import LoginForm from './Login/LoginForm';
import UseContextExample from './UseContextExample/UseContextExample';
import { createContext, useContext } from 'react';
import { authContext } from '../providers/AuthProvider/AuthProvider';
import { themeContext } from '../providers/ThemeProvider/ThemeProvider';
import clsx from 'clsx';

// export const myContext = createContext();
// const contextValue = {
//   auto: 'Audi',
//   model: 'RS6',
// };

const App = () => {
  const { theme } = useContext(themeContext);
  const { user } = useContext(authContext);
  return user ? (
    <main className={clsx(theme === 'dark' ? 'dark' : 'light')}>
      <Header />
      {/* Step 1. Use memo calc logic */}
      <UseMemoExample />

      {/* Step 2. Use ref */}
      {/* <UseRefRenderCountExample /> */}

      {/* Step 3. Use ref file*/}
      {/* <UseRefInputFile /> */}

      {/* Step 4. Use forward ref */}
      {/* <UseRefForwardRefExample /> */}

      {/* Step 5. Use context */}
      {/* <myContext.Provider value={contextValue}>
    <UseContextExample message={message} />
  </myContext.Provider> */}

      {/* Step 6. Extended context with state */}
      {/* <LoginForm /> */}
    </main>
  ) : (
    <LoginForm />
  );
};
export default App;
