import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '~/components/ui/accordion'
  import ChatMessage from './icons/chat-message'
  import DotPattern from './dot-pattern'
  import { cn } from '~/lib/utils'
  import { buttonVariants } from './ui/button'
  
  // --- MARKA KİMLİĞİYLE UYUMLU, GÜNCELLENMİŞ SSS VERİLERİ ---
  const faqs = [
    {
      question: 'Apex, mevcut teknoloji ekosistemime nasıl uyum sağlar?',
      answer:
        'Kusursuz entegrasyon, felsefemizin bir parçasıdır. Apex, 10’dan fazla popüler CMS ve sık kullandığınız diğer üçüncü parti araçlarla tam uyumlu çalışarak gücünüze güç katar.',
    },
    {
      question: 'Fiyatlandırmanız ne kadar şeffaf? Gizli maliyetler var mı?',
      answer:
        'Şeffaflık, yeni standardımızdır. Planlarımızda sürpriz maliyetler bulunmaz; tüm temel özellikler ve standart destek fiyata dahildir. Zirve yolculuğunuzu daha da hızlandıracak premium paketler isteğe bağlı olarak sunulur.',
    },
    {
      question: 'Apex, işletmemin büyüme hızına ayak uydurabilir mi?',
      answer:
        'Kesinlikle. Apex, sizinle birlikte ölçeklenmek üzere tasarlandı. Büyüme hedeflerinize ve operasyonel ihtiyaçlarınıza en uygun plana dilediğiniz zaman esnek bir şekilde geçiş yapabilirsiniz. Sizin zirveniz, bizim rotamızdır.',
    },
    {
      question: 'Apex’in gücünü taahhüt vermeden önce test edebilir miyim?',
      answer:
      'Elbette. Zirvenin nasıl bir his olduğunu kendiniz deneyimleyin diye ücretsiz bir deneme süresi sunuyoruz. Abonelik taahhüdü olmadan Apex’in tüm potansiyelini ve rekabet avantajını keşfedin.',
    },
  ]
  
  const FAQs = () => {
    return (
      <section className='relative mx-auto px-5 pb-8 pt-48'>
        <div className='mx-auto flex max-w-7xl flex-col gap-6 text-center'>
          <div>
            {/* --- BAŞLIK ETİKETİ GÜNCELLENDİ --- */}
            <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25'>
              <span className='brightness-[1.7]'>Net Yanıtlar</span>
            </span>
            {/* --- ANA BAŞLIK DEĞİŞMEDİ (SEO VE ANLAŞILIRLIK İÇİN) --- */}
            <h1 className='mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
              <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                Sıkça{' '}
              </span>
              <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                Sorulan{' '}
              </span>
              <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                Sorular
              </span>
            </h1>
          </div>
          {/* --- ALT METİN VE LİNK GÜNCELLENDİ --- */}
          <p className='text-lg text-muted-foreground'>
            Aklınızda başka bir soru mu var?{' '}
            <a
              href='#name' // İletişim bölümünüzün ID'si ile değiştirebilirsiniz
              className={cn(
                buttonVariants({ variant: 'link' }),
                'px-0 text-lg text-foreground'
              )}
            >
              BANA ULAŞIN.
            </a>
          </p>
          <div className='mt-20 flex items-center justify-between'>
            <DotPattern
              width={20}
              height={20}
              cx={1}
              cy={1}
              cr={1}
              className={cn(
                'fill-primary/40 [mask-image:linear-gradient(to_bottom,transparent,white,white,transparent,transparent)]'
              )}
            />
            <Accordion
              collapsible
              type='single'
              className='mx-auto w-full max-w-4xl grow basis-28 text-left'
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className='text-left text-xl hover:no-underline'>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className='text-base text-muted-foreground'>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
  
  export default FAQs