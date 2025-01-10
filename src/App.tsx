import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTheme, ThemeProvider } from '@mui/material';
import { pink } from '@mui/material/colors';

import Routes from './components/routes';
import AppBar from './core/appBar';

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
      // h4: { fontWeight: 700, fontSize: 30 },
      // h3: { fontWeight: 400 }
    }
  });

  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppBar />
        <Routes />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
