import Image from 'next/image';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';

const font = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image src="/spooky.svg" alt="TheGameHub" height={80} width="80" />
      </div>
      <div className={cn('flex flex-col items-center', font.className)}>
        <p className="text-xl font-semibold font-2xl">Gamers Hub</p>
        <p className="text-sm text-muted-foreground">
          The most trusted live streaming Platform.
        </p>
      </div>
    </div>
  );
};
