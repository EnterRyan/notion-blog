import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number;
}

export default function Avatar({ src, alt = 'avatar', size = 64 }: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full object-cover border border-gray-300 shadow bg-gray-200"
      style={{ width: size, height: size }}
      priority
    />
  );
} 