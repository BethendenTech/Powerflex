"use client";

import { financeTermTears } from "@/utils/formData";
import { useForm } from "react-hook-form";

interface FinancingTermModalProps {
    isOpen: Boolean;
    onClose: (sata: Object) => void;
}

export const FinancingTermModal = ({ isOpen, onClose }: FinancingTermModalProps) => {
    if (!isOpen) return null;

    const { register, handleSubmit, formState: { errors }, setError, setValue, watch } = useForm({
        defaultValues: {
            total_cost: "",
            down_payment: "",
            term: "",
            interest_rate: "",
        }
    });

    const onSubmit = async (formData: any) => {
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gray-400 rounded-lg w-1/1 p-5">
                {/* Modal Content */}
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Edit Finance Terms</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        &#x2715; {/* Close icon */}
                    </button>
                </div>
                <div className="mt-4">
                    <form className="w-full details-form flex flex-col gap-6 items-center" onSubmit={handleSubmit(onSubmit)}>


                        <div className="grid grid-cols-2 gap-2">


                            <div className='input-group'>
                                <label htmlFor="electricity_spend" className="label">
                                    Total Cost
                                </label>
                                <input
                                    className={errors.total_cost ? "input w-full border border-red-500" : "input w-full"}
                                    type="text"
                                    {...register('total_cost', { required: 'Total Cost is required' })}
                                />

                                {errors.total_cost && <p className="text-red-500 text-xs italic">{errors?.total_cost?.message}</p>}
                            </div>
                            <div className='input-group'>
                                <label htmlFor="electricity_spend" className="label">
                                    Down Payment
                                </label>
                                <input
                                    className={errors.down_payment ? "input w-full border border-red-500" : "input w-full"}
                                    type="text"
                                    {...register('down_payment', { required: 'Down Payment is required' })}
                                />

                                {errors.down_payment && <p className="text-red-500 text-xs italic">{errors?.down_payment?.message}</p>}
                            </div>
                            <div className='input-group'>
                                <label htmlFor="term" className="label">
                                    Term
                                </label>

                                <select
                                    className={errors.term ? "select w-full border border-red-500" : "select w-full"}
                                    {...register('term', { required: 'Term is required' })}
                                >
                                    <option value="">Select a term</option> {/* Placeholder */}


                                    {financeTermTears && financeTermTears.map(financeTermTear => (
                                        <option value={financeTermTear.value}>{financeTermTear.label}</option>
                                    ))}
                                </select>

                                {errors.term && <p className="text-red-500 text-xs italic">{errors?.term?.message}</p>}
                            </div>
                            <div className='input-group'>
                                <label htmlFor="electricity_spend" className="label">
                                    Interest Rate
                                </label>
                                <input
                                    className={errors.interest_rate ? "input w-full border border-red-500" : "input w-full"}
                                    type="text"
                                    {...register('interest_rate', { required: 'Interest Rate is required' })}
                                />

                                {errors.interest_rate && <p className="text-red-500 text-xs italic">{errors?.interest_rate?.message}</p>}
                            </div>
                        </div>

                    </form>
                </div>
                <div className="flex justify-end mt-6">
                    <button
                        onClick={onClose}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}