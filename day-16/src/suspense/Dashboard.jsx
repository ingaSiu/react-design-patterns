import { AnalyticsSkeleton, OrdersSkeleton, ProfileSkeleton } from '../components/Skeletons';

import Analytics from '../components/Analytics';
import ErrorBoundary from '../components/ErrorBoundary';
import Orders from '../components/Orders';
import Profile from '../components/Profile';
import { Suspense } from 'react';

// wrap each component in ErrorBoundary
// happy path: the moment component resolves the promise through which it gets data
// the fallback UI will be replaced with actual component UI
// If promise gets rejected (error) suspense will go up and check what is the  nearest error boundary
// that we have. it will go and fallback to error boundary

export default function Dashboard() {
  return (
    <div className="m-2">
      <header>
        <h1 className="text-5xl mb-12">📊 Dashboard</h1>
      </header>

      <ErrorBoundary>
        <Suspense fallback={<ProfileSkeleton />}>
          <Profile />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<OrdersSkeleton />}>
          <Orders />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<AnalyticsSkeleton />}>
          <Analytics />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
