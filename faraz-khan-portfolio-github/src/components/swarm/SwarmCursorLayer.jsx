'use client';

import React, { useEffect, useRef } from 'react';
import { isSwarmRunning, getSwarmApp } from './swarmEngine';

/**
 * SwarmCursorLayer — Manages tab visibility, window lifecycle, and responsive adaptations.
 */
export default function SwarmCursorLayer() {
  const isHiddenRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Phase 9: Handle tab visibility change to avoid wasting battery/CPU
    const handleVisibilityChange = () => {
      const app = getSwarmApp();
      if (!app || app.dead) return;

      if (document.hidden) {
        isHiddenRef.current = true;
        // Pause or throttle audio & tour if active
        if (app.sfx && app.sfx.ctx && app.sfx.ctx.state === 'running') {
          try {
            app.sfx.ctx.suspend();
          } catch (_) {}
        }
      } else {
        isHiddenRef.current = false;
        if (app.sfx && app.sfx.ctx && app.sfx.on) {
          try {
            app.sfx.ctx.resume();
          } catch (_) {}
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null; // The engine renders into its isolated custom element <swarm-rebuild> with Shadow DOM
}
