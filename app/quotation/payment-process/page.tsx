"use client"; // This is a client component

import { useRouter } from 'next/navigation';
import StatusImage from '@/components/StatusImage';
import { useStateMachine } from 'little-state-machine';
import updateAction from '@/little-state/action';
import PaymentMethodCard from '@/components/payment/paymentMethodCard';
import PaymentCardDetails from '@/components/payment/paymentCardDetails';
import Image from 'next/image';
import useQuotation from '@/hooks/quotation';
import PayStackPayment from '@/components/payment/payStack';
import { Box, Button, Typography } from '@mui/material';
import CustomizedSteppers from '@/components/stepper';
import { TotalSummary } from '@/components/payment/totalSummary';

export default function Page() {

  const router = useRouter();
  const { state } = useStateMachine({ updateAction });

  const { quote } = useQuotation();

  const onBack = () => {
    router.push(`/quotation/overview`);
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

      <StatusImage status={6} />

      <CustomizedSteppers activeStep={6} />

      <Box>
        <Box sx={{
          borderRadius: 2,
          padding: 3,
          position: "relative",
          textAlign: "center",
          mt: 14,
          pt: 5,
          background: '#ffffff',
          '&:before': {
            content: '""',
            position: "absolute",
            top: "1px",
            left: "1px",
            right: "1px",
            bottom: "1px",
            border: "6px solid #FFFFFF4D",
            borderRadius: "inherit",
            boxShadow: "5px 5px 4px 0px rgba(0, 0, 0, 0.1) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          },
        }}>
          {/* Top Middle Image */}
          <Box
            component="img"
            src="/images/quotation/summary.svg"
            alt="Top Image"
            sx={{
              position: "absolute",
              top: "-80px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "130px",
              height: "130px",
            }}
          />
          <Typography textAlign="center" variant="h6" mt={2}>
            Payment Summary
          </Typography>

          <TotalSummary quote={quote} isFinance={false} />
        </Box>
        <PaymentMethodCard />
        {state.payment_method == "credit_debit_card" && (
          <PaymentCardDetails quote={quote} />
        )}
        {state.payment_method == "paystack" && (
          <PayStackPayment quote={quote} />
        )}

      </Box>
    </Box>
  );
}
