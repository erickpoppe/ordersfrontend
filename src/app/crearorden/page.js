'use client'

import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { saveClientId, saveShippingAddress } from "@/redux/slices/cartSlice";

export default function CartPage() {
    const router = useRouter();

    const { handleSubmit, register } = useForm();

    const submitHandler = async (formData) => {
        try {
            const url = "https://dev-core-invoice-service-q642kqwota-uc.a.run.app/orders/";
            const headers = {
                Accept: "application/json",
                "Content-Type": "application/json",
            };

            const payload = {
                products: [
                    {
                        product_id: formData.product_id,
                        quantity: formData.quantity,
                        discount: formData.discount,
                    },
                ],
                customer_id: 1,
                client_id: 1,
                branch_id: 1,
                pos_id: 1,
                user_id: 1,
                doc_sector_id: 17,
                payment_method_id: 1,
                currency_id: 1,
                currency_conversion_factor: 1,
                additional_discount: 0,
                offline: 1,
            };

            const response = await axios.post(url, payload, { headers });
            alert(`Orden nueva creada con ID:' ${response.data.id}`);
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
                        <b>Crear orden</b>
                    </h2>
                    <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit(submitHandler)}>
                        <div>Número ID del producto :</div>
                        <input
                            {...register("product_id")}
                            type="number"
                            id="product_id"
                            className="border rounded p-1 ml-2"
                            placeholder="ID producto..."
                        />
                        <div> Cantidad:</div>
                        <input
                            {...register("quantity")}
                            type="number"
                            id="quantity"
                            className="border rounded p-1 ml-2"
                        />
                        <div>Descuento: </div>
                        <input
                            {...register("discount")}
                            type="number"
                            id="discount"
                            className="border rounded p-1 ml-2"
                        />
                        <div className="mb-4 flex justify-between" style={{ marginTop: "1rem" }}>
                            <button className="primary-button">Crear orden</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
