// components/ContactForm.tsx
'use client';

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm, type ContactFormState } from '@/app/actions';

// Re-define schema here or import if shared carefully
const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof ContactSchema>;

// Separate Submit Button component to use useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      // Example styling - use your btn-primary or similar
      className={`btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed ${pending ? 'animate-pulse' : ''}`}
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

const ContactForm = () => {
  const initialState: ContactFormState = null;
  const [state, formAction] = useFormState(submitContactForm, initialState);

  // FIX: Removed handleSubmit from destructuring
  const { register, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
        name: state?.fields?.name ?? '',
        email: state?.fields?.email ?? '',
        phone: state?.fields?.phone ?? '',
        message: state?.fields?.message ?? '',
    }
  });

  return (
    <form action={formAction} className="space-y-4">
       {/* Display Server Action messages */}
       {state?.message && !state.issues && (
        <div className={`p-3 rounded-md text-sm ${state.message.includes('Thank you') ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
            {state.message}
        </div>
       )}
       {state?.issues && (
         <div className="p-3 rounded-md text-sm bg-red-100 text-red-800 border border-red-200">
            <p className="font-medium mb-1">Please fix the following issues:</p>
            <ul className="list-disc list-inside">
                {state.issues.map((issue, i) => <li key={i}>{issue}</li>)}
            </ul>
         </div>
       )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          aria-invalid={errors.name ? "true" : "false"} // Accessibility improvement
        />
        {errors.name && <p role="alert" className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>
       <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
           aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p role="alert" className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>
        <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-xs text-gray-500">(Optional)</span></label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
           aria-invalid={errors.phone ? "true" : "false"}
        />
        {errors.phone && <p role="alert" className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
           aria-invalid={errors.message ? "true" : "false"}
        ></textarea>
        {errors.message && <p role="alert" className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>
      <SubmitButton />
    </form>
  );
};

export default ContactForm;