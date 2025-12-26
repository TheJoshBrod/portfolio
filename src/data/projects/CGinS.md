---
title: "CUDA Ghost in the Shell (CGinS)"
slug: "CUDA-Ghost-in-the-Shell"
date: "Fall 2025 - Present"
description: "LLM-driven CUDA Kernel Generator/Optimizer to enhance PyTorch's eager mode."
technologies: ["PyTorch", "Python", "CUDA", "C++"]
github: "https://github.com/TheJoshBrod/CGinS"
paper: "https://raw.githubusercontent.com/TheJoshBrod/CGinS/main/CGinS-Paper.pdf"
---

## Overview

CUDA Ghost in the Shell (CGinS) is an automated system for generating and validating CUDA kernels from PyTorch operations. It uses AI-powered iterative refinement to convert high-level PyTorch operations into optimized CUDA kernels with comprehensive validation.

## Features

<div class="feature-grid">
  <div class="feature-card">
    <h3>Automated Generation</h3>
    <p>Converts PyTorch operations to equivalent CUDA kernels automatically, eliminating manual kernel development.</p>
  </div>
  <div class="feature-card">
    <h3>Iterative Refinement</h3>
    <p>Detects compilation and runtime errors, then automatically regenerates improved versions until success.</p>
  </div>
  <div class="feature-card">
    <h3>Performance Analysis</h3>
    <p>Measures kernel performance against ground-truth PyTorch ops using real model execution contexts.</p>
  </div>
</div>

## Motivation

<div class="comparison-grid">
  <div class="problem-box">
    <h3>Kernel Optimization is Hard</h3>
    <ul>
      <li>Manual optimizations are tedious and error-prone</li>
      <li>Compiler-based approaches face massive search spaces</li>
      <li>Vendor libraries like cuBLAS/cuDNN are closed source</li>
      <li>Growing workload demand makes optimization crucial</li>
    </ul>
  </div>
  <div class="solution-box">
    <h3>CGinS Approach</h3>
    <ul>
      <li>Profile ML model's PyTorch API calls automatically</li>
      <li>Provide LLMs with rich context (sizes, hardware info)</li>
      <li>Generate optimized CUDA kernels directly</li>
      <li>Validate with real execution data</li>
    </ul>
  </div>
</div>

## Implementation

<div class="pipeline-step">
  <h3>Profile Real-World Models</h3>
  <img src="/project/CGinS/DataCollector.svg" alt="Data Collector Architecture">
  <p>The system profiles real-world deep learning models like ResNet-50 and DistilBERT to capture actual execution contexts, including input tensor shapes and data types. It uses instrumentation hooks on PyTorch functions to record positional and keyword arguments, which are then saved as input-output pairs. These captured pairs serve as ground truth for validating generated kernel correctness.</p>
</div>

<div class="pipeline-step">
  <h3>Generate CUDA Kernels</h3>
  <img src="/project/CGinS/GenerationPipeline.svg" alt="Kernel Generation System">
  <p>The generation process uses an LLM to synthesize CUDA kernels based on structured context strings derived from runtime traces. To ensure reliability, a Verifier orchestrates a feedback loop that checks for successful compilation via load_inline and compares the kernel's output against ground-truth data using torch.allclose. If errors occur, a secondary helper LLM analyzes the exception traces to provide debugging feedback for iterative self-correction, typically converging within 2-4 attempts.</p>
</div>

<div class="pipeline-step">
    <h3>Measure Performance</h3>
  <img src="/project/CGinS/PerformanceMeasurer.svg" alt="Performance Measurement System">
  <p>Kernel performance is evaluated through end-to-end inference across various image and text classification models to capture diverse operator invocation patterns. Execution time is isolated using CUDA events (torch.cuda.Event) to specifically measure GPU-side latency. Each experiment runs 11 times, with the first warm-up run discarded and the remaining 10 averaged for final results.</p>
</div>

<div class="pipeline-step">
  <h3>Hardware-Aware Optimization</h3>
  <p>Once validated for correctness, kernels undergo a single-shot optimization pass targeting specific architectural constraints of the NVIDIA RTX 3090. The LLM is provided with hardware metadata—such as SM count, shared memory limits, and warp width—to produce a variant optimized for throughput and memory efficiency. This stage is intentionally non-iterative to isolate the impact of hardware-aware prompting from other tuning heuristics.</p>
</div>

## Results

The "Hardware Optimized" graph illustrates the per-call latency improvements achieved by applying NVIDIA RTX 3090 architectural constraints to the LLM-generated kernels. While the hardware-aware pass significantly reduces latency for compute-heavy operators like linear and dropout, it shows mixed results for bandwidth-efficient operators like embedding and relu, which occasionally saw slight performance regressions.

![Hardware Optimization Architecture](/project/CGinS/HardwareOptimizedResults.svg "Performance Measurement System")

### Impact of Hardware Optimization

<div class="metric-box">
  <span class="metric-value">1.69x</span>
  <span class="metric-label">Overall End-to-End Speedup</span>
</div>

- **Significant Throughput Gains**: The hardware-aware pass drove a 1.69x overall speedup (a 40.6% reduction) in total GPU time across the measured workloads.
- **Bottleneck Reduction**: The primary bottleneck, the linear operator, saw a 1.75x speedup, accounting for the vast majority of the total GPU-time reduction
- **Need for Iteration**: The regressions in simpler operators suggest that a single-shot optimization pass is insufficient for all cases, indicating that future systems may require iterative performance feedback loops to achieve consistent gains.

<div class="callout">
<strong>Feasibility Proof</strong>: These results demonstrate that providing LLMs with specific hardware metadata like SM count and warp width allows them to generate kernels that compete closely with highly-optimized vendor libraries.
</div>
