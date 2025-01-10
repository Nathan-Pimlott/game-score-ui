import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export default () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <img src="/src/assets/images/logo.png" style={{ height: 50, width: 50 }} />
        <Typography
          variant="h6"
          component="div"
          // sx={{ flexGrow: 1 }}
          style={{ fontFamily: '"Jersey 15", serif', fontSize: 40 }}>
          GameScore
        </Typography>
        <div style={{ display: 'flex', margin: '20px 0 0 5px' }}>
          <Typography variant="caption" style={{ margin: 'auto 0 0 0' }}>
            By {import.meta.env.VITE_USERNAME}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  </Box>
);
