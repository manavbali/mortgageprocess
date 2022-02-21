import React from 'react'
import { Container, Typography, Grid, TextField, Button,Box } from '@material-ui/core'

const userDetails = ({ prevStep, nextStep, handleChange, values }) => {
    console.log(values);
    const Continue = e => {
        e.preventDefault();
        nextStep();
      }
    
      const Previous = e => {
        e.preventDefault();
        prevStep();
      }
    
      return (
        <Container  component="main" maxWidth="xs" >
          <div>
          <Box sx={{ bgcolor: '#cfe8fc', height: '60vh' }} >
            <form>
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography  component="h1" variant="h5">
              User Details
            </Typography>
              </Grid>
              <Grid item xs={12}>
              <TextField 
                    placeholder="First Name"
                    label="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                  />
              </Grid>
              <Grid item xs={12}>
              <TextField 
                    placeholder="Mobile"
                    label="Mobile"
                    onChange={handleChange('mobile')}
                    defaultValue={values.mobile}
                  />
              </Grid>

              <Grid item xs={12}>
              <TextField 
                    placeholder="email"
                    label="email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                  />
              </Grid>
              
            
              <Grid item xs={12}>
              <Button 
                    onClick={ Continue }
                    type="submit"
                    
                    variant="contained"
                    color="primary"
                  >
                    Next
                  </Button>
              </Grid>
           
            </Grid>

   
            </form>
            </Box>
          </div>
        </Container>
      )
    }
    
    export default userDetails