// Importa la funzione `createContext` dalla libreria React per creare un contesto globale
import { createContext } from "react";

// Importa i tipi `Dispatch` e `SetStateAction` da React per gestire lo stato
import type { Dispatch, SetStateAction } from "react";

// Definisce un'interfaccia TypeScript per descrivere la forma del contesto globale
interface GlobalContextType {

    // La variabile `isDark` è un booleano che rappresenta lo stato del tema (scuro o chiaro)
    isDark: boolean;

    // La funzione `setIsDark` è utilizzata per aggiornare lo stato `isDark`
    setIsDark: Dispatch<SetStateAction<boolean>>;
}

// Imposta i valori iniziali per il contesto, con il tema impostato su chiaro (false) 
// e `setIsDark` come una funzione vuota (funzione segnaposto)
const initialValues: GlobalContextType = {
    isDark: false,  // Tema chiaro come valore predefinito
    setIsDark: () => { }  // Funzione vuota per `setIsDark`, che sarà poi sovrascritta quando il contesto verrà utilizzato
}

// Crea il contesto globale, passando i tipi definiti nell'interfaccia `GlobalContextType`
// e usando i valori iniziali definiti sopra.
const GlobalContext = createContext<GlobalContextType>(initialValues);

// Esporta il contesto in modo che possa essere utilizzato in altre parti dell'applicazione
export default GlobalContext;


{/*
    SetStateAction<T> = rappresenta ciò che posso passare a setState:
    - un valore di tipo T
    - oppure una funzione (prev: T) => T che usa il valore precedente
    Esempio: SetStateAction<boolean> = boolean | ((prev: boolean) => boolean)
    
    Dispatch<A> = rappresenta una funzione che accetta un valore di tipo A
    (quindi è il tipo della funzione che React usa per cambiare lo stato)
    
    Dispatch<SetStateAction<T>> = tipo esatto della funzione setState:
    permette di passare:
    - un valore nuovo (es: true / false)
    - oppure una funzione col valore precedente (es: prev => !prev)
    */
}