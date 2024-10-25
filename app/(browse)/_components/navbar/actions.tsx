import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { Clapperboard, UserCircleIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Actions = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!user && (
        <SignInButton>
          <Button
            size="sm"
            variant="primary"
            className="rounded-3xl px-6 text-md py-5">
            <UserCircleIcon className="h-5 w-5 mr-2" /> Login
          </Button>
        </SignInButton>
      )}
      {!!user && (
        <div className="flex items-center gap-x-4">
          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
            asChild>
            <Link href={`/u/${user.username}`}>
              <Clapperboard className="h-5 w-5 lg:mr-2" />
              <span className="hidden lg:block">Dashboard</span>
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/"></UserButton>
        </div>
      )}
    </div>
  );
};
