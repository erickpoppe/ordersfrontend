'use client'

import { useRouter } from "next/navigation";
import Link from "next/link";
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { saveClientId, saveShippingAddress } from "@/redux/slices/cartSlice";

export default function CartPage() {

    const [orden, setOrden] = useState(null);
    const router = useRouter();

    const { handleSubmit, register } = useForm();

    const submitHandler = async (formData) => {
        try {
            const ordenId = formData.orden_id; // Get the orden_id from the form data
            setOrden(ordenId);

            const customerId = 1; // Set the customer_id

            const url = `https://dev-core-invoice-service-q642kqwota-uc.a.run.app/orders/${ordenId}/emit?customer_id=${customerId}`;

            const headers = {
                Accept: "application/json"
            };

            const response = await axios.put(url, null, { headers }); // Use axios.put for a PUT request

            alert(`Orden nueva emitida con ID: ${response.data.id} y número de factura ${response.data.invoice_number} `);
            console.log("Order created:", response.data);
        } catch (error) {
            alert(`Error creating the order`);
            console.error("Error creating order:", error);
        }
    };

    return (
        <div>
            <div className="card  p-5">
                <div className="mb-3">
                    <h2 className="mb-2 text-lg">
                        <b>Emitir orden</b>
                    </h2>
                    <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit(submitHandler)}>
                        <div>Número de la orden :</div>
                        <input
                            {...register("orden_id")}
                            type="number"
                            id="orden_id"
                            className="border rounded p-1 ml-2"
                        />
                        <div className="mb-4 flex justify-between" style={{ marginTop: "1rem" }}>
                            <button className="primary-button">Emitir orden</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
