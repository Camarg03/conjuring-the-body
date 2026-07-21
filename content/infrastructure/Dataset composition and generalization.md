---
title: Dataset composition and generalization
tags:
  - infrastructure
  - datasets-and-corpora
  - medical-ai
  - bias
  - fairness
  - generalization
  - health-data
---

# Dataset composition and generalization

## Source

Key references:

- Dulaney, A., & Virostko, J. (2024). *Disparities in the demographic composition of The Cancer Imaging Archive*. Radiology: Imaging Cancer, 6(1), e230100. https://doi.org/10.1148/rycan.230100
- Eary, J. F., Shankar, L. K., Freymann, J., & Kirby, J. (2024). *Clarification of concerns about the demographic composition of The Cancer Imaging Archive*. Radiology: Imaging Cancer, 6(3), e240098. https://doi.org/10.1148/rycan.240098
- Ricci Lara, M. A., Echeveste, R., & Ferrante, E. (2022). *Addressing fairness in artificial intelligence for medical imaging*. Nature Communications, 13, 4581. https://doi.org/10.1038/s41467-022-32186-3
- Danaei, S., Dehghanian, Z., Meftah, E., Naderi, N., Safavi-Naini, S. A. A., Khorasanizade, F., & Rabiee, H. R. (2025). *State of abdominal CT datasets: A critical review of bias, clinical relevance, and real-world applicability*. arXiv. https://arxiv.org/abs/2508.13626

## The dataset is not a neutral container

Medical AI is often described as if the model were the main site of intelligence and risk. But the model learns from a dataset, and the dataset is already a constructed world. It contains some bodies and not others, some institutions and not others, some acquisition protocols and not others, some labels and not others.

Dataset composition is therefore not a background issue. It shapes what a model can learn, what it can generalize, and where it may fail.

For *Conjuring the Body*, this problem matters because the medical image is never only a scan. It is also a trace of access: access to hospitals, scanners, specialists, research programs, consent pathways, institutional archives, and computational infrastructures.

## Generalization as an archival problem

In machine learning, generalization usually means that a model trained on one set of data performs well on new data. In medical imaging, this is a technical, clinical, and political problem at the same time.

A model trained on images from one institution may not perform equally on images from another. Differences in scanners, acquisition protocols, population, disease distribution, annotation, clinical practice, image quality, and metadata can all affect performance.

The question is not simply whether the algorithm is powerful. The question is whether the archive from which it learns resembles the bodies and contexts where it will later be used.

This is why Dulaney and Virostko's analysis of TCIA matters. Their concern is not only that some demographic information is missing, but that demographic unevenness may limit the usefulness of models trained on TCIA for broader populations. The issue is intensified by the fact that public medical image datasets are often reused far beyond the original research questions that produced them.

## Heterogeneous archives

Eary, Shankar, Freymann, and Kirby's response to the TCIA demographic critique is useful because it reminds us that TCIA is not one single population study. It is an archive composed of many projects. Each collection may have different goals, inclusion criteria, and available metadata.

This does not make demographic critique irrelevant. It makes it more precise. If an archive is heterogeneous, then generalization cannot be assumed from scale alone. The number of images may be large, but the conditions under which those images were produced may be uneven.

A large archive can still contain absences. It can still overrepresent some groups, underrepresent others, and preserve the institutional patterns that made certain bodies easier to scan, store, and share.

## Bias before prediction

Bias does not appear only when a model produces an unfair output. It can be present earlier in the pipeline:

```text
access to care → imaging acquisition → dataset inclusion → metadata availability → annotation → preprocessing → training → evaluation → deployment
```

At each step, the body is filtered. Some bodies enter the system. Some are excluded. Some are richly annotated. Others are only partially described. Some images are clinically typical. Others are rare, noisy, incomplete, or institutionally inconvenient.

The dataset is therefore already a selection of reality. When the model learns from it, it learns not only anatomy or disease, but also the conditions of capture.

## Real-world applicability

Ricci Lara, Echeveste, and Ferrante argue that fairness in medical imaging AI needs to be addressed as a field-specific problem. Medical images are shaped by modality, anatomy, disease prevalence, scanner technology, clinical context, and population structure. Fairness cannot be solved only by importing general machine learning definitions.

Danaei et al.'s critical review of abdominal CT datasets extends this concern to public datasets used for CT research. Their review emphasizes problems such as dataset redundancy, selection bias, geographic concentration, clinical relevance, and domain shift. These problems matter because a public dataset can become widely used precisely because it is available, not because it fully represents clinical reality.

Availability can become authority.

## Why this matters for the archive

The body becomes computable through a chain of selections. Dataset composition is the place where those selections become difficult to see because they are absorbed into the archive itself.

For *Conjuring the Body*, this means that the medical dataset should be read as a visual-political object. It is made of images, but also of missing images. It contains bodies, but also conditions of access. It promises generalizable knowledge, but its own composition may limit what kinds of bodies can be recognized well.

A dataset is not only a collection of medical fragments. It is a map of who was available to be fragmented.

## Connected notes

- [[The Cancer Imaging Archive - heterogeneous cancer image collections]]
- [[MIMIC-CXR - radiographs and reports as multimodal medical data]]
- [[WORC Database - Rotterdam radiomics corpus]]
- [[Fairness and bias in radiomics]]
- [[Race as machine-readable signal]]
- [[Data colonialism in digital health]]
- [[Black box medical imaging]]
