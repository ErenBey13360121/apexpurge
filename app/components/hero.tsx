/* ============================================================================
 * 📁 File: Hero.tsx
 * ────────────────────────────────────────────────────────────────────────────
 * React bileşeni: <Hero />
 *
 * Açıklama
 * ---------
 * • Tanıtım (landing) sayfasının kahraman (hero) bölümünü oluşturur.
 * • Dinamik tema renklerine (light/dark & 11+ tema) uygun olarak tipografi,
 * ikon ve gradient geçişlerini yönetir.
 * • Formspree entegrasyonu ile "wait-list" e-posta toplar.
 * • Framer-motion kullanarak giriş animasyonları uygular.
 *
 * Kullanım Alanları
 * -----------------
 * • Ürün / Apex açılış sayfaları
 * • Erken erişim veya pre-launch kampanyaları
 * • Tema değiştirilebilir responsive arayüzler
 * -------------------------------------------------------------------------- */

/* ────────────────────────  1. DIŞ BAĞIMLILIKLAR  ─────────────────────────── */
import React from 'react'
import { useForm } from '@formspree/react' // 📧 Form yönetimi
import { motion } from 'framer-motion' // 🎬 Animasyonlar
import { Loader2Icon, MoveRightIcon } from 'lucide-react' // 🖼  İkon seti

/* ────────────────────────  2. İÇ BAĞIMLILIKLAR  ──────────────────────────── */
import { cn } from '~/lib/utils' // 🔧 className birleştirici
import { Button } from './ui/button' // 🔘 Buton bileşeni
import { Input } from './ui/input' // 🔤 Input bileşeni
import { Label } from './ui/label' // 🏷  Label bileşeni
import useTheme from '~/hooks/use-theme' // 🎨 Aktif tema
import Flower from './icons/flower' // 🌸
import Swirl from './icons/swirl' // 🌀
import Fire from './icons/fire' // 🔥
import Lightning from './icons/lightning' // ⚡
import Anchor from './icons/anchor' // ⚓

