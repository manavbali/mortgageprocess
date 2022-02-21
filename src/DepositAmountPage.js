import React from 'react'
import { Container, Typography, Grid, TextField, Button,Box } from '@material-ui/core'

const depositAmountDetails = ({ prevStep, nextStep, handleChange, values }) => {
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
          <Box sx={{ bgcolor: '#cfe8fc', height: '40vh' }} >
            <form>
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography  component="h1" variant="h5">
              How much amount you can deposit
            </Typography>
              </Grid>
              <Grid item xs={12}>
              <TextField 
                    placeholder="Deposit Amount"
                    label="Deposit Amount"
                    onChange={handleChange('depositAmount')}
                    defaultValue={values.depositAmount}
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
    
    export default depositAmountDetails