import React, { Component } from 'react';
import ExpectedPricePage from './ExpectedPricePage';
import DepositAmountPage from './DepositAmountPage';
import UserDetailsPage from './UserDetailsPage';
import SubmitPage from './SubmitPage';


export default class MainPage extends Component {

    state = {

        step: 1,
        expectedPrice: '',
        depositAmt: '',
        homeBuyingSituation: '',
        firstHomeBuyer: '',
        typeOfProperty: '',
        useOfProperty: '',
        methodofLoanRepay: '',
        lendingModel:'',
        creditHistory:'',
        employmentType:'',
        isBusinessTaxAvail:'',
        totalLoanApplicants:'',
        totalProperties:'',
        firstName:'',
        mobile:'',
        email:'',

    }


      // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  

  render() {
    const { step } = this.state;
    const {expectedPrice, depositAmount, homeBuyingSituation, firstHomeBuyer, typeOfProperty, useOfProperty, methodofLoanRepay,lendingModel,creditHistory,
        employmentType,isBusinessTaxAvail,totalLoanApplicants,totalProperties,firstName,mobile,email } = this.state;
    const values = {expectedPrice, depositAmount, homeBuyingSituation, firstHomeBuyer, typeOfProperty, useOfProperty, methodofLoanRepay,lendingModel,creditHistory,
        employmentType,isBusinessTaxAvail,totalLoanApplicants,totalProperties,firstName,mobile,email}

        
    
    switch(step) {
      case 1: 
        return (

         
          <ExpectedPricePage 
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )

        case 2:
            return (
                <DepositAmountPage 
                  prevStep={ this.prevStep }
                  nextStep={ this.nextStep }
                  handleChange={ this.handleChange }
                  values={ values }
                />
              )

        case 3: 
        
           return (
               <UserDetailsPage 
               prevStep={ this.prevStep }
                  nextStep={ this.nextStep }
                  handleChange={ this.handleChange }
                  values={ values }

               />
           )

        case 4: 
                return (
                        <SubmitPage 
                        prevStep={ this.prevStep }
                  nextStep={ this.nextStep }
                  handleChange={ this.handleChange }
                  values={ values }
                  />

                )

     /* case 2: 
        return (
          <DepositAmountPage 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 3: 
          return (
            <HomeBuyingSituationPage 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )

        case 4: 
          return (
            <FirstHomeBuyerPage 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )   

        case 5: 
          return (
            <TypeOfPropertyPage 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )  
          
        case 6: 
          return (
            <UseOfPropertyPage 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )
          
          case 7: 
          return (
            <MethodofLoanRepayPage 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )
          
        case 8: 
          return (
            <LendingModelPage 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )
          
        case 9: 
          return (
            <CreditHistoryPage 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )    
        
        case 10: 
          return (
            <EmploymentTypePage 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )

          case 11: 
          return (
            <BusinessTaxAvailPage 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          ) 
          
          
          case 12: 
          return (
            <TotalLoanApplicantsPage 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )  


          case 13: 
          return (
            <TotalPropertiesPage 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          ) 
          
          case 14: 
          return (
            <UserDetailsPage 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )  

          case 15: 
          return (
            <SubmitConfPage
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )  
          
          
        case 16: 
          return (
            <Success />
          )*/
      default: 
      
     
          // do nothing
    }
  }
}
