---
title: Medical images as biometric traces
tags:
  - infrastructure
  - medical-imaging
  - privacy
  - reidentification
  - biometrics
  - xray
  - anonymization
---

# Medical images as biometric traces

## Source

Key reference:

- Liang, H., Ni, K., & Balakrishnan, G. (2023). *X-ray recognition: Patient identification from X-rays using a contrastive objective*. arXiv. https://arxiv.org/abs/2305.00149

Related reference:

- Packhäuser, K., Gündel, S., Münster, N., Syben, C., Christlein, V., & Maier, A. (2021). *Deep learning-based patient re-identification is able to exploit the biometric nature of medical chest X-ray data*. Scientific Reports, 12, 14851. https://doi.org/10.1038/s41598-022-19045-3

## After the name is removed

Medical datasets often depend on de-identification. Names, dates, addresses, and other direct identifiers are removed so images can circulate for research. But de-identification does not necessarily erase all forms of traceability.

Liang, Ni, and Balakrishnan show that deep learning models can distinguish whether different X-rays belong to the same person. This reframes the medical image as a possible biometric trace. The image does not only show a chest, a bone structure, or a pathology. It may also carry enough bodily specificity for a model to recognize continuity across images.

For *Conjuring the Body*, this is a crucial question: what remains of the subject inside an anonymized fragment?

## Biometric without intention

A passport photograph is intentionally biometric. A fingerprint is intentionally biometric. A medical image is usually not understood that way. It is produced for diagnosis, treatment, or research.

The problem is that machine learning can make a medical image behave biometrically even when that was not its purpose. A chest X-ray can become an identity trace because the body contains structural features, acquisition patterns, or anatomical consistencies that persist across images.

This does not mean that a human viewer can simply identify the patient by looking. The biometric relation may emerge only through model training and comparison.

## Anonymization as partial transformation

Anonymization removes a layer of identity, but it does not remove embodiment. The image still comes from a particular body. The scan preserves structural relations, anatomical proportions, histories of injury, disease, growth, posture, and technical acquisition.

The anonymized medical image is therefore not empty of identity. It is detached from administrative identity while retaining bodily specificity.

This distinction is important for the project. The body is not simply lost when it becomes data. It can persist as a residual pattern.

## Recognition across fragments

The idea of recognition across X-rays changes the status of the medical fragment. A fragment can be compared with another fragment and recognized as belonging to the same body. This suggests that the archive does not only contain isolated images; it may contain latent relations between images.

A simplified chain might look like this:

```text
image A → learned representation → image B → similarity comparison → same patient / different patient
```

The subject returns not through name, face, or biography, but through computational similarity.

## Privacy and residual presence

This has privacy implications because public datasets are often built on the assumption that de-identified images are safe enough to share. If medical images can support re-identification or patient matching, then privacy risk is not only in metadata. It can also be in the image itself.

But for this archive, the question is also aesthetic and conceptual. The biometric trace suggests that the body remains present even when fragmented, anonymized, and abstracted. The scan becomes both separated from the person and still marked by them.

This tension is close to the project's core idea of conjuring. The body is absent as biography, but present as pattern.

## Why this matters for the archive

Medical images as biometric traces give *Conjuring the Body* a way to speak about residual identity without returning to portraiture or full bodily reconstruction. The point is not to restore the person as a complete image. The point is to recognize that the fragment may still carry a form of bodily memory.

The medical image becomes unstable: anonymous but recognizable, detached but specific, technical but intimate.

## Connected notes

- [[MIMIC-CXR - radiographs and reports as multimodal medical data]]
- [[Opt-out as default consent]]
- [[Black box medical imaging]]
- [[Race as machine-readable signal]]
- [[Dataset composition and generalization]]
- [[Audiovisual documentation register]]
