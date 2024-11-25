import updateAction from '@/little-state/action';
import { QuotationContextType, QuoteInterface } from '@/types/quotation';
import { defaultQuoteData } from '@/utils/formData';
import { useStateMachine } from 'little-state-machine';
import { useRouter } from 'next/navigation';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

// Initialize context with undefined as default, to be provided by the provider.
export const QuotationContext = createContext<QuotationContextType | undefined>(undefined);

// Props for the provider component
interface QuotationProviderProps {
    children: ReactNode;
}

// QuotationProvider component
export const QuotationProvider = ({ children }: QuotationProviderProps) => {
    const router = useRouter();
    const { state } = useStateMachine({ updateAction });

    const [quote, setQuote] = useState<QuoteInterface>(defaultQuoteData);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const calculateQuote = async () => {
        const postData = {
            electricity_spend: state.electricity_spend,
            price_band: state.price_band,
            solar_load: state.solar_load,
            battery_autonomy_hours: Number(state.battery_autonomy_hours_only) + Number(state.battery_autonomy_days * 24),
            breakdowns: state.breakdowns,
        };

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/calculate-quote/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                const data = await response.json();
                setQuote(data);
            } else {
                console.error('Failed to save user details');
                setError('Failed to save user details');
                // Uncomment to navigate to home if needed
                // router.push("/");
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Error calculating quote');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        calculateQuote();
    }, [
        state.solar_load,
        state.battery_autonomy_hours_only,
        state.battery_autonomy_days,
        state.breakdowns,
    ]);

    return (
        <QuotationContext.Provider value={{ quote, error, isLoading }}>
            {children}
        </QuotationContext.Provider>
    );
};
