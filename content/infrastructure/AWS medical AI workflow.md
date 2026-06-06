---
title: AWS medical AI workflow
tags:
  - infrastructure
  - medical-imaging
  - cloud
  - ai
  - health-data
  - machine-learning
---

# AWS medical AI workflow

AWS does not only offer isolated cloud services; it offers an integrated infrastructure through which medical data can be stored, standardized, connected, analyzed, and eventually used for machine learning. In this workflow, the body enters the cloud as a medical file, but it does not remain only as an image. It becomes part of a wider computational environment where images, clinical records, genomic data, permissions, metadata, and AI models can be connected.

A simplified workflow would be:

Medical scan → DICOM file → AWS HealthImaging → clinical metadata and image frames → AWS HealthLake / AWS HealthOmics → Amazon SageMaker → AI model training or inference

## Main services

### AWS HealthImaging

[AWS HealthImaging](https://docs.aws.amazon.com/healthimaging/latest/devguide/what-is.html) is used to store, organize, and retrieve medical images such as MRIs, CT scans, and X-rays. It ingests DICOM images and makes them accessible through cloud APIs. Its importance is not only storage, but the way it prepares medical images to be queried, indexed, and connected to other computational processes.

### AWS HealthLake

[AWS HealthLake](https://aws.amazon.com/healthlake/) stores clinical data using the FHIR standard. This can include patient records, observations, diagnoses, encounters, reports, and other structured health information. In relation to medical imaging, HealthLake can provide the clinical context that allows an image to become more than a visual file: it can be linked to symptoms, diagnoses, treatments, and outcomes.

### AWS HealthOmics

[AWS HealthOmics](https://docs.aws.amazon.com/omics/latest/dev/what-is-healthomics.html) is used to store, process, and analyze genomic, transcriptomic, and other omics data. This allows medical imaging to be connected to biological and molecular information, producing a more complex profile of the patient as a data object.

### Amazon SageMaker

[Amazon SageMaker](https://aws.amazon.com/sagemaker/) is the platform used to build, train, deploy, and govern machine learning models. Once medical images and related clinical data are organized, SageMaker can be used to train models that classify images, detect lesions, segment organs, predict risks, or support diagnostic workflows.

## Why this matters

The critical issue is not simply that AWS stores medical data. The more important point is that AWS provides the technical environment in which different kinds of medical data can become interoperable and trainable.

A scan can be stored in HealthImaging, connected to clinical records in HealthLake, associated with genomic data in HealthOmics, and then used in SageMaker to train or run an AI model.

This means that the medical image is no longer only a representation of the body. It becomes part of an infrastructure: searchable, comparable, linkable, auditable, and potentially useful for prediction.

> The body is not transformed into data only when it is scanned, but when it enters an infrastructure that can store it, normalize it, connect it, and make it trainable.

## Data governance

This workflow also changes how governance should be understood. The question is not only whether AWS owns or directly uses the data. The deeper issue is that AWS provides the environment in which medical data becomes operational: it can be accessed through APIs, connected across services, processed by machine learning systems, and governed through permissions, contracts, regions, and opt-out policies.

In this sense, power is located not only in data ownership, but in the ability to define the technical conditions under which medical images and health records become usable.

## Related notes

- [[Black box medical imaging]]
- [[Opt-out as default consent]]