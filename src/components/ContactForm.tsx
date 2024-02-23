'use client';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    ContactFormType,
    contactFormSchema,
} from '@/schema/contactForm.schema';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from './ui/checkbox';
export default function ContactForm() {
    const formHandler = useForm<ContactFormType>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    });
    const {
        formState: { isSubmitting },
    } = formHandler;
    const sendContactMessage = (formValues: ContactFormType) => {
        console.log(
            '🚀 ~ sendContactMessage ~ formHandler.formState:',
            formHandler.formState
        );
        setTimeout(() => {
            toast.success('message sent!', {});
            formHandler.reset();
        }, 2000);
    };

    return (
        <Form {...formHandler}>
            <form
                onSubmit={formHandler.handleSubmit(sendContactMessage)}
                className='md:w-[80%] mx-auto mt-8 grid gap-y-8 bg-white   bg-opacity-5 p-4 rounded-md'
            >
                <h1 className='text-xl font-semibold text-center'>
                    To concat our team please fill in the form below.
                </h1>
                <FormField
                    control={formHandler.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='name'
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formHandler.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='Email'
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formHandler.control}
                    name='subject'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='subject'
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formHandler.control}
                    name='message'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder='write your message here...'
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={formHandler.control}
                    name='terms'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Checkbox
                                    id='terms'
                                    className='border-white'
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormLabel className='ml-2'>
                                Accept terms and conditions
                            </FormLabel>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button variant={'unique'}>
                    {isSubmitting ? (
                        <Loader2 className='animate-spin' />
                    ) : (
                        'Submit'
                    )}
                </Button>
            </form>
        </Form>
    );
}
