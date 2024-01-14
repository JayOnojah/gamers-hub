'use client';

import { toast } from 'sonner';
import { useTransition } from 'react';

import { Switch } from '@/components/ui/switch';
import { updateStream } from '@/actions/stream';
import { Skeleton } from '@/components/ui/skeleton';

type FieldTypes = 'isChatEnabled' | 'isChatDelayed' | 'isChatFollowersOnly';

interface ToggleCardProp {
  label: string;
  value: boolean;
  field: FieldTypes;
}

export const ToggleCard = ({ label, value = false, field }: ToggleCardProp) => {
  const [isPending, startTransition] = useTransition();

  const onChange = () => {
    startTransition(() => {
      updateStream({ [field]: !value })
        .then(() =>
          toast.success('Account Chat Settings successfully updated!')
        )
        .catch(() => toast.error('Something went wrong'));
    });
  };

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center justify-between">
        <p className="font-semibold shrink-0">{label}</p>
        <div className="space-y-2">
          <Switch
            disabled={isPending}
            onCheckedChange={onChange}
            checked={value}
          >
            {value ? 'On' : 'Off'}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export const ToggleCardSkeleton = () => {
  return <Skeleton className="rounded-xl p-10 w-full" />;
};
