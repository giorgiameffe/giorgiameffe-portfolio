import React from "react";
import { useState } from "react";

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

    return (

        <div>Form contatti</div>
    )

}

export default ContactForm;