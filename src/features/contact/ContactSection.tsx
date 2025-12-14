'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Mail, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { PROFILE } from '@/constants/data';

const contactSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상이어야 합니다.'),
  email: z.string().email('올바른 이메일 주소를 입력해주세요.'),
  message: z.string().min(10, '메시지는 10자 이상이어야 합니다.'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
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
    // 실제 구현 시 여기에 이메일 전송 로직 추가
    console.log('Form data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id='contact' className='py-20 sm:py-32'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
            Contact
          </h2>
          <div className='w-20 h-1 bg-primary mx-auto rounded-full' />
          <p className='mt-4 text-muted-foreground max-w-2xl mx-auto'>
            프로젝트 협업이나 문의사항이 있으시면 언제든지 연락해주세요.
          </p>
        </motion.div>

        <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-8'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <Card>
              <CardContent className='p-6'>
                <div className='flex items-center gap-4'>
                  <div className='p-3 rounded-full bg-primary/10'>
                    <Mail className='h-5 w-5 text-primary' />
                  </div>
                  <div>
                    <p className='text-sm text-muted-foreground'>Email</p>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className='font-medium text-foreground hover:text-primary transition-colors'
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <div className='flex items-center gap-4'>
                  <div className='p-3 rounded-full bg-primary/10'>
                    <MapPin className='h-5 w-5 text-primary' />
                  </div>
                  <div>
                    <p className='text-sm text-muted-foreground'>Location</p>
                    <p className='font-medium text-foreground'>
                      {PROFILE.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className='p-6'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                  <div>
                    <Input
                      placeholder='이름'
                      {...register('name')}
                      className={errors.name ? 'border-destructive' : ''}
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
                      placeholder='이메일'
                      {...register('email')}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && (
                      <p className='text-sm text-destructive mt-1'>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      placeholder='메시지'
                      rows={5}
                      {...register('message')}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && (
                      <p className='text-sm text-destructive mt-1'>
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type='submit'
                    className='w-full'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className='h-4 w-4 mr-2 animate-spin' />
                        전송 중...
                      </>
                    ) : isSubmitted ? (
                      '전송 완료!'
                    ) : (
                      <>
                        <Send className='h-4 w-4 mr-2' />
                        메시지 보내기
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
