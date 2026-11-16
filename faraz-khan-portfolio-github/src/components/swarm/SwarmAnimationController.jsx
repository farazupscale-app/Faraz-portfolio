'use client';

import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { startSwarm, stopSwarm, restartSwarm, toggleSwarm, isSwarmRunning, getSwarmApp } from './swarmEngine';
import './swarm.css';

const SwarmContext = createContext({
  isRunning: false,
  start: () => {},
  stop: () => {},
  restart: () => {},
  toggle: () => {},
});

export function useSwarm() {
  return useContext(SwarmContext);
}

export function SwarmAnimationController({ children, showPill = true }) {
  const [running, setRunning] = useState(false);
  const [agentCount, setAgentCount] = useState(32);

  // Poll state occasionally to keep React state in sync with DOM engine
  useEffect(() => {
    const checkState = () => {
      const active = isSwarmRunning();
      setRunning(active);
      const app = getSwarmApp();
      if (app && app.engine && app.engine.cursors) {
        setAgentCount(app.engine.cursors.length || 32);
      }
    };

    const interval = setInterval(checkState, 800);
    checkState();

    return () => clearInterval(interval);
  }, []);

  const handleStart = useCallback((options) => {
    startSwarm(options);
    setRunning(true);
  }, []);

  const handleStop = useCallback((reveal = true) => {
    stopSwarm(reveal);
    setRunning(false);
  }, []);

  const handleRestart = useCallback(() => {
    restartSwarm();
    setRunning(true);
  }, []);

  const handleToggle = useCallback(() => {
    toggleSwarm();
    setRunning(isSwarmRunning());
  }, []);

  return (
    <SwarmContext.Provider
      value={{
        isRunning: running,
        start: handleStart,
        stop: handleStop,
        restart: handleRestart,
        toggle: handleToggle,
      }}
    >
      {children}
      {showPill && (
        <button
          type="button"
          onClick={handleRestart}
          className="swarm-control-pill"
          title="Replay Swarm Multiplayer Cursors"
          aria-label="Replay Swarm Cursors Rebuild"
        >
          <span className="swarm-pulse-dot" />
          <span>Swarm Cursors</span>
          <span className="swarm-badge-count">{running ? `${agentCount}` : 'Replay'}</span>
        </button>
      )}
    </SwarmContext.Provider>
  );
}
