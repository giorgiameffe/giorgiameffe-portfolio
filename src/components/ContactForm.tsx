import React from "react";
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
    })

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Form inviato:", formData);
    }



    return (

        // Form contatti
        <form onSubmit={handleSubmit} className="md:max-w-2xl lg:max-w-4xl mx-auto">

            {/* Container Nome e Cognome */}
            <div className="flex flex-col md:flex-row md:gap-6 lg:gap-4">
                {/* Nome */}
                <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center mb-1">
                        <label htmlFor="firstName" className="font-medium mr-2">Nome:</label>
                    </div>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Inserisci il tuo nome"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Cognome */}
                <div className="flex-1">
                    <div className="flex items-center mb-1">
                        <label htmlFor="lastName" className="font-medium mr-2">Cognome:</label>
                    </div>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Inserisci il tuo cognome"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

        </form>
    )

}

export default ContactForm;