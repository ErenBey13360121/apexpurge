import { type SVGProps } from 'react';

const ShadcnUI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250" // Orijinal Sanity bileşeniyle aynı ölçekte
    fill="none" // Orijinal stil uyumu için
    {...props}
  >
    {/* shadcn/ui logodaki çizgiler, orijinal viewBox 256x256'ya göre ölçeklendirildi */}
    {/* 1. Çizgi */}
    <line
      x1="203.125" // 208 * (250/256)
      y1="125"      // 128 * (250/256)
      x2="125"      // 128 * (250/256)
      y2="203.125"  // 208 * (250/256)
      stroke="currentColor" // Renk uyumu için props.color veya theme kullanılabilir
      strokeWidth="31.25"   // 32 * (250/256)
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* 2. Çizgi */}
    <line
      x1="187.5"    // 192 * (250/256)
      y1="39.0625"  // 40 * (250/256)
      x2="39.0625"  // 40 * (250/256)
      y2="187.5"    // 192 * (250/256)
      stroke="currentColor"
      strokeWidth="31.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ShadcnUI;