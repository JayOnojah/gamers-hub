import Link from "next/link";
import { LogOut } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const Actions = async () => {
  return (
    <div className="flex items-center justify-end gap-x-2">
      <Button
        size="sm"
        variant="ghost"
        className="text-muted-foreground hover:text-primary mr-5"
        asChild>
        <Link href="/">
          <LogOut className="h-5 w-5 mr-2" /> Back Home
        </Link>
      </Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
