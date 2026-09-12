export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      {/* shield */}
      <path
        d="M24 3 L42 10 V24 C42 35.5 34.4 42.8 24 46 C13.6 42.8 6 35.5 6 24 V10 Z"
        fill="var(--color-brand, #0f8a47)"
      />
      <path
        d="M24 7 L38 12.6 V24 C38 33.3 31.9 39.5 24 42.2 C16.1 39.5 10 33.3 10 24 V12.6 Z"
        fill="var(--color-brand-700, #0a5e2f)"
        opacity="0.35"
      />
      {/* R monogram */}
      <text
        x="24" y="30.5"
        textAnchor="middle"
        fontFamily="Onest, system-ui, sans-serif"
        fontWeight="900"
        fontSize="19"
        fill="#ffffff"
      >R</text>
      {/* check accent */}
      <path d="M31 15 l3.2 3.2 -5.4 6 -3.4-3.6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9" />
    </svg>
  );
}

export function LogoLockup({ size = 36 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2">
      <LogoMark size={size} />
      <span className="hidden text-[18px] font-black tracking-tight sm:block">
        Richkem<span className="text-brand">.</span>
      </span>
    </span>
  );
}
