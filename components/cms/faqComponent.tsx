import { Container } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import * as React from 'react';
import { Detail, Heading } from '../form/style';
import Image from 'next/image';

import Minus from "../../public/images/icon/minus.svg";
import Plus from "../../public/images/icon/plus.svg";

export const FaqComponent = () => {
    const [faqData, setFaqData] = React.useState<any>([]);

    const [expanded, setExpanded] = React.useState(false);

    const handleAccordionToggle = () => {
        setExpanded(!expanded);
    };

    React.useEffect(() => {
        getFaqData();
    }, [])

    const getFaqData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cms/faqs/`);

        if (response.ok) {
            const data = await response.json();
            setFaqData(data)
        }
    }


    return (
        <Container maxWidth="lg" sx={{ pt: 3, pb: 3 }}>
            <Heading sx={{ fontSize: "32px", textAlign: 'left' }}>
                Frequently Asked Questions
            </Heading>

            {faqData && faqData.map((value, index) => {
                return (
                    <Accordion key={`value-${index}`}
                        expanded={expanded}
                        onChange={handleAccordionToggle}
                        sx={{
                            boxShadow: "none",
                        }}>
                        <AccordionSummary
                            expandIcon={
                                expanded ? (
                                    <Image src={Minus} alt="Collapse" style={{ width: "20px", height: "20px" }} />
                                ) : (
                                    <Image src={Plus} alt="Expand" style={{ width: "20px", height: "20px" }} />
                                )
                            }
                        >
                            <Heading sx={{ fontSize: '22px', textAlign: 'left' }}>
                                {value.name}
                            </Heading>
                        </AccordionSummary>
                        <Detail>
                            {value.description}
                        </Detail>
                    </Accordion>
                );
            })}

        </Container>
    )
}




