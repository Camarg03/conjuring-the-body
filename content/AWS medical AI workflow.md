---
title: AWS medical AI workflow
tags:
  - infrastructure
  - medical-imaging
  - cloud
  - ai
  - data-governance
---

# AWS medical AI workflow

AWS does not only offer isolated cloud services; it offers an integrated infrastructure through which medical data can be stored, standardized, connected, analyzed, and eventually used for machine learning. In this workflow, the body enters the cloud as a medical file, but it does not remain only as an image. It becomes part of a wider computational environment where images, clinical records, genomic data, permissions, metadata, and AI models can be connected.

A simplified workflow would look like this:

```text
Medical scan
→ DICOM file
→ AWS HealthImaging
→ clinical metadata / image frames
→ AWS HealthLake / AWS HealthOmics
→ Amazon SageMaker
→ AI model training or inference