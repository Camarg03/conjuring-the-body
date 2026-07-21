---
title: WORC Database - Rotterdam radiomics corpus
tags:
  - datasets-and-corpora
  - radiomics
  - rotterdam
  - erasmus-mc
  - oncology
  - machine-learning
  - medical-imaging
---

# WORC Database - Rotterdam radiomics corpus

## Source

Dataset: *WORC Database*  
Platform: XNAT / Health-RI  
URL: https://xnat.health-ri.nl/data/projects/worc

Key reference:

- Ruiz Pujadas, E., Hernández-González, J., Dang, V. N., Camacho, M., Lekadir, K., & Starmans, M. P. A. (2026). *Bias and fairness in radiomics: A comparative analysis of machine learning models on four oncology datasets*. International Journal of Imaging Systems and Technology, 36(2), e70329. https://doi.org/10.1002/ima.70329

## Rotterdam as data site

The WORC Database is important for *Conjuring the Body* because it anchors the project in Rotterdam's medical and scientific infrastructure. The database contains imaging data, segmentations, and ground truth labels from anonymized patients collected at Erasmus Medical Center. It includes different tumor types and was built for radiomics and machine learning research.

This makes WORC more than a reference dataset. It is a local example of how bodies become part of an open research infrastructure. The body is not only scanned; it is segmented, labeled, organized, and made available for computational comparison.

## Radiomics

Radiomics treats medical images as sources of quantitative features. Instead of reading a scan only as a visual image, radiomics extracts measurements from regions of interest: texture, shape, intensity, heterogeneity, spatial patterns, and other numerical descriptors.

This shifts the image away from visual representation and toward feature space. A tumor can become a vector of values. A segmented region can become a statistical profile. A scan can be used not only to see disease, but to predict diagnosis, phenotype, genetics, treatment response, or outcome.

A simplified radiomics chain might look like this:

```text
medical image → segmentation → feature extraction → labels / ground truth → machine learning model → prediction or classification
```

The scan becomes operational through segmentation and quantification. What matters is not only what is visible to the eye, but what can be extracted as measurable pattern.

## Segmentation and ground truth

The presence of segmentations and ground truth labels is crucial. Segmentation defines which part of the image is treated as meaningful. Ground truth labels define what the model should learn to predict or classify.

Neither operation is neutral. Segmentation draws a boundary. A label stabilizes a category. Together, they convert anatomical and pathological complexity into an object that can be used by machine learning.

For the archive, this is a key passage: the body does not become a dataset only because it is imaged. It becomes a dataset when an image is connected to a region, a label, a diagnostic category, and an evaluative task.

## Fairness inside radiomics

Ruiz Pujadas et al. analyze four oncology datasets from the WORC Database and compare machine learning models across demographic groups. Their study is important because it shows that good overall performance does not guarantee equal behavior across age or sex groups.

This is a subtle but important point. A radiomics model can appear successful when measured globally, while still performing unevenly for particular groups. Bias is not always visible at the level of the general score. It may appear only when performance is disaggregated.

This connects WORC directly to the larger question of fairness in medical AI. The issue is not only whether a model works, but for whom it works, under which data conditions, and with what consequences.

## Why this matters for the archive

WORC allows *Conjuring the Body* to address medical imaging as local infrastructure. Rotterdam is not only the place from which the archive is being developed; it is also part of the medical data ecosystem the project is studying.

The database also clarifies the relation between body, image, and abstraction. In radiomics, the medical image is not primarily an image to be looked at. It is a reservoir of computable features. The body is decomposed into measurable texture, shape, and intensity.

This gives the project a specific question: what remains of bodily presence when the image is no longer primarily visual, but predictive?

## Connected notes

- [[Fairness and bias in radiomics]]
- [[Dataset composition and generalization]]
- [[AWS medical AI workflow]]
- [[Black box medical imaging]]
- [[The Cancer Imaging Archive - heterogeneous cancer image collections]]
- [[Data colonialism in digital health]]
