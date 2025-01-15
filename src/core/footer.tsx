import { useState } from 'react';
import { AppBar, Box, IconButton, InputBase, Paper, Toolbar, Typography } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router';

export default () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  return (
    <div style={{ width: '100%', height: 'auto', backgroundColor: 'lightgray', padding: 20 }}>
      <div>
        <Typography style={{ textAlign: 'center' }}>Some footer content.</Typography>
      </div>
    </div>
  );
};
