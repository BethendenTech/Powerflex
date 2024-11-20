"use client";

import updateAction from "@/little-state/action";
import { Box, Button, FormControl, FormHelperText, FormLabel, OutlinedInput, Typography } from "@mui/material";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from 'next/dynamic';

const SentiFlexIframeComponent = dynamic(() => Promise.resolve(() => (
    <iframe
        src="https://sentiflex.com/contact.php"
        width="100%"
        height="500"
        style={{ border: 'none' }}
        title="SentiFlex Contact Form"
    />
)), { ssr: false });

const IndividualApplicationForm = () => {
    const router = useRouter();
    const { actions, state } = useStateMachine({ updateAction });

    const [showIframe, setShowIframe] = useState(false)

    // Set up react-hook-form with default values for the inputs
    const { register, handleSubmit, formState: { errors }, setError, setValue, watch } = useForm({
        defaultValues: {
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            house_number: '',
            street_address: '',
            landmark: '',
            nearest_bus_stop: '',
            town: '',
            city: '',
            state: '',
            lga: '',
            occupation: '',
            work_address: '',
            how_heard_about: ''
        }
    });

    // Handle form submission
    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
        // You can trigger the update action or route navigation here
        // actions.updateAction(data);
        // router.push("/quotation/payment-summary");
        setShowIframe(true)
    };


    return (
        <Box mt={5}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Typography variant="h6">
                    Individual Application
                </Typography>

                {showIframe && <SentiFlexIframeComponent />}

                <FormControl
                    fullWidth
                    error={!!errors.first_name}
                >
                    <FormLabel>
                        First Name
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("first_name", { required: "First name is required" })}
                    />
                    <FormHelperText>{errors?.first_name?.message}</FormHelperText>
                </FormControl>



                <FormControl
                    fullWidth
                    error={!!errors.last_name}
                >
                    <FormLabel>
                        Last Name
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("last_name", { required: "Last name is required" })}
                    />
                    <FormHelperText>{errors?.last_name?.message}</FormHelperText>
                </FormControl>


                <FormControl
                    fullWidth
                    error={!!errors.phone_number}
                >
                    <FormLabel>
                        Phone number
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("phone_number", { required: "Phone number is required" })}
                    />
                    <FormHelperText>{errors?.phone_number?.message}</FormHelperText>
                </FormControl>

                <FormControl
                    fullWidth
                    error={!!errors.email}
                >
                    <FormLabel>
                        Email Address
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("email", { required: "Email address is required" })}
                    />
                    <FormHelperText>{errors?.email?.message}</FormHelperText>
                </FormControl>

                <FormControl
                    fullWidth
                    error={!!errors.house_number}
                >
                    <FormLabel>
                        House Number
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("house_number", { required: "House Number is required" })}
                    />
                    <FormHelperText>{errors?.house_number?.message}</FormHelperText>
                </FormControl>



                <FormControl
                    fullWidth
                    error={!!errors.street_address}
                >
                    <FormLabel>
                        Street Address
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("street_address", { required: "Street Address is required" })}
                    />
                    <FormHelperText>{errors?.street_address?.message}</FormHelperText>
                </FormControl>


                <FormControl
                    fullWidth
                    error={!!errors.landmark}
                >
                    <FormLabel>
                        Landmark
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("landmark", { required: "Landmark is required" })}
                    />
                    <FormHelperText>{errors?.landmark?.message}</FormHelperText>
                </FormControl>


                <FormControl
                    fullWidth
                    error={!!errors.nearest_bus_stop}
                >
                    <FormLabel>
                        Nearest Bus Stop
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("nearest_bus_stop", { required: "Nearest Bus Stop is required" })}
                    />
                    <FormHelperText>{errors?.nearest_bus_stop?.message}</FormHelperText>
                </FormControl>


                <FormControl
                    fullWidth
                    error={!!errors.town}
                >
                    <FormLabel>
                        Town
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("town", { required: "Town is required" })}
                    />
                    <FormHelperText>{errors?.town?.message}</FormHelperText>
                </FormControl>

                <FormControl
                    fullWidth
                    error={!!errors.city}
                >
                    <FormLabel>
                        City
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("city", { required: "City is required" })}
                    />
                    <FormHelperText>{errors?.city?.message}</FormHelperText>
                </FormControl>


                <FormControl
                    fullWidth
                    error={!!errors.state}
                >
                    <FormLabel>
                        State
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("state", { required: "State is required" })}
                    />
                    <FormHelperText>{errors?.state?.message}</FormHelperText>
                </FormControl>

                <FormControl
                    fullWidth
                    error={!!errors.lga}
                >
                    <FormLabel>
                        LGA (Local Government Area)
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("lga", { required: "LGA (Local Government Area) is required" })}
                    />
                    <FormHelperText>{errors?.lga?.message}</FormHelperText>
                </FormControl>



                <FormControl
                    fullWidth
                    error={!!errors.occupation}
                >
                    <FormLabel>
                        Occupation
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("occupation", { required: "Occupation is required" })}
                    />
                    <FormHelperText>{errors?.occupation?.message}</FormHelperText>
                </FormControl>


                <FormControl
                    fullWidth
                    error={!!errors.work_address}
                >
                    <FormLabel>
                        Full Work or Business Address
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("work_address", { required: "Full Work or Business Address is required" })}
                    />
                    <FormHelperText>{errors?.work_address?.message}</FormHelperText>
                </FormControl>


                <FormControl
                    fullWidth
                    error={!!errors.how_heard_about}
                >
                    <FormLabel>
                        How did you hear about Powerflex?
                    </FormLabel>
                    <OutlinedInput
                        type='text'
                        {...register("how_heard_about", { required: "this is required" })}
                    />
                    <FormHelperText>{errors?.how_heard_about?.message}</FormHelperText>
                </FormControl>

                <Box position="sticky" bottom={0}>
                    <Button
                        fullWidth
                        type="submit"
                        variant='contained'
                    >
                        Apply for Financing
                    </Button>
                </Box>

            </form>
        </Box>
    );
};

export default IndividualApplicationForm;
