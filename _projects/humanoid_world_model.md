---
layout: page
title: Humanoid World Model
description: An open-source world model for humanoid robots. 
img: assets/hwm/icon.png
importance: 1
category: work
giscus_comments: true
related_publications: true
---

<!-- Two-column layout: Left = Mask-HWM, Right = Flow-HWM -->
<div class="row mt-5">
  <!-- LEFT COLUMN: Mask-HWM -->
  <div class="col-md-6">
    <h4 class="text-center mb-3">Masked Transformer</h4>

    <!-- Mask Sample 1 -->
    <div class="mb-4 p-3 border rounded">
      <!-- <h5 class="mb-2">Sample 1</h5> -->
      <div class="row">
        <div class="col-sm">
          <h6>Generated</h6>
          <img src="/assets/video/mask1_gen.gif" class="img-fluid rounded z-depth-1" alt="Mask 1 Generated">
        </div>
        <div class="col-sm">
          <h6>Ground Truth</h6>
          <img src="/assets/video/mask1_gt.gif" class="img-fluid rounded z-depth-1" alt="Mask 1 Ground Truth">
        </div>
      </div>
    </div>

    <!-- Mask Sample 2 -->
    <div class="mb-4 p-3 border rounded">
      <!-- <h5 class="mb-2">Sample 2</h5> -->
      <div class="row">
        <div class="col-sm">
          <h6>Generated</h6>
          <img src="/assets/video/mask2_gen.gif" class="img-fluid rounded z-depth-1" alt="Mask 2 Generated">
        </div>
        <div class="col-sm">
          <h6>Ground Truth</h6>
          <img src="/assets/video/mask2_gt.gif" class="img-fluid rounded z-depth-1" alt="Mask 2 Ground Truth">
        </div>
      </div>
    </div>

    <!-- Mask Sample 3 -->
    <div class="mb-4 p-3 border rounded">
      <!-- <h5 class="mb-2">Sample 3</h5> -->
      <div class="row">
        <div class="col-sm">
          <h6>Generated</h6>
          <img src="/assets/video/mask3_gen.gif" class="img-fluid rounded z-depth-1" alt="Mask 3 Generated">
        </div>
        <div class="col-sm">
          <h6>Ground Truth</h6>
          <img src="/assets/video/mask3_gt.gif" class="img-fluid rounded z-depth-1" alt="Mask 3 Ground Truth">
        </div>
      </div>
    </div>

    <!-- Mask Sample 4 -->
    <div class="mb-4 p-3 border rounded">
      <!-- <h5 class="mb-2">Sample 4</h5> -->
      <div class="row">
        <div class="col-sm">
          <h6>Generated</h6>
          <img src="/assets/video/mask4_gen.gif" class="img-fluid rounded z-depth-1" alt="Mask 4 Generated">
        </div>
        <div class="col-sm">
          <h6>Ground Truth</h6>
          <img src="/assets/video/mask4_gt.gif" class="img-fluid rounded z-depth-1" alt="Mask 4 Ground Truth">
        </div>
      </div>
    </div>
  </div>

  <!-- RIGHT COLUMN: Flow-HWM -->
  <div class="col-md-6">
    <h4 class="text-center mb-3">Flow Matching</h4>

    <!-- Flow Sample 1 -->
    <div class="mb-4 p-3 border rounded">
      <!-- <h5 class="mb-2">Sample 1</h5> -->
      <div class="row">
        <div class="col-sm">
          <h6>Generated</h6>
          <img src="/assets/video/flow1_gen.gif" class="img-fluid rounded z-depth-1" alt="Flow 1 Generated">
        </div>
        <div class="col-sm">
          <h6>Ground Truth</h6>
          <img src="/assets/video/flow1_gt.gif" class="img-fluid rounded z-depth-1" alt="Flow 1 Ground Truth">
        </div>
      </div>
    </div>

    <!-- Flow Sample 2 -->
    <div class="mb-4 p-3 border rounded">
      <!-- <h5 class="mb-2">Sample 2</h5> -->
      <div class="row">
        <div class="col-sm">
          <h6>Generated</h6>
          <img src="/assets/video/flow4_gen.gif" class="img-fluid rounded z-depth-1" alt="Flow 2 Generated">
        </div>
        <div class="col-sm">
          <h6>Ground Truth</h6>
          <img src="/assets/video/flow4_gt.gif" class="img-fluid rounded z-depth-1" alt="Flow 2 Ground Truth">
        </div>
      </div>
    </div>

    <!-- Flow Sample 3 -->
    <div class="mb-4 p-3 border rounded">
      <!-- <h5 class="mb-2">Sample 3</h5> -->
      <div class="row">
        <div class="col-sm">
          <h6>Generated</h6>
          <img src="/assets/video/flow2_gen.gif" class="img-fluid rounded z-depth-1" alt="Flow 3 Generated">
        </div>
        <div class="col-sm">
          <h6>Ground Truth</h6>
          <img src="/assets/video/flow2_gt.gif" class="img-fluid rounded z-depth-1" alt="Flow 3 Ground Truth">
        </div>
      </div>
    </div>

    <!-- Flow Sample 4 -->
    <div class="mb-4 p-3 border rounded">
      <!-- <h5 class="mb-2">Sample 4</h5> -->
      <div class="row">
        <div class="col-sm">
          <h6>Generated</h6>
          <img src="/assets/video/flow7_gen.gif" class="img-fluid rounded z-depth-1" alt="Flow 4 Generated">
        </div>
        <div class="col-sm">
          <h6>Ground Truth</h6>
          <img src="/assets/video/flow7_gt.gif" class="img-fluid rounded z-depth-1" alt="Flow 4 Ground Truth">
        </div>
      </div>
    </div>
  </div>
