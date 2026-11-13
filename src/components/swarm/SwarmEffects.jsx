'use client';

/**
 * SwarmEffects — Visual & Audio effect utilities for the Swarm multiplayer cursor engine.
 * Extracted & unified from the Joel Califa Swarm Chrome Extension architecture.
 */

import { NAMES, COLORS, cursorSVG, HOT } from './swarmEngine';

export { NAMES, COLORS, cursorSVG, HOT };

/**
 * Checks if the user has requested reduced motion in their OS/browser settings.
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Helper to unlock Web Audio API on the first user interaction.
 * Modern browsers suspend AudioContext until user gestures.
 */
export function setupAudioUnlock(onUnlock) {
  if (typeof window === 'undefined') return () => {};

  const handler = () => {
    if (typeof onUnlock === 'function') {
      try {
        onUnlock();
      } catch (_) {}
    }
    cleanup();
  };

  const cleanup = () => {
    window.removeEventListener('pointerdown', handler, true);
    window.removeEventListener('keydown', handler, true);
    window.removeEventListener('touchstart', handler, true);
  };

  window.addEventListener('pointerdown', handler, { capture: true, once: true });
  window.addEventListener('keydown', handler, { capture: true, once: true });
  window.addEventListener('touchstart', handler, { capture: true, once: true });

  return cleanup;
}

/**
 * Get random cursor styling for preview or ambient displays
 */
export function getRandomAgentMeta(index = 0) {
  const name = NAMES[index % NAMES.length];
  const color = COLORS[index % COLORS.length];
  return { name, color };
}
