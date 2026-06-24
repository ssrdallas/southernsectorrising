interface LogoIconProps {
  size?: number;
  className?: string;
}

export default function LogoIcon({ size = 40, className }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="25" cy="25" r="24" stroke="currentColor" strokeWidth="2" />
      <path
        d="M25 8 L25 42 M18 15 Q25 22 32 15 M15 22 Q25 32 35 22 M12 30 Q25 42 38 30"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
