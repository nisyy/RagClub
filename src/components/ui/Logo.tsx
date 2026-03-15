import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="shrink-0">
      <Image
        src="/logo.jpg"
        alt="RUG CLUB"
        width={52}
        height={52}
        className="object-contain drop-shadow-sm"
        priority
      />
    </Link>
  );
}
