---
layout: page
title: World Model Contrastive Reinforcement Learning
description: Using representations from a world model 🌎 to help reinforcement learning agents 🤖 learn from imperfect training demonstrations. 
img: assets/wmcrl/puzzle-3x3.png
importance: 1
category: work
giscus_comments: true
related_publications: true
---

<!-- WM-CRL Results -->
<section id="wmcrl-results" class="container my-5">

  <!-- Row 1 -->
  <div class="row g-3">
    <div class="col-md-6">
      <div class="p-2 border border-1 rounded h-100">
        <h5 class="text-center mb-2" style="font-size: 1rem;">Puzzle Grid (make it blue!)</h5>
        <img
          src="/assets/video/wmcrl/mr-crl-sample-puzzle.gif"
          class="img-fluid rounded"
          alt="WM-CRL Puzzle environment result gif"
          loading="lazy"
          style="width: 100%; height: auto;"
        />
      </div>
    </div>

    <div class="col-md-6">
      <div class="p-2 border border-1 rounded h-100">
        <h5 class="text-center mb-2" style="font-size: 1rem;">Cube Manipulation</h5>
        <img
          src="/assets/video/wmcrl/mr-crl-sample-cube.gif"
          class="img-fluid rounded"
          alt="WM-CRL Cube environment result gif"
          loading="lazy"
          style="width: 100%; height: auto;"
        />
      </div>
    </div>
  </div>

  <!-- Row 2 -->
  <div class="row g-3 mt-1">
    <div class="col-md-6">
      <div class="p-2 border border-1 rounded h-100">
        <h5 class="text-center mb-2" style="font-size: 1rem;">Humanoid Maze</h5>
        <img
          src="/assets/video/wmcrl/mr-crl-sample-humanoidmaze.gif"
          class="img-fluid rounded"
          alt="WM-CRL HumanoidMaze environment result gif"
          loading="lazy"
          style="width: 100%; height: auto;"
        />
      </div>
    </div>

    <div class="col-md-6">
      <div class="p-2 border border-1 rounded h-100">
        <h5 class="text-center mb-2" style="font-size: 1rem;">Point Maze</h5>
        <img
          src="/assets/video/wmcrl/Adobe%20Express%20-%20mr-crl-sample-pointmaze.gif"
          class="img-fluid rounded"
          alt="WM-CRL PointMaze environment result gif"
          loading="lazy"
          style="width: 100%; height: auto;"
        />
      </div>
    </div>
  </div>

  <!-- Centered final -->
  <div class="row g-3 mt-1">
    <div class="col-lg-8 offset-lg-2">
      <div class="p-2 border border-1 rounded">
        <h5 class="text-center mb-2" style="font-size: 1rem;">Ant Maze</h5>
        <img
          src="/assets/video/wmcrl/mr-crl-sample-antmaze.gif"
          class="img-fluid rounded d-block mx-auto"
          alt="WM-CRL AntMaze result gif"
          loading="lazy"
          style="width: 100%; height: auto;"
        />
      </div>
    </div>
  </div>
</section>


---

# TLDR
World Model Contrastive Reinforcement Learning (WM-CRL) is a novel approach to improve the ability of offline RL agents to learn from imperfect and poor-quality training data. 

The method essentially combines representations from a World Model (WM) with an offline RL policy (CRL).

The intuition is that WM and CRL require different kinds of data:
- **Policies** like CRL (goal-reaching, model-free, and offline policies) need *high-quality* (long-horizon and clean) demonstrations. 
- **World Models** can learn from all data, including both *high and low quality* demonstrations. By using **representations** from the world model, we help the offline RL policy learn from imperfect data.

We evaluated the method on several tasks from OGBench. We find that WM-CRL helps improve final policy success rate on 5/6 imperfect data settings (short trajectory fragments or exploratory behavior). 

Potential applications of this method include robotics and decision-making domains where high-quality data is scarce. 

