// useEvent.js

import { eventBus } from '../lib/eventBus';
import { useEffect } from 'react';

// to expose the methods of subscribing, unsubscribing etc.
export function useEvent(eventName, handler) {
  useEffect(() => {
    // subscribe returns the unsubscribe function
    const unsubscribe = eventBus.subscribe(eventName, handler);

    return () => unsubscribe(); // cleanup on unmount
  }, [eventName, handler]);
}

// then this hook is called it will automatically subscribe particular handler
// for an event and it also provides another function for unsubscribing it
// whenever component gets unmounted
