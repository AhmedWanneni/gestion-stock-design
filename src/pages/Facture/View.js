import React, {useState} from "react";
import Datatable from "../../partials/Datatable";
import Sidebar from "../../partials/Sidebar";
import { Ajouter_Factures, Afficher_Factures,Modifier_Factures,Supprimer_Factures } from "./Controller";


import Header from "../../partials/Header";
import Fournisseur from "../../partials/Datatable/FournisseurTable"
import Data from "./Facture"

import { Button, Paper, TextField,Grid,Box,Stepper,Step,StepLabel,Typography} from "@material-ui/core";
const steps = ['Liste des fournisseur', 'Liste des article', 'Votre Facture'];
const Factures = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const getStep = (step)=>{
    switch (step) {
      case 1:
        return  <> 
        <div>
        <Datatable
            Ajouter={Ajouter_Factures}
            Afficher={Afficher_Factures}
            Modifier={Modifier_Factures}
            Supprimer={Supprimer_Factures}
            title={"Liste des Article"}
          /> 
        </div>
    </>;
      case 0:
        return <>
        
       
        <Fournisseur/>
       
        

        </>;
      case 2:
        return <>
       <Data/>
       
        
        <h1></h1>
        </>;
      default:
        return "unknown step";
    }
   }
   const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
      
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden white">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          
          {/*Datatable*/}
{/*           
          <Datatable
            Ajouter={Ajouter_Factures}
            Afficher={Afficher_Factures}
            Modifier={Modifier_Factures}
            Supprimer={Supprimer_Factures}
            title={"Liste des Factures"}
          /> */}
          <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption"></Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div>
          {getStep(activeStep)}
            </div>
          <Typography sx={{ mt: 2, mb: 1 }}></Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

            <Button onClick={
              
              handleNext}>
              {activeStep === steps.length - 1 ? 'Terminé' : 'suivant'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
        </div>
      </div>
    </>
  );
};

export default Factures;