[🔗 RLC Workshop Paper](https://openreview.net/forum?id=oqGLOVJwlv&noteId=oqGLOVJwlv)
[🔗 Newer, more detailed Paper (Coming soon)](https://openreview.net/forum?id=oqGLOVJwlv&noteId=oqGLOVJwlv)

---

## Problem Statement

> *How can autonomous agents learn meaningful decision-making policies from abundant but imperfect data?*

Many AI domains face a critical **data scarcity challenge**. Unlike natural language processing or computer vision—which benefit from massive internet datasets—robotics and decision-making domains often lack large, diverse, high-quality datasets. Collecting expert demonstrations for long-horizon tasks (requiring multiple stages of planning and acting) is **expensive and time-consuming**.

Traditional supervised learning approaches demand numerous high-quality demonstrations, but in practice, available data is often:

- **Suboptimal** (non-expert trajectories)
- **Fragmented** (short trajectory segments)
- **Exploratory** (goal-agnostic behavior)
- **Limited** in quantity and diversity

This creates a barrier to training effective autonomous agents for real-world applications in robotics, scientific experimentation, and complex task automation.

<!-- WM-CRL Stills -->
<section id="wmcrl-stills" class="container my-5">
  <div class="row g-3">
    <div class="col-md-4">
      <img
        src="/assets/wmcrl/antmaze.png"
        class="img-fluid rounded border"
        alt=""
        loading="lazy"
      />
    </div>
    <div class="col-md-4">
      <img
        src="/assets/wmcrl/humanoidmaze.png"
        class="img-fluid rounded border"
        alt=""
        loading="lazy"
      />
    </div>
    <div class="col-md-4">
      <img
        src="/assets/wmcrl/puzzle-3x3.png"
        class="img-fluid rounded border"
        alt=""
        loading="lazy"
      />
    </div>
  </div>
</section>

--- 

## Methodology

**WM-CRL Architecture:** The project introduces World Model Contrastive Reinforcement Learning, which augments *Contrastive Reinforcement Learning (CRL)* with representations from a *predictive world model*.

#### Key Components

**Contrastive Reinforcement Learning (CRL)** serves as the foundation—an actor-critic framework where:

- The **critic** evaluates whether state-action pairs lead toward goals
- The **actor** selects actions that move closer to goal states
- **Contrastive representation learning** enables learning from diverse, suboptimal data

**World Model Integration:** A world model is trained to predict future state embeddings from past state-action pairs, thereby learning the underlying dynamics of how environments evolve. These learned representations are integrated into CRL's actor-critic framework.

#### Why This Works

The world model's training objective focuses purely on **environment dynamics**, meaning it can learn from any demonstrations—expert or otherwise. By providing CRL with structured understanding of how actions influence future states, WM-CRL helps agents:

- Better comprehend environment mechanics
- Select actions more strategically
- Reach goal states faster and more reliably

#### Detailed Algorithm

##### Networks

**Encoders:**
- State encoder: `z_s(s)`
- State-action encoder: `z_sa(s,a)`
- Projector: `m(·)`

**Contrastive RL actor-critic:**
- Critic goal: `ψ(g)`
- Critic state-action: `φ(s,a,z_s(s),z_sa(s,a))`
- Policy: `π(s,s_g,z_s(s),z_s(s_g))`

##### Training Loop
```
for t in 1:T
    Sample trajectory {(s_t, a_t, s_{t+1})}_{t=1}^H
        and goal s_g from training set.
    Update z_s, z_sa, m with world model
        loss (Eq. [encoder loss])
    if t > w then
        Update φ, ψ with contrastive
            loss (Eq. [contrastive loss])
        Update π with actor
            loss (Eq. [actor loss]).
    if t % p == 0 then
        Update target networks:
            z_s', z_sa', m' ← z_s, z_sa, m
```

## Results

**Experimental Setup:** The research evaluates WM-CRL against standard CRL baselines using the **OGBench benchmark**, which includes:

- **Locomotion** tasks (maze navigation)
- **Manipulation** tasks (robotic pick-and-place operations)
- **Multiple datasets**, varying in **quality** (expert, noisy, exploratory, fragmented trajectories)

**Key Finding:** WM-CRL substantially improves performance over CRL when training data is imperfect, achieving improvements on **5 out of 6 imperfect-data tasks**.

### Performance Highlights

**Strong improvements observed when:**

- Training on **short-horizon trajectory fragments** (stitching problem)
- Learning from **exploratory demonstrations** (random, goal-agnostic actions)
- **Generalizing beyond training distribution** is required

**Limited benefits when:**

- Abundant **expert demonstrations** are available
- Simple **behavior cloning** is sufficient to solve tasks

### Critical Success Factors

Ablation studies revealed two key factors determining WM-CRL effectiveness:

1. **World Model Training Stability:** Smooth, monotonic training loss correlates strongly with informative representations that help CRL
2. **Integration Strategy:** Where embeddings are provided (critic, actor, goal encoder) significantly influences performance, with no single strategy optimal across all environments

--- 

## Significance & Impact

This research demonstrates that **predictive world model representations can meaningfully enhance goal-reaching agents** under data scarcity constraints—a prevalent challenge in robotics and autonomous systems.

**Practical Implications:**

- Reduces dependency on expensive expert demonstration collection
- Enables learning from readily available suboptimal data sources
- Provides design guidance for future model-based representation learning methods

**First-of-its-kind contributions:**

- First exploration of world model representations in contrastive reinforcement learning
- One of the first systematic evaluations across datasets of varying quality
- Novel theoretical connection between world models and self-distillation methods


---
# Citations 
Park, S., Frans, K., Eysenbach, B., & Levine, S. (2025). **OGBench: Benchmarking Offline Goal-Conditioned RL**. In _International Conference on Learning Representations (ICLR)_.