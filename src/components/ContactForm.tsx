import React from "react";
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

interface FormData {
    firstname: string;
    lastname: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        firstname: "",
        lastname: "",
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
        <form onSubmit={handleSubmit}>

            {/* Input per il nome */}
            <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.firstname}
                onChange={handleChange}
                required
            />
        </form>
    )

}

export default ContactForm;