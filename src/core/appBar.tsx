import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export default () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <img id="header-logo" src="/src/assets/images/logo.png" style={{ height: 50, width: 50 }} />
        <Typography
          id="header-title"
          variant="h6"
          component="div"
          style={{ fontFamily: '"Jersey 15", serif', fontSize: 40 }}>
          GameScore
        </Typography>
        <div style={{ display: 'flex', margin: '20px 0 0 5px' }}>
          <Typography id="header-subtitle" variant="caption" style={{ margin: 'auto 0 0 0' }}>
            By {import.meta.env.VITE_USERNAME}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  </Box>
);
