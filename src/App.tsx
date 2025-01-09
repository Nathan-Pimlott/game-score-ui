import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTheme, ThemeProvider } from '@mui/material';
import { pink } from '@mui/material/colors';

import Routes from './components/routes';
import AppBar from './core/appBar';

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#004d40'
      },
      secondary: pink
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
