"use client"; // This is a client component

import { useRouter } from 'next/navigation';
import StatusImage from '@/components/StatusImage';
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import { OutRightPurchase } from '@/components/overview/outright/outrightPurchase';
import { FinancingPurchase } from '@/components/overview/financing/financing';
import Image from 'next/image';
import { OverviewData } from '@/components/overview/overview';
import { EstimatedEnergyRequirement } from '@/components/overview/estimatedEnergyRequirement';
import useQuotation from '@/hooks/quotation';
import React from 'react';
import { Box, Button, ToggleButton, Typography } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CustomizedSteppers from '@/components/stepper';

export default function Page() {

  const router = useRouter();
  const { actions, state } = useStateMachine({ updateAction });
  const { quote } = useQuotation();


  const handleToggle = (id: any) => {
    const formData = {
      finance: id
    }
    actions.updateAction(formData);
  };

  const onBack = () => {
    router.push(`/quotation/breakdown`);
  }

  return (
    <Box>

      <Button
        color='secondary'
        variant="text"
        startIcon={<Image
          src="/images/collaps-arrow-right.svg"
          alt="arrow icon"
          width={24}
          height={24}
        />}
        onClick={() => onBack()}
      >
        Back
      </Button>


      <StatusImage status={5} />

      <CustomizedSteppers activeStep={5} />


      <Box>

        <Typography textAlign="center" variant="h6" fontWeight="bold">
          Overview
        </Typography>


        <OverviewData />

        <EstimatedEnergyRequirement quote={quote} />

        <ToggleButtonGroup
          color="primary"
          value={state.finance}
          exclusive
          onChange={(e, value) => handleToggle(value)}
          fullWidth

        >
          <ToggleButton value={false}>Outright Purchase</ToggleButton>
          <ToggleButton value={true}>Financing</ToggleButton>
        </ToggleButtonGroup>

        {!state.finance && <OutRightPurchase quote={quote} />}
        {state.finance && <FinancingPurchase quote={quote} />}
      </Box>

    </Box>
  );
}
