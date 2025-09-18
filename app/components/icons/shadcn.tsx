import { type SVGProps } from 'react';

const ShadcnUI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    preserveAspectRatio="xMidYMid"
    width="250"
    height="250"
    fill="none"
    {...props}
  >
    {/* shadcn/ui logodaki çizgiler, orijinal viewBox 256x256'ya göre ölçeklendirildi */}
    {/* 1. Çizgi */}
    <line
      x1="203.125" 
      y1="125"      
      x2="125"      
      y2="203.125"  
      stroke="currentColor" 
      strokeWidth="31.25"   
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* 2. Çizgi */}
    <line
      x1="187.5"    
      y1="39.0625"  
      x2="39.0625"  
      y2="187.5"    
      stroke="currentColor"
      strokeWidth="31.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ShadcnUI;