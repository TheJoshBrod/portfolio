---
title: "Optimized CUDA-Accelerated Alpha-Beta Pruning"
slug: "gpu-othello-game-search"
date: "Fall 2025"
description: "High-performance Othello engine leveraging hybrid CPU-GPU parallelism and shared transposition tables."
technologies: ["CUDA", "C++", "Python"]
github: "https://github.com/TheJoshBrod/OthelloEngine-GPU"
paper: "https://raw.githubusercontent.com/TheJoshBrod/OthelloEngine-GPU/main/methodology_and_performance_analysis.pdf"
---

## Overview

This project implements an optimized parallel Othello game engine using the Negamax algorithm with alpha-beta pruning. By aligning parallel architecture with the structure of adversarial search, the system achieves deeper search depths than traditional serial or naïve parallel approaches.

## Features

<div class="feature-grid">
  <div class="feature-card">
    <h3>Hybrid PV-Split</h3>
    <p>Combines high-quality sequential search on the CPU to establish alpha-beta bounds with massive GPU throughput for sibling branches.</p>
  </div>
  <div class="feature-card">
    <h3>Global Transposition Table</h3>
    <p>Utilizes 384MB of GPU global memory to cache 16 million entries, transforming tree search into efficient graph traversal.</p>
  </div>
  <div class="feature-card">
    <h3>Algorithm-Aware Pruning</h3>
    <p>Preserves critical pruning information across parallel threads, preventing the "brute-force" inefficiency typical of naïve GPU implementations.</p>
  </div>
</div>

## Motivation

<div class="comparison-grid">
  <div class="problem-box">
    <h3>Adversarial Search Challenges</h3>
    <ul>
      <li>Game states form interconnected transposition graphs, not simple trees</li>
      <li>Naïve parallelism leads to redundant evaluations and lost pruning power</li>
      <li>Search complexity grows exponentially with depth</li>
    </ul>
  </div>
  <div class="solution-box">
    <h3>Our Approach</h3>
    <ul>
      <li>Establish tight alpha-beta bounds on CPU via Principal Variation</li>
      <li>Filter duplicate game states on the host before GPU batching</li>
      <li>Synchronize parallel threads through a shared global hash table</li>
    </ul>
  </div>
</div>

## Implementation

<div class="pipeline-step">
  <h3>Principal Variation Split (PV-Split)</h3>
  <p>To optimize search initialization, the CPU first executes the most promising branch (the Principal Variation) in serial. This process establishes refined alpha-beta bounds, which are then passed to parallel CUDA threads to allow for more aggressive pruning across the rest of the search tree.</p>
</div>

<div class="pipeline-step">
  <h3>Shared Transposition Table</h3>
  <p>A global hash table residing in GPU memory addresses the inefficiency of redundant evaluations. Each entry caches sub-tree scores, depths, and bound flags (Exact, Lower, or Upper). Threads probe this table before expanding children to "short-circuit" recursion if a valid result is found.</p>
</div>

<div class="pipeline-step">
  <h3>Iterative Deepening & Heuristics</h3>
  <p>The engine uses iterative deepening to ensure a valid move is always available within a time limit. Board positions are evaluated using a multi-factor heuristic considering positional weights, mobility, corner control, and frontier pressure.</p>
</div>

## Results

Performance was measured by the average maximum search depth achieved within fixed time budgets (5s, 15s, and 30s) across different game phases.

### Search Depth Comparison (Mid-Game)

| Implementation | 5s Depth | 15s Depth | 30s Depth |
|----------------|----------|-----------|-----------|
| Serial CPU | 12.42 | 13.26 | 13.38 |
| Naïve Parallel | 12.10 | 12.86 | 13.12 |
| Optimized PV-Split | 12.83 | 13.59 | 13.91 |

<div class="metric-box">
  <span class="metric-value">+0.53</span>
  <span class="metric-label">Average Depth Increase at 30s (vs Serial)</span>
</div>

*(Data represents average across 3 games on NVIDIA 1660 TI)*

### Key Findings

- **Optimized Performance**: The hybrid design consistently achieved the deepest searches, particularly in the mid-game where branching factor is highest.
- **Pruning Logic > Raw Throughput**: The serial implementation outperformed the naïve parallel version because it could share alpha-beta values, proving that concurrency without pruning communication is ineffective.
- **Scalability**: The performance gap between the optimized and standard versions widened at longer time limits (15s/30s) as the system better amortized GPU overhead.

<div class="callout">
<strong>Conclusion</strong>: Effective GPU acceleration for game tree search requires algorithm-aware parallelism that preserves global pruning information while exploiting massive thread concurrency.
</div>
