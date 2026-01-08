import React from "react";
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {

    // Inizializzazione Formspree con Form ID personale
    const [state, handleSubmit] = useForm("xdkqpakp");

    return (

        <div className="relative md:max-w-2xl lg:max-w-3xl mx-auto mb-15">
            {/* SUCCESS OVERLAY */}
            {state.succeeded && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-sm w-full text-center shadow-xl animate-fadeIn">

                        <h2 className="text-2xl font-semibold text-green-800 dark:text-green-400 mb-3">
                            Messaggio inviato!
                        </h2>

                        <p className="text-gray-800 dark:text-gray-200 mb-6">
                            Grazie per avermi scritto 🌸
                            <br />
                            Ti risponderò il prima possibile.
                        </p>

                        <button
                            onClick={() => window.location.reload()}
                            className="bg-rose-400 dark:bg-rose-700 text-white font-semibold px-6 py-2 rounded-full w-full transition
                            focus:outline-none focus:border-rose-400">
                            Chiudi
                        </button>
                    </div>
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className="md:max-w-2xl lg:max-w-3xl mx-auto mb-15 border border-gray-300 dark:border-gray-900 rounded-xl p-6"
            >
                {/* Nome */}
                <div className="mb-4">
                    <div className="mb-1">
                        <label
                            htmlFor="firstName"
                            className="font-medium"
                        >
                            Nome:
                        </label>
                    </div>

                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Inserisci il tuo nome"
                        required
                        className="w-full border border-gray-400 dark:border-gray-800 rounded-lg px-3 py-2 placeholder-gray-500 dark:placeholder-gray-400
                        focus:outline-none focus:border-rose-400"
                    />
                    <ValidationError prefix="Nome" field="firstName" errors={state.errors} />
                </div>

                {/* Cognome */}
                <div className="mb-4">
                    <div className="mb-1">
                        <label
                            htmlFor="lastName"
                            className="font-medium"
                        >
                            Cognome:
                        </label>
                    </div>

                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Inserisci il tuo cognome"
                        required
                        className="w-full border border-gray-400 dark:border-gray-800 rounded-lg px-3 py-2 placeholder-gray-500 dark:placeholder-gray-400
                        focus:outline-none focus:border-rose-400"
                    />
                    <ValidationError prefix="Cognome" field="lastName" errors={state.errors} />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <div className="mb-1">
                        <label
                            htmlFor="email"
                            className="font-medium"
                        >
                            Email:
                        </label>
                    </div>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Inserisci la tua email"
                        required
                        className="w-full border border-gray-400 dark:border-gray-800 rounded-lg px-3 py-2 placeholder-gray-500 dark:placeholder-gray-400
                        focus:outline-none focus:border-rose-400"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Oggetto */}
                <div className="mb-4">
                    <div className="mb-1">
                        <label
                            htmlFor="object"
                            className="font-medium"
                        >
                            Oggetto:
                        </label>
                    </div>

                    <input
                        type="text"
                        id="object"
                        name="object"
                        placeholder="Inserisci oggetto del messaggio"
                        required
                        className="w-full border border-gray-400 dark:border-gray-800 rounded-lg px-3 py-2 placeholder-gray-500 dark:placeholder-gray-400
                        focus:outline-none focus:border-rose-400"
                    />
                    <ValidationError prefix="Oggetto" field="object" errors={state.errors} />
                </div>

                {/* Messaggio */}
                <div className="mb-4">
                    <div className="mb-1">
                        <label
                            htmlFor="message"
                            className="font-medium"
                        >
                            Messaggio:
                        </label>
                    </div>

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Scrivi qui il tuo messaggio..."
                        required
                        className="w-full border border-gray-400 dark:border-gray-800 rounded-lg px-3 py-2 h-32 placeholder-gray-500 dark:placeholder-gray-400
                        focus:outline-none focus:border-rose-400"
                    />
                    <ValidationError prefix="Messaggio" field="message" errors={state.errors} />
                </div>

                <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-block mt-4 bg-rose-400 dark:bg-rose-700 text-white px-8 py-2 font-semibold 
                    rounded-full shadow-md transition cursor-pointer w-full text-center"
                >
                    {state.submitting ? "Invio..." : "Invia messaggio"}
                </button>
            </form>

        </div>
    );
}

export default ContactForm;