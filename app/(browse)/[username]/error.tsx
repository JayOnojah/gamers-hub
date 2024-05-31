'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

const ErrorPage = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <p>Something went wrong. We were unable to locate the requested page.</p>

      <Button variant="secondary" asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
