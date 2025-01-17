import { useState } from "react";

export function useAlert() {
    const [alert, setAlert] = useState({show: false, text: '', type: 'danger'})

    const showAlert = (text: string, type: string ='danger') => {
        setAlert({
            show: true,
            text,
            type,
        })
    };

    const hideAlert = () => {
        setAlert({
            show: false,
            text: '',
            type: 'danger'
        })
    }

    return { alert, showAlert, hideAlert }

}