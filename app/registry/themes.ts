typescriptDownloadCopy code Wrap/**
 * @file theme.ts
 * @module Themes
 *
 * @description
 *   Bu dosya, uygulamanın tüm renk temalarını HSL formatında tanımlar.
 *   Her tema; light/dark modlar için CSS değişkenleri, etiket( label ) ve
 *   aktif vurgulu renk( activeColor ) değerlerini içerir.
 *
 * @remarks
 *   • Renkler HSL formatında (Hue Saturation Lightness) belirtilmiştir.
 *   • Tüm temalar `as const` ile readonly olarak işaretlenmiştir.
 *   • Tema isimleri `ThemeName`, tema objeleri `Theme` tipleri ile kullanılır.
 *
 * @example
 *   import { themes, ThemeName } from './theme';
 *   const currentTheme: ThemeName = 'zinc';
 *   const vars = themes.find(t => t.name === currentTheme)?.cssVars.light;
 */

/** ---------------------------------------------------------------------------
 * 📦 Tema Konfigürasyonları
 * ------------------------------------------------------------------------- */
export const themes = [

  /* ╔═══════════════════════════════════════════════════════════════════════╗
   * ║ 1) ZINC                                                               ║
   * ╚═══════════════════════════════════════════════════════════════════════╝ */
  {
    name:        'zinc',             // Sistemsel tanımlayıcı
    label:       'Zinc',             // Kullanıcıya gösterilen ad
    activeColor: {
      light:     '240 5.9% 10%',     // Light mod vurgu rengi
      dark:      '240 5.2% 33.9%',   // Dark mod vurgu rengi
    },
    cssVars: {
      light: {
        background:            '0 0% 100%',      // Genel arka plan
        foreground:            '240 10% 3.9%',   // Ana metin rengi
        card:                  '0 0% 100%',      // Kart arka planı
        'card-foreground':     '240 10% 3.9%',   // Kart metni
        popover:               '0 0% 100%',      // Popover arka planı
        'popover-foreground':  '240 10% 3.9%',   // Popover metni
        primary:               '240 5.9% 10%',   // Birincil aksiyonlar
        'primary-foreground':  '0 0% 98%',       // Birincil metin
        secondary:             '240 4.8% 95.9%',  // İkincil aksiyonlar
        'secondary-foreground':'240 5.9% 10%',    // İkincil metin
        muted:                 '240 4.8% 95.9%',  // Arka plandaki öğeler
        'muted-foreground':    '240 3.8% 46.1%',  // Subdued metin
        accent:                '240 4.8% 95.9%',  // Vurgu öğeleri
        'accent-foreground':   '240 5.9% 10%',    // Vurgu metni
        destructive:           '0 84.2% 60.2%',   // Silme/kritik aksiyon
        'destructive-foreground':'0 0% 98%',      // Kritik metin
        border:                '240 5.9% 90%',    // Çerçeveler
        input:                 '240 5.9% 90%',    // Input arka planı
        ring:                  '240 5.9% 10%',    // Focus halkası
        radius:                '0.5rem',          // Köşe yuvarlama
      },
      dark: {
        background:            '240 10% 3.9%',   // Genel arka plan
        foreground:            '0 0% 98%',       // Ana metin rengi
        card:                  '240 10% 3.9%',   // Kart arka planı
        'card-foreground':     '0 0% 98%',       // Kart metni
        popover:               '240 10% 3.9%',   // Popover arka planı
        'popover-foreground':  '0 0% 98%',       // Popover metni
        primary:               '0 0% 98%',       // Birincil aksiyonlar
        'primary-foreground':  '240 5.9% 10%',   // Birincil metin
        secondary:             '240 3.7% 15.9%',  // İkincil aksiyonlar
        'secondary-foreground':'0 0% 98%',       // İkincil metin
        muted:                 '240 3.7% 15.9%',  // Arka plandaki öğeler
        'muted-foreground':    '240 5% 64.9%',    // Subdued metin
        accent:                '240 3.7% 15.9%',  // Vurgu öğeleri
        'accent-foreground':   '0 0% 98%',        // Vurgu metni
        destructive:           '0 62.8% 30.6%',   // Silme/kritik aksiyon
        'destructive-foreground':'0 0% 98%',      // Kritik metin
        border:                '240 3.7% 15.9%',  // Çerçeveler
        input:                 '240 3.7% 15.9%',  // Input arka planı
        ring:                  '240 4.9% 83.9%',  // Focus halkası
      },
    },
  },

  /* ╔═══════════════════════════════════════════════════════════════════════╗
   * ║ 2) SLATE                                                              ║
   * ╚═══════════════════════════════════════════════════════════════════════╝ */
  {
    name:        'slate',
    label:       'Slate',
    activeColor: {
      light:     '215.4 16.3% 46.9%',
      dark:      '215.3 19.3% 34.5%',
    },
    cssVars: {
      light: {
        background:            '0 0% 100%',
        foreground:            '222.2 84% 4.9%',
        card:                  '0 0% 100%',
        'card-foreground':     '222.2 84% 4.9%',
        popover:               '0 0% 100%',
        'popover-foreground':  '222.2 84% 4.9%',
        primary:               '222.2 47.4% 11.2%',
        'primary-foreground':  '210 40% 98%',
        secondary:             '210 40% 96.1%',
        'secondary-foreground':'222.2 47.4% 11.2%',
        muted:                 '210 40% 96.1%',
        'muted-foreground':    '215.4 16.3% 46.9%',
        accent:                '210 40% 96.1%',
        'accent-foreground':   '222.2 47.4% 11.2%',
        destructive:           '0 84.2% 60.2%',
        'destructive-foreground':'210 40% 98%',
        border:                '214.3 31.8% 91.4%',
        input:                 '214.3 31.8% 91.4%',
        ring:                  '222.2 84% 4.9%',
        radius:                '0.5rem',
      },
      dark: {
        background:            '222.2 84% 4.9%',
        foreground:            '210 40% 98%',
        card:                  '222.2 84% 4.9%',
        'card-foreground':     '210 40% 98%',
        popover:               '222.2 84% 4.9%',
        'popover-foreground':  '210 40% 98%',
        primary:               '210 40% 98%',
        'primary-foreground':  '222.2 47.4% 11.2%',
        secondary:             '217.2 32.6% 17.5%',
        'secondary-foreground':'210 40% 98%',
        muted:                 '217.2 32.6% 17.5%',
        'muted-foreground':    '215 20.2% 65.1%',
        accent:                '217.2 32.6% 17.5%',
        'accent-foreground':   '210 40% 98%',
        destructive:           '0 62.8% 30.6%',
        'destructive-foreground':'210 40% 98%',
        border:                '217.2 32.6% 17.5%',
        input:                 '217.2 32.6% 17.5%',
        ring:                  '212.7 26.8% 83.9',
      },
    },
  },

  /* ╔═══════════════════════════════════════════════════════════════════════╗
   * ║ 3) STONE                                                              ║
   * ╚═══════════════════════════════════════════════════════════════════════╝ */
  {
    name:        'stone',
    label:       'Stone',
    activeColor: {
      light:     '25 5.3% 44.7%',
      dark:      '33.3 5.5% 32.4%',
    },
    cssVars: {
      light: {
        background:            '0 0% 100%',
        foreground:            '20 14.3% 4.1%',
        card:                  '0 0% 100%',
        'card-foreground':     '20 14.3% 4.1%',
        popover:               '0 0% 100%',
        'popover-foreground':  '20 14.3% 4.1%',
        primary:               '24 9.8% 10%',
        'primary-foreground':  '60 9.1% 97.8%',
        secondary:             '60 4.8% 95.9%',
        'secondary-foreground':'24 9.8% 10%',
        muted:                 '60 4.8% 95.9%',
        'muted-foreground':    '25 5.3% 44.7%',
        accent:                '60 4.8% 95.9%',
        'accent-foreground':   '24 9.8% 10%',
        destructive:           '0 84.2% 60.2%',
        'destructive-foreground':'60 9.1% 97.8%',
        border:                '20 5.9% 90%',
        input:                 '20 5.9% 90%',
        ring:                  '20 14.3% 4.1%',
        radius:                '0.95rem',
      },
      dark: {
        background:            '20 14.3% 4.1%',
        foreground:            '60 9.1% 97.8%',
        card:                  '20 14.3% 4.1%',
        'card-foreground':     '60 9.1% 97.8%',
        popover:               '20 14.3% 4.1%',
        'popover-foreground':  '60 9.1% 97.8%',
        primary:               '60 9.1% 97.8%',
        'primary-foreground':  '24 9.8% 10%',
        secondary:             '12 6.5% 15.1%',
        'secondary-foreground':'60 9.1% 97.8%',
        muted:                 '12 6.5% 15.1%',
        'muted-foreground':    '24 5.4% 63.9%',
        accent:                '12 6.5% 15.1%',
        'accent-foreground':   '60 9.1% 97.8%',
        destructive:           '0 62.8% 30.6%',
        'destructive-foreground':'60 9.1% 97.8%',
        border:                '12 6.5% 15.1%',
        input:                 '12 6.5% 15.1%',
        ring:                  '24 5.7% 82.9%',
      },
    },
  },

  /* ╔═══════════════════════════════════════════════════════════════════════╗
   * ║ 4) GRAY                                                               ║
   * ╚═══════════════════════════════════════════════════════════════════════╝ */
  {
    name:        'gray',
    label:       'Gray',
    activeColor: {
      light:     '220 8.9% 46.1%',
      dark:      '215 13.8% 34.1%',
    },
    cssVars: {
      light: {
        background:            '0 0% 100%',
        foreground:            '224 71.4% 4.1%',
        card:                  '0 0% 100%',
        'card-foreground':     '224 71.4% 4.1%',
        popover:               '0 0% 100%',
        'popover-foreground':  '224 71.4% 4.1%',
        primary:               '220.9 39.3% 11%',
        'primary-foreground':  '210 20% 98%',
        secondary:             '220 14.3% 95.9%',
        'secondary-foreground':'220.9 39.3% 11%',
        muted:                 '220 14.3% 95.9%',
        'muted-foreground':    '220 8.9% 46.1%',
        accent:                '220 14.3% 95.9%',
        'accent-foreground':   '220.9 39.3% 11%',
        destructive:           '0 84.2% 60.2%',
        'destructive-foreground':'210 20% 98%',
        border:                '220 13% 91%',
        input:                 '220 13% 91%',
        ring:                  '224 71.4% 4.1%',
        radius:                '0.35rem',
      },
      dark: {
        background:            '224 71.4% 4.1%',
        foreground:            '210 20% 98%',
        card:                  '224 71.4% 4.1%',
        'card-foreground':     '210 20% 98%',
        popover:               '224 71.4% 4.1%',
        'popover-foreground':  '210 20% 98%',
        primary:               '210 20% 98%',
        'primary-foreground':  '220.9 39.3% 11%',
        secondary:             '215 27.9% 16.9%',
        'secondary-foreground':'210 20% 98%',
        muted:                 '215 27.9% 16.9%',
        'muted-foreground':    '217.9 10.6% 64.9%',
        accent:                '215 27.9% 16.9%',
        'accent-foreground':   '210 20% 98%',
        destructive:           '0 62.8% 30.6%',
        'destructive-foreground':'210 20% 98%',
        border:                '215 27.9% 16.9%',
        input:                 '215 27.9% 16.9%',
        ring:                  '216 12.2% 83.9%',
      },
    },
  },

  /* ╔═══════════════════════════════════════════════════════════════════════╗
   * ║ 5) NEUTRAL                                                            ║
   * ╚═══════════════════════════════════════════════════════════════════════╝ */
  {
    name:        'neutral',
    label:       'Neutral',
    activeColor: {
      light:     '0 0% 45.1%',
      dark:      '0 0% 32.2%',
    },
    cssVars: {
      light: {
        background:            '0 0% 100%',
        foreground:            '0 0% 3.9%',
        card:                  '0 0% 100%',
        'card-foreground':     '0 0% 3.9%',
        popover:               '0 0% 100%',
        'popover-foreground':  '0 0% 3.9%',
        primary:               '0 0% 9%',
        'primary-foreground':  '0 0% 98%',
        secondary:             '0 0% 96.1%',
        'secondary-foreground':'0 0% 9%',
        muted:                 '0 0% 96.1%',
        'muted-foreground':    '0 0% 45.1%',
        accent:                '0 0% 96.1%',
        'accent-foreground':   '0 0% 9%',
        destructive:           '0 84.2% 60.2%',
        'destructive-foreground':'0 0% 98%',
        border:                '0 0% 89.8%',
        input:                 '0 0% 89.8%',
        ring:                  '0 0% 3.9%',
      },
      dark: {
        background:            '0 0% 3.9%',
        foreground:            '0 0% 98%',
        card:                  '0 0% 3.9%',
        'card-foreground':     '0 0% 98%',
        popover:               '0 0% 3.9%',
        'popover-foreground':  '0 0% 98%',
        primary:               '0 0% 98%',
        'primary-foreground':  '0 0% 9%',
        secondary:             '0 0% 14.9%',
        'secondary-foreground':'0 0% 98%',
        muted:                 '0 0% 14.9%',
        'muted-foreground':    '0 0% 63.9%',
        accent:                '0 0% 14.9%',
        'accent-foreground':   '0 0% 98%',
        destructive:           '0 62.8% 30.6%',
        'destructive-foreground':'0 0% 98%',
        border:                '0 0% 14.9%',
        input:                 '0 0% 14.9%',
        ring:                  '0 0% 83.1%',
      },
    },
  },

  /* ╔═══════════════════════════════════════════════════════════════════════╗
   * ║ 6) RED                                                                ║
   * ╚═══════════════════════════════════════════════════════════════════════╝ */
  {
    name:        'red',
    label:       'Red',
    activeColor: {
      light:     '0 72.2% 50.6%',
      dark:      '0 72.2% 50.6%',
    },
    cssVars: {
      light: {
        background:            '0 0% 100%',
        foreground:            '0 0% 3.9%',
        card:                  '0 0% 100%',
        'card-foreground':     '0 0% 3.9%',
        popover:               '0 0% 100%',
        'popover-foreground':  '0 0% 3.9%',
        primary:               '0 72.2% 50.6%',
        'primary-foreground':  '0 85.7% 97.3%',
        secondary:             '0 0% 96.1%',
        'secondary-foreground':'0 0% 9%',
        muted:                 '0 0% 96.1%',
        'muted-foreground':    '0 0% 45.1%',
        accent:                '0 0% 96.1%',
        'accent-foreground':   '0 0% 9%',
        destructive:           '0 84.2% 60.2%',
        'destructive-foreground':'0 0% 98%',
        border:                '0 0% 89.8%',
        input:                 '0 0% 89.8%',
        ring:                  '0 72.2% 50.6%',
        radius:                '0 4rem',
      },
      dark: {
        background:            '0 0% 3.9%',
        foreground:            '0 0% 98%',
        card:                  '0 0% 3.9%',
        'card-foreground':     '0 0% 98%',
        popover:               '0 0% 3.9%',
        'popover-foreground':  '0 0% 98%',
        primary:               '0 72.2% 50.6%',
        'primary-foreground':  '0 85.7% 97.3%',
        secondary:             '0 0% 14.9%',
        'secondary-foreground':'0 0% 98%',
        muted:                 '0 0% 14.9%',
        'muted-foreground':    '0 0% 63.9%',
        accent:                '0 0% 14.9%',
        'accent-foreground':   '0 0% 98%',
        destructive:           '0 62.8% 30.6%',
        'destructive-foreground':'0 0% 98%',
        border:                '0 0% 14.9%',
        input:                 '0 0% 14.9%',
        ring:                  '0 72.2% 50.6%',
      },
    },
  },

  /* ╔═══════════════════════════════════════════════════════════════════════╗
   * ║ 7) ROSE                                                               ║
   * ╚═══════════════════════════════════════════════════════════════════════╝ */
  {
    name:        'rose',
    label:       'Rose',
    activeColor: {
      light:     '346.8 77.2% 49.8%',
      dark:      '346.8 77.2% 49.8%',
    },
    cssVars: {
      light: {
        background:            '0 0% 100%',
        foreground:            '240 10% 3.9%',
        card:                  '0 0% 100%',
        'card-foreground':     '240 10% 3.9%',
        popover:               '0 0% 100%',
        'popover-foreground':  '240 10% 3.9%',
        primary:               '346.8 77.2% 49.8%',
        'primary-foreground':  '355.7 100% 97.3%',
        secondary:             '240 4.8% 95.9%',
        'secondary-foreground':'240 5.9% 10%',
        muted:                 '240 4.8% 95.9%',
        'muted-foreground':    '240 3.8% 46.1%',
        accent:                '240 4.8% 95.9%',
        'accent-foreground':   '240 5.9% 10%',
        destructive:           '0 84.2% 60.2%',
        'destructive-foreground':'0 0% 98%',
        border:                '240 5.9% 90%',
        input:                 '240 5.9% 90%',
        ring:                  '346.8 77.2% 49.8%',
        radius:                '0.5rem',
      },
      dark: {
        background:            '20 14.3% 4.1%',
        foreground:            '0 0% 95%',
        popover:               '0 0% 9%',
        'popover-foreground':  '0 0% 95%',
        card:                  '24 9.8% 10%',
        'card-foreground':     '0 0% 95%',
        primary:               '346.8 77.2% 49.8%',
        'primary-foreground':  '355.7 100% 97.3%',
        secondary:             '240 3.7% 15.9%',
        'secondary-foreground':'0 0% 98%',
        muted:                 '0 0% 15%',
        'muted-foreground':    '240 5% 64.9%',
        accent:                '12 6.5% 15.1%',
        'accent-foreground':   '0 0% 98%',
        destructive:           '0 62.8% 30.6%',
        'destructive-foreground':'0 85.7% 97.3%',
        border:                '240 3.7% 15.9%',
        input:                 '240 3.7% 15.9%',
        ring:                  '346.8 77.2% 49.8%',
      },
    },
  },

  /* ╔═══════════════════════════════════════════════════════════════════════╗
   * ║ 8) ORANGE                                                             ║
   * ╚═══════════════════════════════════════════════════════════════════════╝ */
  {
    name:        'orange',
    label:       'Orange',
    activeColor: {
      light:     '24.6 95% 53.1%',
      dark:      '20.5 90.2% 48.2%',
    },
    cssVars: {
      light: {
        background:            '0 0% 100%',
        foreground:            '20 14.3% 4.1%',
        card:                  '0 0% 100%',
        'card-foreground':     '20 14.3% 4.1%',
        popover:               '0 0% 100%',
        'popover-foreground':  '20 14.3% 4.1%',
        primary:               '24.6 95% 53.1%',
        'primary-foreground':  '60 9.1% 97.8%',
        secondary:             '60 4.8% 95.9%',
        'secondary-foreground':'24 9.8% 10%',
        muted:                 '60 4.8% 95.9%',
        'muted-foreground':    '25 5.3% 44.7%',
        accent:                '60 4.8% 95.9%',
        'accent-foreground':   '24 9.8% 10%',
        destructive:           '0 84.2% 60.2%',
        'destructive-foreground':'60 9.1% 97.8%',
        border:                '20 5.9% 90%',
        input:                 '20 5.9% 90%',
        ring:                  '24.6 95% 53.1%',
        radius:                '0.95rem',
      },
      dark: {
        background:            '20 14.3% 4.1%',
        foreground:            '60 9.1% 97.8%',
        card:                  '20 14.3% 4.1%',
        'card-foreground':     '60 9.1% 97.8%',
        popover:               '20 14.3% 4.1%',
        'popover-foreground':  '60 9.1% 97.8%',
        primary:               '20.5 90.2% 48.2%',
        'primary-foreground':  '60 9.1% 97.8%',
        secondary:             '12 6.5% 15.1%',
        'secondary-foreground':'60 9.1% 97.8%',
        muted:                 '12 6.5% 15.1%',
        'muted-foreground':    '24 5.4% 63.9%',
        accent:                '12 6.5% 15.1%',
        'accent-foreground':   '60 9.1% 97.8%',
        destructive:           '0 72.2% 50.6%',
        'destructive-foreground':'60 9.1% 97.8%',
        border:                '12 6.5% 15.1%',
        input:                 '12 6.5% 15.1%',
        ring:                  '20.5 90.2% 48.2%',
      },
    },
  },

  /* ╔═══════════════════════════════════════════════════════════════════════╗
   * ║ 9) GREEN                                                              ║
   * ╚═══════════════════════════════════════════════════════════════════════╝ */
  {
    name:        'green',
    label:       'Green',
    activeColor: {
      light:     '142.1 76.2% 36.3%',
      dark:      '142.1 70.6% 45.3%',
    },
    cssVars: {
      light: {
        background:            '0 0% 100%',
        foreground:            '240 10% 3.9%',
        card:                  '0 0% 100%',
        'card-foreground':     '240 10% 3.9%',
        popover:               '0 0% 100%',
        'popover-foreground':  '240 10% 3.9%',
        primary:               '142.1 76.2% 36.3%',
        'primary-foreground':  '355.7 100% 97.3%',
        secondary:             '240 4.8% 95.9%',
        'secondary-foreground':'240 5.9% 10%',
        muted:                 '240 4.8% 95.9%',
        'muted-foreground':    '240 3.8% 46.1%',
        accent:                '240 4.8% 95.9%',
        'accent-foreground':   '240 5.9% 10%',
        destructive:           '0 84.2% 60.2%',
        'destructive-foreground':'0 0% 98%',
        border:                '240 5.9% 90%',
        input:                 '240 5.9% 90%',
        ring:                  '142.1 76.2% 36.3%',
        radius:                '0.5rem',
      },
      dark: {
        background:            '20 14.3% 4.1%',
        foreground:            '0 0% 95%',
        popover:               '0 0% 9%',
        'popover-foreground':  '0 0% 95%',
        card:                  '24 9.8% 10%',
        'card-foreground':     '0 0% 95%',
        primary:               '142.1 70.6% 45.3%',
        'primary-foreground':  '144.9 80.4% 10%',
        secondary:             '240 3.7% 15.9%',
        'secondary-foreground':'0 0% 98%',
        muted:                 '0 0% 15%',
        'muted-foreground':    '240 5% 64.9%',
        accent:                '12 6.5% 15.1%',
        'accent-foreground':   '0 0% 98%',
        destructive:           '0 62.8% 30.6%',
        'destructive-foreground':'0 85.7% 97.3%',
        border:                '240 3.7% 15.9%',
        input:                 '240 3.7% 15.9%',
        ring:                  '142.4 71.8% 29.2%',
      },
    },
  },

  /* ╔═══════════════════════════════════════════════════════════════════════╗
   * ║ 10) BLUE                                                              ║
   * ╚═══════════════════════════════════════════════════════════════════════╝ */
  {
    name:        'blue',
    label:       'Blue',
    activeColor: {
      light:     '221.2 83.2% 53.3%',
      dark:      '217.2 91.2% 59.8%',
    },
    cssVars: {
      light: {
        background:            '0 0% 100%',
        foreground:            '222.2 84% 4.9%',
        card:                  '0 0% 100%',
        'card-foreground':     '222.2 84% 4.9%',
        popover:               '0 0% 100%',
        'popover-foreground':  '222.2 84% 4.9%',
        primary:               '221.2 83.2% 53.3%',
        'primary-foreground':  '210 40% 98%',
        secondary:             '210 40% 96.1%',
        'secondary-foreground':'222.2 47.4% 11.2%',
        muted:                 '210 40% 96.1%',
        'muted-foreground':    '215.4 16.3% 46.9%',
        accent:                '210 40% 96.1%',
        'accent-foreground':   '222.2 47.4% 11.2%',
        destructive:           '0 84.2% 60.2%',
        'destructive-foreground':'210 40% 98%',
        border:                '214.3 31.8% 91.4%',
        input:                 '214.3 31.8% 91.4%',
        ring:                  '221.2 83.2% 53.3%',
      },
      dark: {
        background:            '222.2 84% 4.9%',
        foreground:            '210 40% 98%',
        card:                  '222.2 84% 4.9%',
        'card-foreground':     '210 40% 98%',
        popover:               '222.2 84% 4.9%',
        'popover-foreground':  '210 40% 98%',
        primary:               '217.2 91.2% 59.8%',
        'primary-foreground':  '222.2 47.4% 11.2%',
        secondary:             '217.2 32.6% 17.5%',
        'secondary-foreground':'210 40% 98%',
        muted:                 '217.2 32.6% 17.5%',
        'muted-foreground':    '215 20.2% 65.1%',
        accent:                '217.2 32.6% 17.5%',
        'accent-foreground':   '210 40% 98%',
        destructive:           '0 62.8% 30.6%',
        'destructive-foreground':'210 40% 98%',
        border:                '217.2 32.6% 17.5%',
        input:                 '217.2 32.6% 17.5%',
        ring:                  '224.3 76.3% 48%',
      },
    },
  },

  /* ╔═══════════════════════════════════════════════════════════════════════╗
   * ║ 11) YELLOW                                                            ║
   * ╚═══════════════════════════════════════════════════════════════════════╝ */
  {
    name:        'yellow',
    label:       'Yellow',
    activeColor: {
      light:     '47.9 95.8% 53.1%',
      dark:      '47.9 95.8% 53.1%',
    },
    cssVars: {
      light: {
        background:            '0 0% 100%',
        foreground:            '20 14.3% 4.1%',
        card:                  '0 0% 100%',
        'card-foreground':     '20 14.3% 4.1%',
        popover:               '0 0% 100%',
        'popover-foreground':  '20 14.3% 4.1%',
        primary:               '47.9 95.8% 53.1%',
        'primary-foreground':  '26 83.3% 14.1%',
        secondary:             '60 4.8% 95.9%',
        'secondary-foreground':'24 9.8% 10%',
        muted:                 '60 4.8% 95.9%',
        'muted-foreground':    '25 5.3% 44.7%',
        accent:                '60 4.8% 95.9%',
        'accent-foreground':   '24 9.8% 10%',
        destructive:           '0 84.2% 60.2%',
        'destructive-foreground':'60 9.1% 97.8%',
        border:                '20 5.9% 90%',
        input:                 '20 5.9% 90%',
        ring:                  '20 14.3% 4.1%',
        radius:                '0.95rem',
      },
      dark: {
        background:            '20 14.3% 4.1%',
        foreground:            '60 9.1% 97.8%',
        card:                  '20 14.3% 4.1%',
        'card-foreground':     '60 9.1% 97.8%',
        popover:               '20 14.3% 4.1%',
        'popover-foreground':  '60 9.1% 97.8%',
        primary:               '47.9 95.8% 53.1%',
        'primary-foreground':  '26 83.3% 14.1%',
        secondary:             '12 6.5% 15.1%',
        'secondary-foreground':'60 9.1% 97.8%',
        muted:                 '12 6.5% 15.1%',
        'muted-foreground':    '24 5.4% 63.9%',
        accent:                '12 6.5% 15.1%',
        'accent-foreground':   '60 9.1% 97.8%',
        destructive:           '0 62.8% 30.6%',
        'destructive-foreground':'60 9.1% 97.8%',
        border:                '12 6.5% 15.1%',
        input:                 '12 6.5% 15.1%',
        ring:                  '35.5 91.7% 32.9%',
      },
    },
  },

  /* ╔═══════════════════════════════════════════════════════════════════════╗
   * ║ 12) VIOLET                                                            ║
   * ╚═══════════════════════════════════════════════════════════════════════╝ */
  {
    name:        'violet',
    label:       'Violet',
    activeColor: {
      light:     '262.1 83.3% 57.8%',
      dark:      '263.4 70% 50.4%',
    },
    cssVars: {
      light: {
        background:            '0 0% 100%',
        foreground:            '224 71.4% 4.1%',
        card:                  '0 0% 100%',
        'card-foreground':     '224 71.4% 4.1%',
        popover:               '0 0% 100%',
        'popover-foreground':  '224 71.4% 4.1%',
        primary:               '262.1 83.3% 57.8%',
        'primary-foreground':  '210 20% 98%',
        secondary:             '220 14.3% 95.9%',
        'secondary-foreground':'220.9 39.3% 11%',
        muted:                 '220 14.3% 95.9%',
        'muted-foreground':    '220 8.9% 46.1%',
        accent:                '220 14.3% 95.9%',
        'accent-foreground':   '220.9 39.3% 11%',
        destructive:           '0 84.2% 60.2%',
        'destructive-foreground':'210 20% 98%',
        border:                '220 13% 91%',
        input:                 '220 13% 91%',
        ring:                  '262.1 83.3% 57.8%',
      },
      dark: {
        background:            '224 71.4% 4.1%',
        foreground:            '210 20% 98%',
        card:                  '224 71.4% 4.1%',
        'card-foreground':     '210 20% 98%',
        popover:               '224 71.4% 4.1%',
        'popover-foreground':  '210 20% 98%',
        primary:               '263.4 70% 50.4%',
        'primary-foreground':  '210 20% 98%',
        secondary:             '215 27.9% 16.9%',
        'secondary-foreground':'210 20% 98%',
        muted:                 '215 27.9% 16.9%',
        'muted-foreground':    '217.9 10.6% 64.9%',
        accent:                '215 27.9% 16.9%',
        'accent-foreground':   '210 20% 98%',
        destructive:           '0 62.8% 30.6%',
        'destructive-foreground':'210 20% 98%',
        border:                '215 27.9% 16.9%',
        input:                 '215 27.9% 16.9%',
        ring:                  '263.4 70% 50.4%',
      },
    },
  },

] as const;

/** ---------------------------------------------------------------------------
 * 🎯 Tip Tanımlamaları
 * ------------------------------------------------------------------------- */

/**
 * @typedef Theme
 * @description
 *   Tek bir tema nesnesinin yapısını tanımlar.
 */
export type Theme =
  (typeof themes)[number];

/**
 * @typedef