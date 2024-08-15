export default function Icon({
  icon,
  size,
  weight,
}: {
  icon: string;
  size: number;
  weight: string;
}) {

  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <use href={`${url}/icons/${weight}.svg#${icon} `} fill='currentColor' />
    </svg>
  );
}