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

We present **Humanoid World Models (HWM)** 🤖🧠 — a family of lightweight, open-source **video prediction models for humanoid robots** — showcased at the [ICML 2025 Workshop on Physically Plausible World Models](https://icml.cc/). 

HWM supports **action-conditioned egocentric video generation** from humanoid control tokens (e.g., joint angles, velocities), facilitating simulation, planning, and synthetic policy learning.

![Overview](assets/hwm/overview.png)

---

### Key Features
- **Two model families**: 
  - *Masked-HWM*: non-autoregressive masked video transformer using VQ-VAE latents.
  - *Flow-HWM*: continuous latent space model using flow-matching.
- **Architecture Variants**: Joint vs. split attention and multiple parameter-sharing strategies.
- **Efficiency**: Trained and deployed using only 1–2 GPUs with up to **53% parameter reduction** and minimal performance trade-offs.
- **Data**: Trained on 100+ hours of egocentric humanoid video and control traces from the 1xGPT dataset.

---

### Sample Predictions

Sample predictions from each model variant are shown below.

#### Masked Video Transformer

<div style="display: flex; flex-wrap: wrap; gap: 2rem; margin-top: 1rem;">

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample A</strong><br/>
    <video src="assets/hwm/sampled_videos/generations/mask1.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets/hwm/sampled_videos/ground_truth/mask1.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <video src="assets/hwm/sampled_images/mask1.png" width="100%" controls></video><br/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample B</strong><br/>
    <video src="assets/hwm/sampled_videos/generations/mask2.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets/hwm/sampled_videos/ground_truth/mask2.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <video src="assets/hwm/sampled_images/mask2.png" width="100%" controls></video><br/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample B</strong><br/>
    <video src="assets/hwm/sampled_videos/generations/mask3.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets/hwm/sampled_videos/ground_truth/mask3.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <video src="assets/hwm/sampled_images/mask3.png" width="100%" controls></video><br/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample B</strong><br/>
    <video src="assets/hwm/sampled_videos/generations/mask4.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets/hwm/sampled_videos/ground_truth/mask4.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <video src="assets/hwm/sampled_images/mask4.png" width="100%" controls></video><br/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample B</strong><br/>
    <video src="assets/hwm/sampled_videos/generations/mask5.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets/hwm/sampled_videos/ground_truth/mask5.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <video src="assets/hwm/sampled_images/mask5.png" width="100%" controls></video><br/>
    <em>Overlay / Comparison</em>
  </div>
</div>



#### Flow-Matching Model
<div style="display: flex; flex-wrap: wrap; gap: 2rem; margin-top: 1rem;">

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample A</strong><br/>
    <video src="assets/hwm/sampled_videos/generations/flow1.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets/hwm/sampled_videos/ground_truth/flow1.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <video src="assets/hwm/sampled_images/flow1.png" width="100%" controls></video><br/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample B</strong><br/>
    <video src="assets/hwm/sampled_videos/generations/flow2.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets/hwm/sampled_videos/ground_truth/flow2.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <video src="assets/hwm/sampled_images/flow2.png" width="100%" controls></video><br/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample B</strong><br/>
    <video src="assets/hwm/sampled_videos/generations/flow3.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets/hwm/sampled_videos/ground_truth/flow3.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <video src="assets/hwm/sampled_images/flow3.png" width="100%" controls></video><br/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample B</strong><br/>
    <video src="assets/hwm/sampled_videos/generations/flow4.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets/hwm/sampled_videos/ground_truth/flow4.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <video src="assets/hwm/sampled_images/flow4.png" width="100%" controls></video><br/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample B</strong><br/>
    <video src="assets/hwm/sampled_videos/generations/flow5.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets/hwm/sampled_videos/ground_truth/flow5.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <video src="assets/hwm/sampled_images/flow5.png" width="100%" controls></video><br/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample B</strong><br/>
    <video src="assets/hwm/sampled_videos/generations/flow6.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets/hwm/sampled_videos/ground_truth/flow6.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <video src="assets/hwm/sampled_images/flow6.png" width="100%" controls></video><br/>
    <em>Overlay / Comparison</em>
  </div>
</div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample B</strong><br/>
    <video src="assets/hwm/sampled_videos/generations/flow5.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets/hwm/sampled_videos/ground_truth/flow5.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <video src="assets/hwm/sampled_images/flow7.png" width="100%" controls></video><br/>
    <em>Overlay / Comparison</em>
  </div>

---


### Why HWM?

Unlike closed-source and/or large models requiring 8+ H100 GPUs, HWM offers:
- **Open-source availability**
- **Training on modest setups (1–2 A6000 GPUs)**
- **Physically grounded** predictions from egocentric humanoid viewpoints

---

### Citation

If you use this work, please cite our ICML workshop paper:

> Ali, Q., Sridhar, A., Matiana, S., Wong, A., & Al-Sharman, M. (2025). *Humanoid World Models: Open World Foundation Models for Humanoid Robotics*. ICML Workshop on Physically Plausible World Models.

---

For code, data, or collaboration inquiries, contact [Qasim Ali](mailto:m45ali@uwaterloo.ca).