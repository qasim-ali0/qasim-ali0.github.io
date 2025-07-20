---
layout: page
title: Humanoid World Model
description: An open-source world model specifically designed for humanoids. 
img: assets/hwm/icon.jpg
importance: 1
category: work
giscus_comments: true
related_publications: true
---

We present **Humanoid World Models (HWM)** 🤖🧠 — a family of lightweight, open-source video prediction models for humanoid robots — showcased at the [ICML 2025 Workshop on Physically Plausible World Models](https://openreview.net/forum?id=ENAycZapM2&noteId=ENAycZapM2). It predicts *8* future video frames conditioned on *9* past video frames and humanoid control tokens (e.g., joint angles, velocities). Such world models can facilitate simulation, planning, and synthetic policy learning.

---

### Motivation
World foundation models, when scaled appropriately, are able to predict high fidelity and physically plausible future video conditioned on the past. These models can be used by humanoid robots for synthetic policy evaluation, synthetic policy training, and long-horizon planning. However many world foundation models are closed-source and/or require large amounts of computational resources (e.g. [8+ H100s](https://github.com/nvidia-cosmos/cosmos-predict2/blob/9944a1aebd172a1750c2f9669eca81eb71e6277c/documentations/performance.md)).

<div style="text-align: center;">
  <img
    src="/assets/hwm/overview.png"
    alt="Overview"
    style="width: 400px;"
  />
</div>

**Key Features**:
- **Two model families**: While Masked-HWM achieves higher visual fidelity and faster inference, Flow-HWM offers benefits in continuous latent modeling. Our findings favor Masked-HWM for most practical deployments:
  - *Masked-HWM*: non-autoregressive masked video transformer using VQ-VAE latents.
  - *Flow-HWM*: continuous latent space model using flow-matching.
- **Architecture Variants**: Various attention styles (joint vs. split attention) and weight-sharing strategies were explored, providing up to 53% parameter reduction with minimal performance degradation.
- **Efficiency**: Trained and deployed using only 1–2 GPUs.
- **Data**: Trained on 100+ hours of egocentric humanoid video and control traces from the [1xGPT](https://github.com/1x-technologies/1xgpt) dataset.


### Sample Predictions

Sample predictions from each model variant are shown below. Masked-HWM achieves higher visual fidelity and faster inference. In the comparison images, the bottom row is generated while top row is ground truth.

#### Masked Video Transformer (Masked-WHM)

<!-- Model 2 Samples – Row 1 -->
<div class="row mt-5">
  <div class="col-sm mt-3 mt-md-0">
    <h5>Sample 1</h5>
    <div class="row">
      <div class="col-sm">
        <h6>Generated</h6>
        {% include video.liquid path="https://www.youtube.com/embed/2Ebc0l-QDLU?autoplay=1&mute=1&loop=1&playlist=2Ebc0l-QDLU" class="img-fluid rounded z-depth-1" %}
      </div>
      <div class="col-sm">
        <h6>Ground Truth</h6>
        {% include video.liquid path="https://www.youtube.com/embed/3x6_qdnb4z0?autoplay=1&mute=1&loop=1&playlist=3x6_qdnb4z0" class="img-fluid rounded z-depth-1" %}
      </div>
    </div>
    <figure class="mt-2">
      <img src="/assets/hwm/sampled_images/mask1.png" class="img-fluid rounded z-depth-1" alt="Sample 1 comparison">
      <figcaption class="text-center mt-1">Sample 1: Top = Generated, Bottom = Ground Truth</figcaption>
    </figure>
  </div>

  <div class="col-sm mt-3 mt-md-0">
    <h5>Sample 2</h5>
    <div class="row">
      <div class="col-sm">
        <h6>Generated</h6>
        {% include video.liquid path="https://www.youtube.com/embed/E6P8CCi2L5c?autoplay=1&mute=1&loop=1&playlist=E6P8CCi2L5c" class="img-fluid rounded z-depth-1" %}
      </div>
      <div class="col-sm">
        <h6>Ground Truth</h6>
        {% include video.liquid path="https://www.youtube.com/embed/VYdWjiIaJ5E?autoplay=1&mute=1&loop=1&playlist=VYdWjiIaJ5E" class="img-fluid rounded z-depth-1" %}
      </div>
    </div>
    <figure class="mt-2">
      <img src="/assets/hwm/sampled_images/mask2.png" class="img-fluid rounded z-depth-1" alt="Sample 2 comparison">
      <figcaption class="text-center mt-1">Sample 2: Top = Generated, Bottom = Ground Truth</figcaption>
    </figure>
  </div>
</div>

<!-- Model 2 Samples – Row 2 -->
<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    <h5>Sample 3</h5>
    <div class="row">
      <div class="col-sm">
        <h6>Generated</h6>
        {% include video.liquid path="https://www.youtube.com/embed/tGyFrFHrM9k?autoplay=1&mute=1&loop=1&playlist=tGyFrFHrM9k" class="img-fluid rounded z-depth-1" %}
      </div>
      <div class="col-sm">
        <h6>Ground Truth</h6>
        {% include video.liquid path="https://www.youtube.com/embed/C6Po51WEk_I?autoplay=1&mute=1&loop=1&playlist=C6Po51WEk_I" class="img-fluid rounded z-depth-1" %}
      </div>
    </div>
    <figure class="mt-2">
      <img src="/assets/hwm/sampled_images/mask4.png" class="img-fluid rounded z-depth-1" alt="Sample 3 comparison">
      <figcaption class="text-center mt-1">Sample 3: Top = Generated, Bottom = Ground Truth</figcaption>
    </figure>
  </div>

  <div class="col-sm mt-3 mt-md-0">
    <h5>Sample 4</h5>
    <div class="row">
      <div class="col-sm">
        <h6>Generated</h6>
        {% include video.liquid path="https://www.youtube.com/embed/BtFfGvlVdPQ?autoplay=1&mute=1&loop=1&playlist=BtFfGvlVdPQ" class="img-fluid rounded z-depth-1" %}
      </div>
      <div class="col-sm">
        <h6>Ground Truth</h6>
        {% include video.liquid path="https://www.youtube.com/embed/dzz90ehz8tg?autoplay=1&mute=1&loop=1&playlist=dzz90ehz8tg" class="img-fluid rounded z-depth-1" %}
      </div>
    </div>
    <figure class="mt-2">
      <img src="/assets/hwm/sampled_images/mask5.png" class="img-fluid rounded z-depth-1" alt="Sample 4 comparison">
      <figcaption class="text-center mt-1">Sample 4: Top = Generated, Bottom = Ground Truth</figcaption>
    </figure>
  </div>
</div>




#### Flow-Matching Model (Flow-HWM)

<!-- Flow Matching Samples – Row 1 -->
<div class="row mt-5">
  <div class="col-sm mt-3 mt-md-0">
    <h5>Sample 1</h5>
    <div class="row">
      <div class="col-sm">
        <h6>Generated</h6>
        {% include video.liquid path="https://www.youtube.com/embed/GXAgs9ZLsbU?autoplay=1&mute=1&loop=1&playlist=GXAgs9ZLsbU" class="img-fluid rounded z-depth-1" %}
      </div>
      <div class="col-sm">
        <h6>Ground Truth</h6>
        {% include video.liquid path="https://www.youtube.com/embed/gVHLNHzXG_Y?autoplay=1&mute=1&loop=1&playlist=gVHLNHzXG_Y" class="img-fluid rounded z-depth-1" %}
      </div>
    </div>
    <figure class="mt-2">
      <img src="/assets/hwm/sampled_images/flow1.png" class="img-fluid rounded z-depth-1" alt="Sample 1 comparison">
      <figcaption class="text-center mt-1">Sample 1: Top = Generated, Bottom = Ground Truth</figcaption>
    </figure>
  </div>

  <div class="col-sm mt-3 mt-md-0">
    <h5>Sample 2</h5>
    <div class="row">
      <div class="col-sm">
        <h6>Generated</h6>
        {% include video.liquid path="https://www.youtube.com/embed/-SexqyFP6tE?autoplay=1&mute=1&loop=1&playlist=-SexqyFP6tE" class="img-fluid rounded z-depth-1" %}
      </div>
      <div class="col-sm">
        <h6>Ground Truth</h6>
        {% include video.liquid path="https://www.youtube.com/embed/vNJebf7CFJA?autoplay=1&mute=1&loop=1&playlist=vNJebf7CFJA" class="img-fluid rounded z-depth-1" %}
      </div>
    </div>
    <figure class="mt-2">
      <img src="/assets/hwm/sampled_images/flow3.png" class="img-fluid rounded z-depth-1" alt="Sample 2 comparison">
      <figcaption class="text-center mt-1">Sample 2: Top = Generated, Bottom = Ground Truth</figcaption>
    </figure>
  </div>
</div>

<!-- Flow Matching Samples – Row 2 -->
<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    <h5>Sample 3</h5>
    <div class="row">
      <div class="col-sm">
        <h6>Generated</h6>
        {% include video.liquid path="https://www.youtube.com/embed/TFOzo9c5Y3o?autoplay=1&mute=1&loop=1&playlist=TFOzo9c5Y3o" class="img-fluid rounded z-depth-1" %}
      </div>
      <div class="col-sm">
        <h6>Ground Truth</h6>
        {% include video.liquid path="https://www.youtube.com/embed/VMAqcy8Rlp4?autoplay=1&mute=1&loop=1&playlist=VMAqcy8Rlp4" class="img-fluid rounded z-depth-1" %}
      </div>
    </div>
    <figure class="mt-2">
      <img src="/assets/hwm/sampled_images/flow4.png" class="img-fluid rounded z-depth-1" alt="Sample 3 comparison">
      <figcaption class="text-center mt-1">Sample 3: Top = Generated, Bottom = Ground Truth</figcaption>
    </figure>
  </div>

  <div class="col-sm mt-3 mt-md-0">
    <h5>Sample 4</h5>
    <div class="row">
      <div class="col-sm">
        <h6>Generated</h6>
        {% include video.liquid path="https://www.youtube.com/embed/jx9Mg_ZduYo?autoplay=1&mute=1&loop=1&playlist=jx9Mg_ZduYo" class="img-fluid rounded z-depth-1" %}
      </div>
      <div class="col-sm">
        <h6>Ground Truth</h6>
        {% include video.liquid path="https://www.youtube.com/embed/Ca5y4zry6Mc?autoplay=1&mute=1&loop=1&playlist=Ca5y4zry6Mc" class="img-fluid rounded z-depth-1" %}
      </div>
    </div>
    <figure class="mt-2">
      <img src="/assets/hwm/sampled_images/flow6.png" class="img-fluid rounded z-depth-1" alt="Sample 4 comparison">
      <figcaption class="text-center mt-1">Sample 4: Top = Generated, Bottom = Ground Truth</figcaption>
    </figure>
  </div>
</div>


---

### Architecture Diagrams

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

### Quantitative Performance

| Model Variant      | FID ↓ | PSNR ↑ | Params (B) | Samples/sec |
|--------------------|-------|--------|-------------|--------------|
| Masked-HWM (Base)  | 10.13 | 29.02 dB | 0.321       | 2.27         |
| Masked-HWM (Full Sharing) | 14.21 | 28.66 dB | **0.195** | **2.36**     |
| Flow-HWM (Base)    | 111.59 | 20.42 dB | 1.36        | 1.69         |
| Flow-HWM (Full Sharing) | **110.73** | 20.43 dB | **0.648** | **1.91**     |

### Code
[🔗 GitHub Repository (coming soon)](https://github.com/qasim-ali0/humanoid_world_model)


### Citation

If you use this work, please cite our ICML workshop paper:

> Ali, Q., Sridhar, A., Matiana, S., Wong, A., & Al-Sharman, M. (2025). *Humanoid World Models: Open World Foundation Models for Humanoid Robotics*. ICML Workshop on Physically Plausible World Models.

---

For code, data, or collaboration inquiries, contact [Qasim Ali](mailto:m45ali@uwaterloo.ca).

# References

**1X Technologies.** (2024). *1X World Model Challenge* (Version 1.1) [Data set].