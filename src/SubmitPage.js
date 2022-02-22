import React from 'react';
import axios from 'axios';
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

      var postObject = {
        "firstname" : "",
        "mobile":"",
        "email":"",
        "depositAmount":"",
        "expectedPrice":""

      }

      postObject["firstname"]=values.firstName;
      postObject["mobile"]=values.mobile;
      postObject["email"]=values.email;
      postObject["depositAmount"]=values.depositAmount;
      postObject["expectedPrice"]=values.expectedPrice;

      console.log(JSON.stringify(postObject));

        axios.post('http://localhost:3001/submit', JSON.stringify(postObject))
        .then(response =>  {console.log(response);})
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