import { Box, Button, Grid2, Typography } from "@mui/material"
import Link from "next/link"

const backgroundImage = "/images/home/bg-homes.svg";

const HomeMainSection = () => {

    return (
        <Box
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Box textAlign="center"
                sx={{
                    pt: {
                        xs: 20,
                        md: 20,
                    },
                    pb: {
                        xs: 10,
                        md: 20,
                    },
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    fontWeight="bold"
                    fontSize={36}
                    color="#fff"
                    sx={{
                        textShadow: '2px 2px 5px #000',
                    }}
                >
                    Powering your world
                </Typography>

                <Typography
                    variant="h2"
                    component="h2"
                    fontWeight="bold"
                    fontSize={33}
                    color="#fff"
                    sx={{
                        textShadow: '2px 2px 5px #000',
                    }}
                >
                    with clean energy solutions
                </Typography>

                <Typography
                    color="#fff"
                    mt={4}
                    sx={{
                        textShadow: '1px 1px 5px #000',
                    }}
                >
                    Affordable, reliable and tailored solar solutions for every home and business
                </Typography>


                <Grid2 mt={20} container spacing={2}>

                    <Grid2 size={{ xs: 12, md: 3 }} offset={{ md: 3 }}>
                        <Button variant="outlined" LinkComponent={Link} href="/quotation/details" color="secondary" fullWidth>
                            Explore Products
                        </Button>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 3 }}>
                        <Button variant="outlined" LinkComponent={Link} href="/quotation/details" color="secondary" fullWidth>
                            Get a quote
                        </Button>
                    </Grid2>
                </Grid2>

            </Box>
        </Box>
    )
}

export default HomeMainSection