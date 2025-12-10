import React from "react";
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    object: string;
    message: string;
}

const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        object: "",
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
        <form onSubmit={handleSubmit} className="md:max-w-2xl lg:max-w-3xl mx-auto">

            {/* Container Nome e Cognome */}
            <div className="flex flex-col md:flex-row md:gap-6 lg:gap-4 mb-4">
                {/* Nome */}
                <div className="flex-1">
                    <div className="flex items-center mb-1">
                        <label htmlFor="firstName" className="font-medium">Nome:</label>
                    </div>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Inserisci il tuo nome"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg px-3 py-2  placeholder-gray-500 dark:placeholder-gray-400"
                    />
                </div>

                {/* Cognome */}
                <div className="flex-1">
                    <div className="flex items-center mb-1 mt-4 md:mt-0">
                        <label htmlFor="lastName" className="font-medium">Cognome:</label>
                    </div>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Inserisci il tuo cognome"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg px-3 py-2  placeholder-gray-500 dark:placeholder-gray-400"
                    />
                </div>
            </div>

            {/* Email */}
            <div className="mb-1">
                <label htmlFor="email" className="font-medium">Email:</label>
            </div>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Inserisci la tua email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 mb-4 placeholder-gray-500 dark:placeholder-gray-400"
            />

            {/* Oggetto del messaggio */}
            <div className="mb-1">
                <label htmlFor="object" className="font-medium">Oggetto:</label>
            </div>
            <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Inserisci oggetto del messaggio"
                value={formData.object}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 mb-4  placeholder-gray-500 dark:placeholder-gray-400"
            />

            {/* Messaggio */}
            <div className="mb-1">
                <label htmlFor="textarea" className="font-medium">Messaggio:</label>
            </div>
            <textarea
                id="message"
                name="message"
                placeholder="Scrivi qui il tuo messaggio..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 h-32 placeholder-gray-500 dark:placeholder-gray-400"
            ></textarea>

        </form>
    )

}

export default ContactForm;

// ---------------------------------------------------------
// Appunti su FormEvent e ChangeEvent in React + TypeScript
// ---------------------------------------------------------

{/*
  FormEvent:
  - Rappresenta l'evento che si genera quando un form viene inviato.
  - Si usa principalmente nella funzione handleSubmit.
  - Permette di accedere a e.preventDefault() per evitare il comportamento di default del browser (come il reload della pagina),
    ai dati del form e al target del form stesso.
  - È utile per gestire l'invio dei dati in modo controllato con React.
  - Esempio:
      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // gestisci i dati del form qui
      }
*/}

{/*
  ChangeEvent:
  - Rappresenta l'evento che si genera quando un input, textarea o select cambia valore.
  - Si usa nelle funzioni handleChange per aggiornare lo stato o reagire alle modifiche dell'utente.
  - È un tipo generico: ChangeEvent<HTMLInputElement>, ChangeEvent<HTMLTextAreaElement>, ChangeEvent<HTMLSelectElement>, ecc.
  - Permette di leggere il valore corrente del campo tramite e.target.value.
  - Esempio:
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNome(e.target.value);
      }
*/}