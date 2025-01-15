import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTheme, ThemeProvider } from '@mui/material';
import { pink } from '@mui/material/colors';

import Routes from './components/routes';
import AppBar from './components/core/appBar';
import Footer from './components/core/footer';
import { BrowserRouter } from 'react-router';

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#5578a1',
        light: '#d0b6d4'
      },
      secondary: pink
    },
    typography: {
      fontFamily: '"Jost", serif'
    }
  });

  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div style={{ backgroundColor: '#edeff0' }}>
            <AppBar />
            <Routes />
            <Footer />
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
