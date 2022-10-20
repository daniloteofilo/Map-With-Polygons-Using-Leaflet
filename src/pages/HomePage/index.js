import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MapLeafLet from '../../components/MapLeafLet';

const mdTheme = createTheme();

function HomePage() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex', flexDirection:'row' }}>
        <CssBaseline />
          <Toolbar />
          <Container maxWidth="100vw" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={0}>
              <Grid item xs={12} md={12} lg={16}>
                <Paper
                  sx={{
                    p: 1,
                    pt: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '80vh',
                    width:'90vw'
                  }}
                >
                  <MapLeafLet />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <HomePage />;
}
