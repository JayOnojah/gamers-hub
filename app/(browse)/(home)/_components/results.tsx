import { getStreams } from '@/lib/feed-service';

import { Skeleton } from '@/components/ui/skeleton';

import { ResultCard, ResultCardSkeleton } from './result-card';

export const Results = async () => {
  const data = await getStreams();

  return (
    <div className="pb-10">
      <h2 className="text-2xl font-semibold mb-6">Latest Streams</h2>
      {data.length === 0 && (
        <div className="text-muted-foreground text-sm">No streams found.</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {data.map((result) => (
          <ResultCard key={result.id} data={result} />
        ))}
      </div>
    </div>
  );
};

export const ResultSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-8 w-[290px] mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {[...Array(20)].map((_, i) => (
          <ResultCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
