'use client';

import React from 'react';
import Preloader from './Preloader';
import ScrollProgress from './ScrollProgress';
import SwarmMainCursor from './swarm/SwarmMainCursor';

export default function ClientShell() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <SwarmMainCursor />
    </>
  );
}
