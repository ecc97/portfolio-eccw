import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema"; 
import { Resend } from "resend";
import { RESEND_API_KEY } from "astro:env/client";

const resend = new Resend(String(RESEND_API_KEY));

export const server = {
  send: defineAction({
    accept: "json",
    input: z.object({
      name: z.string().min(2),
      email: z.string().email(),
      message: z.string().min(5),
    }),
    handler: async ({ name, email, message }) => {
      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["edwindev20@gmail.com"],
        subject: `Nuevo mensaje de contacto: ${name}`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};
