import React from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
  Container,
  Box,
  AppBar,
  Toolbar
} from '@mui/material';
import TaskList from './components/TaskList';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E87A41', // Kavia orange
    },
    background: {
      default: '#1A1A1A',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#ffffff',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: '1.1rem',
      lineHeight: 1.5,
      color: 'rgba(255, 255, 255, 0.7)',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '10px 20px',
          fontSize: '1rem',
          textTransform: 'none',
          fontWeight: 500,
        },
        containedPrimary: {
          backgroundColor: '#E87A41',
          '&:hover': {
            backgroundColor: '#FF8B4D',
          },
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1A1A',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }
      }
    }
  }
});

import TaskList from './components/TaskList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Typography
              variant="h6"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <span style={{ color: '#E87A41' }}>✓</span> TaskEase
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Box sx={{
          pt: 12,
          pb: 8,
        }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ mb: 4, textAlign: 'center' }}
          >
            My Tasks
          </Typography>
          <TaskList />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;