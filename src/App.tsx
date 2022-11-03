import { ThemeProvider } from '@emotion/react';
import GlobalStyles from 'core/styles/global';
import { theme } from 'core/styles/theme-variables';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <main>
          <Outlet />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