/* ───────────────────────  3. ANA BİLEŞEN  ────────────────────────────────── */
const Hero = () => {
  /* --------------------------------------------------------------------- */
  /* 🎛️   Hook'lar                                                          */
  /* --------------------------------------------------------------------- */
  const [state, handleSubmit] = useForm('mjvqrzpz') // Formspree form state
  const [theme] = useTheme() // Aktif renk teması

  /* --------------------------------------------------------------------- */
  /* 🖼️   Render                                                            */
  /* --------------------------------------------------------------------- */
  return (
    <main
      className='mx-auto my-10 flex min-h-[calc(100vh-73px)] max-w-2xl flex-col justify-center gap-6 px-5 text-center lg:my-0'
    >
      {/* --------------------------------------------------------------
       * 1) Başlık
       * ------------------------------------------------------------ */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl'
        )}
      >
        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
          Devrim
        </span>{' '}
        <span className='bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent'>
          Yaratın{' '}
        </span>
        <span
          className={cn(
            'relative bg-gradient-to-r from-primary bg-clip-text text-5xl font-extrabold text-transparent lg:text-8xl',
            theme === 'orange' && 'to-rose-600',
            theme === 'blue' && 'to-purple-600',
            theme === 'green' && 'to-emerald-600',
            theme === 'red' && 'to-rose-600',
            theme === 'yellow' && 'to-yellow-600',
            theme === 'violet' && 'to-violet-600',
            theme === 'gray' && 'to-gray-600',
            theme === 'neutral' && 'to-neutral-600',
            theme === 'slate' && 'to-slate-600',
            theme === 'stone' && 'to-stone-600',
            theme === 'zinc' && 'to-zinc-600',
            theme === 'rose' && 'to-pink-600'
          )}
        >
          APEX.
        </span>
      </motion.h1>

      {/* --------------------------------------------------------------
       * 2) Açıklama Paragrafı (GÜNCELLENDİ)
       * ------------------------------------------------------------ */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className='text-base text-muted-foreground lg:text-lg'
      >
        Zirveyi hedefleyenler için tasarlandı.{' '}
        <span className='text-primary'>
          Apex ile zirve bir hedef değil, yeni standardınızdır.
        </span>
      </motion.p>

      {/* --------------------------------------------------------------
       * 3) Bekleme Listesi Formu
       * ------------------------------------------------------------ */}
      <motion.form
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        onSubmit={handleSubmit}
        className='mx-auto mt-8 flex w-full max-w-sm flex-col items-end space-y-2'
      >
        {/* Email input */}
        <div className='flex w-full max-w-sm flex-col items-start gap-1.5'>
          <Label
            className='text-left text-muted-foreground'
            htmlFor='email'
          >
            Geleceği ilk deneyimleyenlerden olun.
          </Label>
          <Input
            required
            type='email'
            id='email'
            placeholder='eren.akdeniz@icloud.com'
            name='email'
          />
        </div>

        {/* Submit / State yönetimi */}
        {!state.succeeded && (
          <Button
            className={cn(
              'flex w-full justify-between',
              state.submitting && 'justify-center'
            )}
            type='submit'
            disabled={state.submitting}
          >
            {state.submitting && (
              <Loader2Icon className='mr-2 h-4 w-4 animate-spin' />
            )}
            {state.submitting && 'Yerinizi Ayırıyoruz...'}
            {!state.submitting && 'Yerini Al'}
            {!state.submitting && (
              <MoveRightIcon className='h-4 w-4' />
            )}
          </Button>
        )}

        {/* Başarılı kayıt mesajı */}
        {state.succeeded && (
          <Button
            variant='secondary'
            className='pointer-events-none w-full'
          >
            Tebrikler, zirveye bir adım daha yakınsınız! 🚀
          </Button>
        )}

        {/* Alt bilgilendirme metni */}
        {!state.succeeded && (
          <p className='w-full text-center text-sm text-muted-foreground'>
            200+ lider arasına adınızı yazdırın.
          </p>
        )}
        {state.succeeded && (
          <p className='w-full text-center text-sm text-muted-foreground'>
            Zirveye hoş geldiniz. Sizinle yakında iletişime geçeceğiz.
          </p>
        )}
      </motion.form>

      {/* --------------------------------------------------------------
       * 4) Tema Bazlı Dekoratif İkon / Çizgi
       * ------------------------------------------------------------ */}
      {theme !== 'rose' &&
        theme !== 'green' &&
        theme !== 'orange' &&
        theme !== 'blue' &&
        theme !== 'yellow' && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
            className='mx-auto h-56 w-[1px] rounded-full bg-gradient-to-b from-transparent to-primary'
          />
        )}

      {/* Tema ikonları... */}
      {theme === 'rose' && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          className='mx-auto'
        >
          <Flower
            className='h-56 rotate-180'
            linearFrom='text-primary'
            linearTo='text-primary/10'
          />
        </motion.span>
      )}
      {theme === 'green' && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          className='mx-auto'
        >
          <Swirl
            className='h-56'
            linearFrom='text-primary/10'
            linearTo='text-primary'
          />
        </motion.span>
      )}
      {theme === 'orange' && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          className='mx-auto'
        >
          <Fire
            className='h-56'
            linearFrom='text-primary/10'
            linearTo='text-primary'
          />
        </motion.span>
      )}
      {theme === 'yellow' && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          className='mx-auto'
        >
          <Lightning
            className='h-56'
            linearFrom='text-primary/10'
            linearTo='text-primary'
          />
        </motion.span>
      )}
      {theme === 'blue' && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          className='mx-auto'
        >
          <Anchor
            className='h-56'
            linearFrom='text-primary/10'
            linearTo='text-primary'
          />
        </motion.span>
      )}
    </main>
  )
}

/* ───────────────────────  5. DIŞA AKTARIM  ───────────────────────────────── */
export default Hero