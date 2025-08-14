---
layout: page
title: SRA Sequence Search
description: 
---

This project focuses on building a scalable system for efficient similarity search across large‑scale genomic datasets from the Sequence Read Archive (SRA), which currently exceeds 1 petabyte in size.

We developed a dedicated embedding model that encodes SRA short‑read sequences into compact 128‑bit binary vectors.
These embeddings are designed to preserve the relative similarity between sequences, enabling fast and accurate nearest‑neighbor search.

The model was trained using a triplet loss objective, where each training sample consists of:

Anchor sequence (A)
Positive sequence (P) — similar to the anchor
Negative sequence (N) — dissimilar to the anchor


The triplet loss encourages the distance between the anchor and positive to be smaller than between the anchor and negative by a margin $m$:

$$
\mathcal{L} = \max\left(0, \; d(A, P) - d(A, N) + m \right)
$$

where $d(\cdot, \cdot)$ denotes the distance metric in embedding space (e.g., Hamming distance for binary vectors).

![](/triplet_loss.png)

Using these embeddings, we built a terabyte‑scale sequence similarity database capable of sub‑second search over billions of encoded reads. This approach significantly reduces storage requirements and search latency compared to raw sequence matching, making it practical to explore massive genomic datasets.