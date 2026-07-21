---
title: MIMIC-CXR - radiographs and reports as multimodal medical data
tags:
  - datasets-and-corpora
  - medical-imaging
  - chest-xray
  - multimodal-ai
  - dicom
  - language
  - health-data
---

# MIMIC-CXR - radiographs and reports as multimodal medical data

## Source

Dataset: *MIMIC-CXR Database v2.1.0*  
Platform: PhysioNet  
URL: https://physionet.org/content/mimic-cxr/2.1.0/  
DOI: https://doi.org/10.13026/4jqj-jw95

Key references:

- Johnson, A. E. W., Pollard, T. J., Berkowitz, S. J., Greenbaum, N. R., Lungren, M. P., Deng, C.-Y., Mark, R. G., & Horng, S. (2019). *MIMIC-CXR, a de-identified publicly available database of chest radiographs with free-text reports*. Scientific Data, 6, 317. https://doi.org/10.1038/s41597-019-0322-0
- Gichoya, J. W., Banerjee, I., Bhimireddy, A. R., et al. (2022). *AI recognition of patient race in medical imaging: A modelling study*. The Lancet Digital Health, 4(6), e406–e414. https://doi.org/10.1016/S2589-7500(22)00063-2
- Liang, H., Ni, K., & Balakrishnan, G. (2023). *X-ray recognition: Patient identification from X-rays using a contrastive objective*. arXiv. https://arxiv.org/abs/2305.00149

## Image and report

MIMIC-CXR is a large open database of chest radiographs and free-text radiology reports. Its importance is not only scale. It joins two kinds of medical inscription: the image and the written interpretation.

The radiograph records the body through X-ray imaging. The report translates that image into clinical language. Together, they form a paired object: a visual record and a textual account produced inside a hospital workflow.

This makes MIMIC-CXR central for multimodal medical AI. A model can be trained not only to classify visual abnormalities, but also to connect pixels with language, generate findings, retrieve reports, or align image regions with clinical descriptions. The body enters computation both as image and as text.

## De-identified clinical material

MIMIC-CXR contains hundreds of thousands of chest X-ray images corresponding to more than two hundred thousand radiographic studies performed at Beth Israel Deaconess Medical Center in Boston. The images are provided in DICOM format and paired with de-identified reports written by radiologists.

This structure creates a specific kind of archive. The patient name is removed, but the image remains linked to a clinical reading. The report gives the scan a language layer: impressions, findings, uncertainty, absence, comparison, and diagnostic framing.

The dataset therefore does not only archive bodies. It archives a relation between body, institution, image, and medical language.

## Vision-language body

MIMIC-CXR is useful for thinking about the body as a vision-language object. In older anatomical traditions, image and text were also combined: labels, captions, diagrams, plates, atlases, explanatory legends. MIMIC-CXR continues this relation inside a computational environment.

The difference is that the pairing can now be used at scale. Image and text become aligned training material. The report is no longer only a human interpretation of a radiograph; it can become a label, target, prompt, semantic embedding, or evaluation reference.

A simplified workflow might be:

```text
patient encounter → chest X-ray → DICOM image → radiology report → de-identification → dataset → vision-language model
```

In this chain, the body becomes available not only to visual classification, but to automated description.

## Machine-readable signals

MIMIC-CXR also appears in studies that complicate the limits of anonymization and visual interpretation. Gichoya et al. showed that AI models can predict self-identified race from medical images, including chest radiographs, even when human experts cannot recognize that information from the same images.

This does not mean that race is a biological essence directly visible in the radiograph. The more difficult question is how social, technical, anatomical, institutional, and statistical traces become encoded in images in ways that models can exploit.

Liang, Ni, and Balakrishnan extend the problem in another direction. Their work shows that models can distinguish whether different X-rays belong to the same person. This makes the chest radiograph appear not only as a diagnostic image, but as a possible biometric trace.

These studies change how MIMIC-CXR should be read in the archive. It is not just a useful public dataset. It is also a site where privacy, identity, and machine perception become unstable.

## Why this matters for the archive

MIMIC-CXR is useful for *Conjuring the Body* because it stages the movement from body to image, from image to language, and from language to model training. It demonstrates that medical data is not only visual. It is also textual, institutional, and relational.

The paired radiograph-report structure makes the clinical body trainable in a particular way. The image can be read through the report, and the report can be generated or predicted through the image. The body becomes a hinge between seeing and saying.

This also exposes a central tension. De-identification may remove direct personal information, but machine learning can still recover or infer forms of identity that were not meant to remain visible. The subject is administratively absent, but computationally traceable.

## Connected notes

- [[Race as machine-readable signal]]
- [[Medical images as biometric traces]]
- [[Black box medical imaging]]
- [[Dataset composition and generalization]]
- [[Opt-out as default consent]]
