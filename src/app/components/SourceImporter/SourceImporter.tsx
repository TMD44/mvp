import React, { useState } from 'react';
import { Step, StepContent, StepLabel, Stepper } from '@material-ui/core';
import { Step1OpenDir } from './Step1OpenDir';
import { Step2OfflineScan } from './Step2OfflineScan';
import { Step3OnlineScan } from './Step3OnlineScan';

interface PropsShape {
    handleModalClose: () => void;
}

export const SourceImporter = ({ handleModalClose }: PropsShape) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Stepper activeStep={activeStep} orientation="vertical">
            <Step key="OpenDir">
                <StepLabel>Open Directiores</StepLabel>
                <StepContent>
                    <Step1OpenDir
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                </StepContent>
            </Step>

            <Step key="OfflineScan">
                <StepLabel>Offline scan</StepLabel>
                <StepContent>
                    <Step2OfflineScan
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                </StepContent>
            </Step>

            <Step key="ScanSettings3">
                <StepLabel>Online scan</StepLabel>
                <StepContent>
                    <Step3OnlineScan
                        handleModalClose={handleModalClose}
                        handleBack={handleBack}
                    />
                </StepContent>
            </Step>
        </Stepper>
    );
};
