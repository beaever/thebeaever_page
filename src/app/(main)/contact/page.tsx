'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PROFILE, SOCIAL_LINKS } from '@/constants/data';

const contactSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상이어야 합니다.'),
  email: z.string().email('올바른 이메일 주소를 입력해주세요.'),
  message: z.string().min(10, '메시지는 10자 이상이어야 합니다.'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    console.log('Form data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className='min-h-screen p-8 lg:p-16'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='max-w-xl'
      >
        <motion.h1
          variants={itemVariants}
          className='text-3xl font-medium mb-12'
        >
          Contact
        </motion.h1>

        <motion.section variants={itemVariants} className='mb-12'>
          <h2 className='text-sm text-muted-foreground mb-4'>Email</h2>
          <a
            href={`mailto:${PROFILE.email}`}
            className='text-base hover:text-primary transition-colors inline-flex items-center gap-2'
          >
            {PROFILE.email}
            <ArrowUpRight className='w-4 h-4' />
          </a>
        </motion.section>

        <motion.section variants={itemVariants} className='mb-12'>
          <h2 className='text-sm text-muted-foreground mb-4'>Social</h2>
          <div className='space-y-2'>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-base hover:text-primary transition-colors flex items-center gap-2'
              >
                {link.name}
                <ArrowUpRight className='w-4 h-4' />
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className='text-sm text-muted-foreground mb-4'>Send a message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div>
              <Input
                placeholder='Name'
                {...register('name')}
                className={`bg-transparent ${
                  errors.name ? 'border-destructive' : ''
                }`}
              />
              {errors.name && (
                <p className='text-sm text-destructive mt-1'>
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Input
                type='email'
                placeholder='Email'
                {...register('email')}
                className={`bg-transparent ${
                  errors.email ? 'border-destructive' : ''
                }`}
              />
              {errors.email && (
                <p className='text-sm text-destructive mt-1'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Textarea
                placeholder='Message'
                rows={5}
                {...register('message')}
                className={`bg-transparent ${
                  errors.message ? 'border-destructive' : ''
                }`}
              />
              {errors.message && (
                <p className='text-sm text-destructive mt-1'>
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type='submit'
              variant='outline'
              disabled={isSubmitting}
              className='w-full'
            >
              {isSubmitting ? (
                <>
                  <Loader2 className='h-4 w-4 mr-2 animate-spin' />
                  Sending...
                </>
              ) : isSubmitted ? (
                'Sent!'
              ) : (
                <>
                  <Send className='h-4 w-4 mr-2' />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </motion.section>
      </motion.div>
    </div>
  );
}
