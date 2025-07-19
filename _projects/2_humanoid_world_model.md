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

We present **Humanoid World Models (HWM)** 🤖🧠 — a family of lightweight, open-source video prediction models for humanoid robots — showcased at the [ICML 2025 Workshop on Physically Plausible World Models](https://openreview.net/forum?id=ENAycZapM2&noteId=ENAycZapM2). It predicts 8 future video frames conditioned on 9 past video frames and humanoid control tokens (e.g., joint angles, velocities). Such world models can facilitate simulation, planning, and synthetic policy learning.

[🔗 GitHub Repository (coming soon)](https://github.com/qasim-ali0/humanoid_world_model)

![Overview](assets\hwm\overview.png)

---

### Why HWM?
World foundation models are able to predict high fidelity future video conditioned on control tokens. These models can be used for synthetic policy evaluation, synthetic policy training, and long-horizon planning.However many world foundation models are closed-source and\or large models requiring 8+ H100 GPUs.

**Key Features**:
- **Two model families**: While Masked-HWM achieves higher visual fidelity and faster inference, Flow-HWM offers benefits in continuous latent modeling. Our findings favor Masked-HWM for most practical deployments:
  - *Masked-HWM*: non-autoregressive masked video transformer using VQ-VAE latents.
  - *Flow-HWM*: continuous latent space model using flow-matching.
- **Architecture Variants**: Various attention styles (joint vs. split attention) and weight-sharing strategies were explored, providing up to 53% parameter reduction with minimal performance degradation.
- **Efficiency**: Trained and deployed using only 1–2 GPUs.
- **Data**: Trained on 100+ hours of egocentric humanoid video and control traces from the 1xGPT dataset.


### Sample Predictions

Sample predictions from each model variant are shown below. Masked-HWM achieves higher visual fidelity and faster inference.

#### Masked Video Transformer

<div style="display: flex; flex-wrap: wrap; gap: 2rem; margin-top: 1rem;">

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample A</strong><br/>
    <video src="assets\hwm\sampled_videos\generations\mask1.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets\hwm\sampled_videos\ground_truth\mask1.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <img src="assets\hwm\sampled_images\mask1.png" width="100%"/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample B</strong><br/>
    <video src="assets\hwm\sampled_videos\generations\mask2.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets\hwm\sampled_videos\ground_truth\mask2.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <img src="assets\hwm\sampled_images\mask2.png" width="100%"/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample C</strong><br/>
    <video src="assets\hwm\sampled_videos\generations\mask3.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets\hwm\sampled_videos\ground_truth\mask3.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <img src="assets\hwm\sampled_images\mask3.png" width="100%"/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample D</strong><br/>
    <video src="assets\hwm\sampled_videos\generations\mask4.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets\hwm\sampled_videos\ground_truth\mask4.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <img src="assets\hwm\sampled_images\mask4.png" width="100%"/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample E</strong><br/>
    <video src="assets\hwm\sampled_videos\generations\mask5.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets\hwm\sampled_videos\ground_truth\mask5.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <img src="assets\hwm\sampled_images\mask5.png" width="100%"/>
    <em>Overlay / Comparison</em>
  </div>
</div>



#### Flow-Matching Model
<div style="display: flex; flex-wrap: wrap; gap: 2rem; margin-top: 1rem;">

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample A</strong><br/>
    <video src="assets\hwm\sampled_videos\generations\flow1.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets\hwm\sampled_videos\ground_truth\flow1.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <img src="assets\hwm\sampled_images\flow1.png" width="100%"/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample B</strong><br/>
    <video src="assets\hwm\sampled_videos\generations\flow2.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets\hwm\sampled_videos\ground_truth\flow2.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <img src="assets\hwm\sampled_images\flow2.png" width="100%"/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample C</strong><br/>
    <video src="assets\hwm\sampled_videos\generations\flow3.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets\hwm\sampled_videos\ground_truth\flow3.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <img src="assets\hwm\sampled_images\flow3.png" width="100%"/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample D</strong><br/>
    <video src="assets\hwm\sampled_videos\generations\flow4.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets\hwm\sampled_videos\ground_truth\flow4.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <img src="assets\hwm\sampled_images\flow4.png" width="100%"/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample E</strong><br/>
    <video src="assets\hwm\sampled_videos\generations\flow5.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets\hwm\sampled_videos\ground_truth\flow5.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <img src="assets\hwm\sampled_images\flow5.png" width="100%"/>
    <em>Overlay / Comparison</em>
  </div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample F</strong><br/>
    <video src="assets\hwm\sampled_videos\generations\flow6.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets\hwm\sampled_videos\ground_truth\flow6.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <img src="assets\hwm\sampled_images\flow6.png" width="100%"/>
    <em>Overlay / Comparison</em>
  </div>
</div>

  <div style="flex: 1; min-width: 300px;">
    <strong>Sample G</strong><br/>
    <video src="assets\hwm\sampled_videos\generations\flow5.mp4" width="100%" controls></video><br/>
    <em>Predicted</em><br/>
    <video src="assets\hwm\sampled_videos\ground_truth\flow5.mp4" width="100%" controls></video><br/>
    <em>Ground Truth</em><br/>
    <img src="assets\hwm\sampled_images\flow7.png" width="100%"/>
    <em>Overlay / Comparison</em>
  </div>

---

### Architecture Diagrams
#### Masked Video Transformer
![Masked Architecture](assets\hwm\architecture_diagrams\mask_architecture.png)

#### Flow-Matching Model
![Flow Architecture](assets\hwm\architecture_diagrams\flow_architecture.png)

---

### Quantitative Performance

| Model Variant      | FID ↓ | PSNR ↑ | Params (B) | Samples/sec |
|--------------------|-------|--------|-------------|--------------|
| Masked-HWM (Base)  | 10.13 | 29.02 dB | 0.321       | 2.27         |
| Masked-HWM (Full Sharing) | 14.21 | 28.66 dB | **0.195** | **2.36**     |
| Flow-HWM (Base)    | 111.59 | 20.42 dB | 1.36        | 1.69         |
| Flow-HWM (Full Sharing) | **110.73** | 20.43 dB | **0.648** | **1.91**     |


### Citation

If you use this work, please cite our ICML workshop paper:

> Ali, Q., Sridhar, A., Matiana, S., Wong, A., & Al-Sharman, M. (2025). *Humanoid World Models: Open World Foundation Models for Humanoid Robotics*. ICML Workshop on Physically Plausible World Models.

---

For code, data, or collaboration inquiries, contact [Qasim Ali](mailto:m45ali@uwaterloo.ca).