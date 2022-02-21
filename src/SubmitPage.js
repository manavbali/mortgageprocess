import React from 'react';
import { Container, Typography, Grid, TextField, Button,Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));



const submitDetails = ({ prevStep, nextStep, handleChange, values }) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
      }
    
      const Previous = e => {
        e.preventDefault();
        prevStep();
      }

    
      localStorage.setItem('first Name', JSON.stringify(values.firstName));
      localStorage.setItem('mobile', JSON.stringify(values.mobile)); 
      localStorage.setItem('email', JSON.stringify(values.email));
      localStorage.setItem('depositAmount', JSON.stringify(values.depositAmount));
      localStorage.setItem('expectedPrice', JSON.stringify(values.expectedPrice));

      console.log(localStorage);


      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {localStorage}
    };
    fetch('https://1b97b43d-8f33-4a5c-98a4-0812c0493c3c.mock.pstmn.io', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            
        })
        .catch(error => {
                console.error('There was an error!', error);
        });
    
      return (
        <Container  component="main" maxWidth="xs" >
          <div>
          <Box sx={{ bgcolor: '#cfe8fc', height: '40vh' }} >
            <form>
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography  component="h1" variant="h5">
              We will be in touch Soon.
            </Typography>
              </Grid>
              <Grid item xs={12}>
              <Alert severity="success">Successfully Submitted!</Alert>

              </Grid>
            
            
           
            </Grid>

   
            </form>
            </Box>
          </div>
        </Container>
      )
    }
    
    export default submitDetails