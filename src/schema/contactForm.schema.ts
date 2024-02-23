import z, { object, string, TypeOf } from 'zod';

export const contactFormSchema = object({
    name: string().min(1, 'Name is required.'),
    email: string({ required_error: ' Email is required.' }).email({
        message: 'invalid email.',
    }),
    subject: string().min(1, 'Subject is required.'),
    message: string().min(1, 'Message is required.'),
    terms: z.literal<boolean>(true, {
        errorMap: () => ({ message: 'this field is mandatory' }),
    }),
});

export type ContactFormType = TypeOf<typeof contactFormSchema>;
