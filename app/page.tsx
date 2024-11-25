import { Box, Button, Container, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Box>

      <Box textAlign="center" mt={30} mb={20}>
        <Typography variant="h2" component="h1" fontWeight="bold" fontSize={36} color="#fff">Powering your world</Typography>
        <Typography variant="h2" component="h2" fontWeight="bold" fontSize={33} color="#fff">with clean energy solutions</Typography>
        <Typography color="#fff">Affordable, reliable and tailored solar solutions for every home and business</Typography>
      </Box>



      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Stack direction="row" spacing={3}>
          <Button variant="outlined" LinkComponent={Link} href="/quotation/details" color="secondary">
            Explore Products
          </Button>
          <Button variant="outlined" LinkComponent={Link} href="/quotation/details" color="secondary">
            Get a quote
          </Button>
        </Stack>


      </Box>

    </Box>
  );
}
