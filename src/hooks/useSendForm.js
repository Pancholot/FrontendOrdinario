import {useState} from 'react';
import { sendForm } from '../api/controllerApi';

const useSendForm = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    
    const handleSendForm = async (form) => {
        setLoading(true);
        setError(null);
        setSuccess(null);
    
        try {
          const response = await sendForm(form);
          setSuccess(response.message);
          return response;
        } catch (err) {
          setError(err.response?.data?.error || "Error al enviar el formulario");
        } finally {
          setLoading(false);
        }
      };
  return (
    {handleSendForm, loading, error, success}
  )
}

export default useSendForm