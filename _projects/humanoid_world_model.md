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

### Why world models for humanoids?
World foundation models, when scaled appropriately, are able to predict high fidelity and physically plausible future video conditioned on the past. These models can be used by humanoid robots for synthetic policy evaluation, synthetic policy training, and long-horizon planning. However many world foundation models are closed-source and\or require large amounts of computational resources (e.g. [8+ H100s](https://github.com/nvidia-cosmos/cosmos-predict2/blob/9944a1aebd172a1750c2f9669eca81eb71e6277c/documentations/performance.md)).

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

<video width="320" height="240" controls loop="" muted = "" autoplay="">
  <source src="https://github.com/ciaranbench/ciaranbench.github.io/raw/main/assets/dance_ex.mp4">
</video>


<video width="320" height="240" controls loop="" muted = "" autoplay="">
  <source src="https://github.com/qasim-ali0/qasim-ali0.github.io/raw/refs/heads/main/assets/hwm/sampled_videos/generations/flow1.mp4">
</video>

<iframe 
  width="256" 
  height="256" 
  src="https://www.youtube.com/embed/AX5aj4C95bo?autoplay=1&mute=1&loop=1&playlist=AX5aj4C95bo" 
  frameborder="0" 
  allow="autoplay; encrypted-media" 
  allowfullscreen>
</iframe>



#### Masked Video Transformer

<div class="row mt-3">
  <div class="col-sm mb-4">
    <strong>Sample A</strong><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/generations/mask1.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Predicted</em><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/ground_truths/mask1.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Ground Truth</em><br/>
    <img src="/assets/hwm/sampled_images/mask1.png" class="img-fluid rounded z-depth-1" alt="Overlay / Comparison"/>
    <em>Overlay / Comparison</em>
  </div>
  <div class="col-sm mb-4">
    <strong>Sample B</strong><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/generations/mask2.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Predicted</em><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/ground_truths/mask2.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Ground Truth</em><br/>
    <img src="/assets/hwm/sampled_images/mask2.png" class="img-fluid rounded z-depth-1" alt="Overlay / Comparison"/>
    <em>Overlay / Comparison</em>
  </div>
</div>

<div class="row mt-3">
  <div class="col-sm mb-4">
    <strong>Sample C</strong><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/generations/mask3.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Predicted</em><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/ground_truths/mask3.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Ground Truth</em><br/>
    <img src="/assets/hwm/sampled_images/mask3.png" class="img-fluid rounded z-depth-1" alt="Overlay / Comparison"/>
    <em>Overlay / Comparison</em>
  </div>
  <div class="col-sm mb-4">
    <strong>Sample D</strong><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/generations/mask4.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Predicted</em><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/ground_truths/mask4.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Ground Truth</em><br/>
    <img src="/assets/hwm/sampled_images/mask4.png" class="img-fluid rounded z-depth-1" alt="Overlay / Comparison"/>
    <em>Overlay / Comparison</em>
  </div>
</div>

<div class="row mt-3 justify-content-center">
  <div class="col-sm-6 mb-4">
    <strong>Sample E</strong><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/generations/mask5.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Predicted</em><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/ground_truths/mask5.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Ground Truth</em><br/>
    <img src="/assets/hwm/sampled_images/mask5.png" class="img-fluid rounded z-depth-1" alt="Overlay / Comparison"/>
    <em>Overlay / Comparison</em>
  </div>
</div>




#### Flow-Matching Model
<div class="row mt-3">
  <div class="col-sm mb-4">
    <strong>Sample A</strong><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/generations/flow1.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Predicted</em><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/ground_truths/flow1.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Ground Truth</em><br/>
    <img src="/assets/hwm/sampled_images/flow1.png" class="img-fluid rounded z-depth-1" alt="Overlay / Comparison"/>
    <em>Overlay / Comparison</em>
  </div>
  <div class="col-sm mb-4">
    <strong>Sample A</strong><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/generations/flow2.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Predicted</em><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/ground_truths/flow2.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Ground Truth</em><br/>
    <img src="/assets/hwm/sampled_images/flow2.png" class="img-fluid rounded z-depth-1" alt="Overlay / Comparison"/>
    <em>Overlay / Comparison</em>
  </div>
</div>

<div class="row mt-3">
  <div class="col-sm mb-4">
    <strong>Sample B</strong><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/generations/flow3.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Predicted</em><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/ground_truths/flow3.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Ground Truth</em><br/>
    <img src="/assets/hwm/sampled_images/flow3.png" class="img-fluid rounded z-depth-1" alt="Overlay / Comparison"/>
    <em>Overlay / Comparison</em>
  </div>
  <div class="col-sm mb-4">
    <strong>Sample C</strong><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/generations/flow4.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Predicted</em><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/ground_truths/flow4.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Ground Truth</em><br/>
    <img src="/assets/hwm/sampled_images/flow4.png" class="img-fluid rounded z-depth-1" alt="Overlay / Comparison"/>
    <em>Overlay / Comparison</em>
  </div>
</div>

<div class="row mt-3">
  <div class="col-sm mb-4">
    <strong>Sample D</strong><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/generations/flow5.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Predicted</em><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/ground_truths/flow5.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Ground Truth</em><br/>
    <img src="/assets/hwm/sampled_images/flow5.png" class="img-fluid rounded z-depth-1" alt="Overlay / Comparison"/>
    <em>Overlay / Comparison</em>
  </div>
  <div class="col-sm mb-4">
    <strong>Sample E</strong><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/generations/flow6.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Predicted</em><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/ground_truths/flow6.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Ground Truth</em><br/>
    <img src="/assets/hwm/sampled_images/flow6.png" class="img-fluid rounded z-depth-1" alt="Overlay / Comparison"/>
    <em>Overlay / Comparison</em>
  </div>
</div>

<div class="row mt-3 justify-content-center">
  <div class="col-sm-6 mb-4">
    <strong>Sample F</strong><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/generations/flow5.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Predicted</em><br/>
    {% include video.liquid path="/assets/hwm/sampled_videos/ground_truths/flow5.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    <em>Ground Truth</em><br/>
    <img src="/assets/hwm/sampled_images/flow7.png" class="img-fluid rounded z-depth-1" alt="Overlay / Comparison"/>
    <em>Overlay / Comparison</em>
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