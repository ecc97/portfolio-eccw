import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from 'astro:env/client';

interface EmailFormData {
  name: string;
  email: string;
  message: string;
}

export const useEmailJS = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (formData: EmailFormData) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        String(EMAILJS_SERVICE_ID),
        String(EMAILJS_TEMPLATE_ID),
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        String(EMAILJS_PUBLIC_KEY)
      );
      return { success: true };
    } catch (error) {
      console.error('EmailJS Error:', error);
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { sendEmail, isSubmitting };
};