</div>

---

We present **Humanoid World Models (HWM)** 🤖🧠 — a family of lightweight, open-source video prediction models for humanoid robots — showcased at the [ICML 2025 Workshop on Physically Plausible World Models](https://openreview.net/forum?id=ENAycZapM2&noteId=ENAycZapM2). The model predicts 8 future video frames conditioned on 9 past video frames and humanoid control tokens (e.g., joint angles, velocities).

[🔗 Full Paper](https://arxiv.org/pdf/2506.01182)

<div style="text-align: center;">
  <img
    src="/assets/hwm/overview.png"
    alt="Overview"
    style="width: 400px;"
  />
</div>

---

## Motivation
World foundation models can predict high fidelity and physically plausible future video conditioned on the past. Such world models can substantially help the development of humanoid robots. In particular, world models can help evaluate humanoid policies, generate synthetic training data, learn general-purpose representations, and help conduct long-horizon planning. However, many world foundation models are closed-source and/or require large amounts of computational resources to run (e.g. [8+ H100s](https://github.com/nvidia-cosmos/cosmos-predict2/blob/9944a1aebd172a1750c2f9669eca81eb71e6277c/documentations/performance.md)).

**Key Features**:
- **Two model families**: While Masked-HWM achieves higher visual fidelity and faster inference, Flow-HWM offers benefits in continuous latent modeling. Our findings favor Masked-HWM for most practical deployments:
  - *Masked-HWM*: non-autoregressive masked video transformer using VQ-VAE latents.
  - *Flow-HWM*: continuous VAE latent space model using flow-matching.
- **Architecture Variants**: Various attention styles (joint vs. split attention) and weight-sharing strategies were explored, providing up to 53% parameter reduction with minimal performance degradation.
- **Efficiency**: Trained 3 Nvida A6000 GPUs.
- **Data**: Trained on 100+ hours of egocentric humanoid video and control traces from the [1xGPT](https://github.com/1x-technologies/1xgpt) dataset.



---

## Architecture Diagrams

<div style="display: flex; justify-content: center; gap: 2rem; margin: 2rem 0;">
  <figure style="max-width: 300px; text-align: center;">
    <img
      src="/assets/hwm/architecture_diagrams/masked_architecture.png"
      alt="Masked Video transformer block architecture"
      style="width: 100%; height: auto;"
    />
    <figcaption>Masked Video Transformer</figcaption>
  </figure>

  <figure style="max-width: 300px; text-align: center;">
    <img
      src="/assets/hwm/architecture_diagrams/flow_architecture.png"
      alt="Flow-Matching transformer block architecture"
      style="width: 100%; height: auto;"
    />
    <figcaption>Flow-Matching Model</figcaption>
  </figure>
</div>

---

## Quantitative Performance

| Model Variant      | FID ↓ | PSNR ↑ | Params (B) | Samples/sec |
|--------------------|-------|--------|-------------|--------------|
| Masked-HWM (Base)  | 10.13 | 29.02 dB | 0.321       | 2.27         |
| Masked-HWM (Full Sharing) | 14.21 | 28.66 dB | **0.195** | **2.36**     |
| Flow-HWM (Base)    | 111.59 | 20.42 dB | 1.36        | 1.69         |
| Flow-HWM (Full Sharing) | **110.73** | 20.43 dB | **0.648** | **1.91**     |

### Code

[🔗 GitHub Repository](https://github.com/qasim-ali0/humanoid_world_model)

### Citation

If you use this work, please cite our ICML workshop paper:

> Ali, Q., Sridhar, A., Matiana, S., Wong, A., & Al-Sharman, M. (2025). *Humanoid World Models: Open World Foundation Models for Humanoid Robotics*. ICML Workshop on Physically Plausible World Models.

---

For code, data, or collaboration inquiries, contact [Qasim Ali](mailto:m45ali@uwaterloo.ca).

# References

**1X Technologies.** (2024). *1X World Model Challenge* (Version 1.1) [Data set].