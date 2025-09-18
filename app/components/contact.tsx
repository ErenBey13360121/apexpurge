import React from 'react'
import { LinkedinIcon, Loader2Icon, TwitterIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
// import Discord from './icons/discord'
// import Whatsapp from './icons/Whatsapp.tsx'; // Hata veren import satırı yorum satırına alındı.
import { useForm } from '@formspree/react'

const Contact = () => {
    const [state, handleSubmit] = useForm('xpzgladz')
    return (
        <section className='mx-auto mt-48 flex max-w-7xl flex-col items-center gap-20 px-5 lg:flex-row'>
            <div className='mx-auto flex max-w-2xl flex-grow basis-0 flex-col gap-6'>
                <div>
                    <h1 className='mt-4 scroll-m-20 text-center font-inter text-4xl font-extrabold tracking-tight lg:text-left lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            İletişime{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Geçin
                        </span>
                    </h1>
                </div>
                <p className='text-center text-lg text-muted-foreground lg:text-left'>
                    <span className='hidden lg:block text-base leading-relaxed'>
                        Herhangi bir sorunuz, öneriniz varsa ya da<br />
                        olası iş birliklerini konuşmak istiyorsanız,<br />
                        lütfen çekinmeden iletişime geçin.<br />
                        <br />
                        Sizinle tanışmak ve fikirlerinizi duymak<br />
                        beni çok mutlu eder!
                    </span>

                    <span className='block lg:hidden text-base font-medium text-center px-4'>
                        Sorularınız mı var? Fikirleriniz mi? İş birliği mi?<br />
                        Ulaşın — dikkatle dinliyorum!
                    </span>
                </p>
                <div className='flex justify-center lg:justify-start'>
                    <div className='flex flex-col gap-4 lg:items-start'>
                        {/* 
                        <a
                            href='https://twitter.com/NaderFerjani  '
                            className='inline-flex gap-2'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <TwitterIcon className='h-6 w-6 text-primary' />
                            <span>Nader Ferjani</span>
                        </a>
                        <a
                            href='https://www.linkedin.com/in/nader-ferjani/  '
                            className='flex items-center gap-2'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <LinkedinIcon className='h-6 w-6 text-primary' />
                            <span>Eren Akdeniz</span>
                        </a>
                        */}
                        
                        {/* Whatsapp ikonu ve linki yorum satırına alındı.
                        <a
                            href='https://wa.me/905437878579'
                            className='flex items-center gap-2'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Whatsapp className='h-6 w-6 fill-primary' />
                            <span>0 543 787 85 79</span>
                        </a>
                        */}
                    </div>
                </div>
            </div>
            <form
                onSubmit={handleSubmit}
                className='gradient-border relative flex w-full max-w-xl flex-grow basis-0 flex-col gap-4 rounded-md bg-gradient-to-br from-white/5 to-transparent p-6 before:bg-gradient-to-br before:from-white/5 before:to-transparent'
            >
                <div className='flex w-full flex-col gap-1.5'>
                    <Label
                        className='text-left text-muted-foreground'
                        htmlFor='name'
                    >
                        Adınız ve Soyadınız
                    </Label>
                    <Input
                        required
                        type='text'
                        id='name'
                        placeholder='Adınız ve Soyadınız'
                        name='fullname'
                        className='w-full'
                    />
                </div>
                <div className='flex w-full flex-col gap-1.5'>
                    <Label
                        className='text-left text-muted-foreground'
                        htmlFor='contact-email'
                    >
                        E-posta Adresiniz
                    </Label>
                    <Input
                        required
                        type='email'
                        placeholder='ornek@eposta.com'
                        name='contact-email'
                        id='contact-email'
                        className='w-full'
                    />
                </div>
                <div className='grid w-full gap-1.5'>
                    <Label
                        htmlFor='message'
                        className='text-left text-muted-foreground'
                    >
                        Mesajınız
                    </Label>
                    <Textarea
                        required
                        placeholder='Lütfen mesajınızı buraya yazınız...'
                        id='message'
                        name='message'
                        rows={5}
                    />
                </div>
                {!state.succeeded && (
                    <Button variant={'secondary'} disabled={state.submitting}>
                        {state.submitting && (
                            <Loader2Icon className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        {state.submitting ? 'Gönderiliyor' : 'Mesajı Gönder'}
                    </Button>
                )}
                {state.succeeded && (
                    <Button
                        variant={'secondary'}
                        className='pointer-events-none'
                    >
                        Mesajınız gönderildi!
                    </Button>
                )}
            </form>
        </section>
    )
}

export default Contact