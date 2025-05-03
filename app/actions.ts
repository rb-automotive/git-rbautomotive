// app/actions.ts
'use server';

import { z } from 'zod';

// Define the schema for form validation using Zod
const ContactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
} | null;

// The Server Action function
export async function submitContactForm(
    prevState: ContactFormState,
    data: FormData,
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = ContactSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data. Please check the fields below.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  // --- Implement your email sending logic here ---
  try {
    console.log("Attempting to send email with data:", parsed.data);
    // Example: Replace with your actual email sending call
    // await sendEmailFunction({
    //   to: 'Rb_automotive@hotmail.com', // Your receiving email
    //   from: 'website@yourdomain.com.au', // A sending email address
    //   reply_to: parsed.data.email, // Set reply-to for convenience
    //   subject: `New Website Contact: ${parsed.data.name}`,
    //   html: `
    //     <h1>New Contact Form Submission</h1>
    //     <p><strong>Name:</strong> ${parsed.data.name}</p>
    //     <p><strong>Email:</strong> ${parsed.data.email}</p>
    //     <p><strong>Phone:</strong> ${parsed.data.phone || 'Not provided'}</p>
    //     <hr>
    //     <p><strong>Message:</strong></p>
    //     <p>${parsed.data.message.replace(/\n/g, '<br>')}</p>
    //   `,
    // });

    console.log("Email sending logic placeholder executed.");
    // If successful:
    return { message: "Thank you for your message! We'll be in touch soon." };

  } catch (error) {
    console.error("Server Action Error (Email Sending):", error);
    return { message: "Sorry, there was an error sending your message. Please try again later or call us directly." };
  }
  // --- End email sending logic ---
}