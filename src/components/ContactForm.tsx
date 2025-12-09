import React from "react";
import { useState } from "react";
import type { FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Form inviato:", formData);
    }



    return (

        <form onSubmit={handleSubmit}>


        </form>
    )

}

export default ContactForm;