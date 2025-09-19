import React from 'react'
import { CheckIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Switch } from './ui/switch'
import { Label } from './ui/label'
import { useState } from 'react'
import { cn } from '~/lib/utils'
import { Badge } from './ui/badge'

const Pricing = () => {
    const [checked, setChecked] = useState(false)

    // Yeni fiyatlar burada tanımlanıyor
    const accelerateMonthly = 1160
    const accelerateAnnual = accelerateMonthly * 8
    const apexMonthly = 2760
    const apexAnnual = apexMonthly * 8

    return (
        <section className='mx-auto mb-8 mt-48 px-5 dark:bg-[radial-gradient(ellipse_40%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]'>
            <div className='mx-auto mb-16 h-[1px] w-full max-w-2xl bg-gradient-to-r from-transparent via-primary to-transparent'></div>
            <div className='mx-auto flex max-w-7xl flex-col gap-6 text-center'>
                <div>
                    <span className='rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25'>
                        <span className='brightness-[1.7]'>
                            Zirveye Giden Yatırım
                        </span>
                    </span>
                    <h1 className='mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Zirve Yolculuğunuz{' '}
                        </span>
                        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
                            Burada Başlıyor
                        </span>
                    </h1>
                </div>
                <p className='text-lg text-muted-foreground'>
                    Her ölçekteki lider için tasarlanmış, büyümenize uyum sağlayan esnek ve güçlü planlar.
                </p>
                <div className='mt-20 flex items-center justify-center space-x-2'>
                    <Label
                        htmlFor='price-toggle'
                        className={cn(checked && 'text-muted-foreground')}
                    >
                        Aylık
                    </Label>
                    <Switch
                        id='price-toggle'
                        defaultChecked={false}
                        checked={checked}
                        onCheckedChange={() => setChecked(!checked)}
                        className='data-[state=unchecked]:bg-primary'
                        aria-label='fiyatlandırma geçişi'
                    />
                    <Label
                        htmlFor='price-toggle'
                        className={cn(!checked && 'text-muted-foreground')}
                    >
                        Yıllık (Sadece 8 Ay Fiyatı Ödeyin!)
                    </Label>
                </div>
                <div className='mt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-around lg:px-6'>
                    
                    {/* --- PLAN 1: LAUNCH --- */}
                    <div className='gradient-border relative w-full max-w-sm flex-grow basis-0 rounded-md bg-gradient-to-bl from-primary/10 via-transparent to-transparent p-8 text-left before:bg-gradient-to-bl before:from-primary/30 before:to-primary/5 lg:max-w-none'>
                        <div className='flex flex-col gap-3 text-left'>
                            <p className='text-xl font-semibold'>LAUNCH</p>
                            <div className='flex items-start gap-2'>
                                <span className='text-2xl text-muted-foreground'>
                                    ₺
                                </span>
                                <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-medium text-transparent'>
                                    0
                                </span>
                            </div>
                            <p className='text-muted-foreground'>
                                Zirveye ilk adımı atan ekipler ve girişimler için.
                            </p>
                        </div>
                        <ul className='mt-8 flex flex-col gap-4'>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>**5 Kullanıcı**ya Kadar</span></li>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>Proje ve Görev Yönetimi</span></li>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>**Temel** İş Akışı Otomasyonu (5 kural)</span></li>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>Performans Gösterge Paneli</span></li>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>50 GB Güvenli Bulut Depolama</span></li>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>Topluluk ve E-posta Desteği</span></li>
                        </ul>
                        <Button className='mt-8 w-full' variant={'outline'}>
                            Yolculuğa Başla
                        </Button>
                    </div>

                    {/* --- PLAN 2: ACCELERATE --- */}
                    <div className='gradient-border relative w-full max-w-sm flex-grow basis-0 rounded-md bg-gradient-to-b from-primary/10 via-transparent to-transparent p-8 before:bg-gradient-to-b before:from-primary before:to-primary/10 lg:max-w-none'>
                        <div className='flex flex-col gap-3 text-left'>
                            <div className='flex items-center gap-2'>
                                <p className='text-xl font-semibold'>ACCELERATE</p>
                                <Badge>EN POPÜLER</Badge>
                            </div>
                            <div className='flex items-start gap-2'>
                                <span className='text-2xl text-muted-foreground'>
                                    ₺
                                </span>
                                <span className='flex items-center gap-2 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-medium text-transparent'>
                                    {checked ? accelerateAnnual.toLocaleString('tr-TR') : accelerateMonthly.toLocaleString('tr-TR')}
                                </span>
                            </div>
                            <p className='text-muted-foreground'>
                                Pazarında ivme kazanmak ve rekabette öne geçmek için.
                            </p>
                        </div>
                        <ul className='mt-8 flex flex-col gap-4 text-left'>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>**50 Kullanıcı**ya Kadar</span></li>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>**Gelişmiş** İş Akışı Otomasyonu (Sınırsız)</span></li>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>Detaylı Analiz ve Raporlama</span></li>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>Tüm 3. Parti Entegrasyonlar</span></li>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>500 GB Güvenli Bulut Depolama</span></li>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>Öncelikli E-posta ve Canlı Destek</span></li>
                        </ul>
                        <Button className='mt-8 w-full'>Planı Seç</Button>
                    </div>

                    {/* --- PLAN 3: APEX --- */}
                    <div className='gradient-border relative max-w-sm flex-grow basis-0 rounded-md bg-gradient-to-br from-primary/10 via-transparent to-transparent p-8 before:bg-gradient-to-br before:from-primary/30 before:to-primary/5 lg:max-w-none'>
                        <div className='flex flex-col gap-3 text-left'>
                            <p className='text-xl font-semibold'>APEX</p>
                            <div className='flex items-start gap-2'>
                                 <span className='text-2xl text-muted-foreground'>
                                    ₺
                                </span>
                                <span className='flex items-center gap-2 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-medium text-transparent'>
                                    {checked ? apexAnnual.toLocaleString('tr-TR') : apexMonthly.toLocaleString('tr-TR')}
                                </span>
                            </div>
                            <p className='text-muted-foreground'>
                                Sektör standardını belirlemek ve pazar lideri olmak için.
                            </p>
                        </div>
                        <ul className='mt-8 flex flex-col gap-4 text-left'>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>**Sınırsız Kullanıcı**</span></li>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>**Yapay Zeka** Destekli Öngörüsel Analiz</span></li>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>Özelleştirilebilir API Erişimi</span></li>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>Kurumsal Düzeyde Güvenlik (SSO)</span></li>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>Size Özel Stratejik Ortak</span></li>
                            <li className='flex gap-2'><CheckIcon className='mt-0.5 h-5 w-5 shrink-0 text-primary' /><span>7/24 Kapsamlı Destek Hattı</span></li>
                        </ul>
                        <Button className='mt-8 w-full' variant={'outline'}>
                            Özel Teklif Alın
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing