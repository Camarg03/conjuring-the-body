---
title: The Cancer Imaging Archive - heterogeneous cancer image collections
tags:
  - datasets-and-corpora
  - medical-imaging
  - cancer-imaging
  - dicom
  - ai
  - data-governance
---

# The Cancer Imaging Archive - heterogeneous cancer image collections

## Source

Dataset: *The Cancer Imaging Archive* / TCIA  
Website: https://www.cancerimagingarchive.net/  
Official description: https://www.cancerimagingarchive.net/about-the-cancer-imaging-archive-tcia/  
Browse collections: https://www.cancerimagingarchive.net/browse-collections/

Key references:

- Dulaney, A., & Virostko, J. (2024). *Disparities in the demographic composition of The Cancer Imaging Archive*. Radiology: Imaging Cancer, 6(1), e230100. https://doi.org/10.1148/rycan.230100
- Eary, J. F., Shankar, L. K., Freymann, J., & Kirby, J. (2024). *Clarification of concerns about the demographic composition of The Cancer Imaging Archive*. Radiology: Imaging Cancer, 6(3), e240098. https://doi.org/10.1148/rycan.240098

## A cancer image archive, not a single dataset

The Cancer Imaging Archive is one of the most important open repositories for cancer-related medical imaging. It publishes de-identified imaging datasets for public research use and organizes them as collections. These collections are usually defined by disease type, anatomical site, imaging modality, research project, or a specific scientific focus.

For *Conjuring the Body*, TCIA is important because it shows how medical images leave the clinical encounter and become research infrastructure. A CT scan, MRI, PET scan, radiograph, or pathology image can move from diagnosis into a public archive, where it becomes downloadable, comparable, citable, and usable in computational workflows.

TCIA should not be understood as one homogeneous database. It is a federation of collections, each with its own patient cohort, modality, metadata, annotation practices, institutional origin, and conditions of acquisition. Some collections include only images. Others may include segmentations, clinical outcomes, treatment information, genomics, pathology, expert analyses, or derived annotations.

This heterogeneity is not a detail. It is the structure of the archive. The bodies inside TCIA do not enter as one unified population; they enter through projects, diagnoses, institutions, protocols, and research agendas.

## From de-identification to reusability

TCIA depends on de-identification. Images are prepared so that personal identifiers are removed or altered before public release. This makes research sharing possible, but it also creates an important conceptual shift. The medical image is separated from the named patient and reattached to another system of identity: collection name, subject ID, series metadata, diagnosis, annotation, modality, and research task.

The body is not simply made anonymous. It is reorganized. It becomes usable through a different set of relations.

This distinction matters for the project because anonymization is often imagined as removal. In practice, it is also a form of production. It removes some identifiers while preserving enough structure for the image to remain valuable as scientific data. The image must become less personal, but not meaningless. It must lose the name while retaining enough bodily, clinical, and technical specificity to support analysis.

## Dataset composition and generalization

Dulaney and Virostko examine TCIA through the question of demographic composition. Their study reviewed 189 TCIA studies and found that only a smaller subset of human oncology collections contained usable demographic information. Their concern is not simply whether the archive is large, but whether its composition allows AI tools trained on it to generalize across populations.

This is a crucial problem for medical AI. A model can perform well inside the data environment that shaped it and still fail, degrade, or behave unevenly when used on bodies underrepresented in that environment. Generalization is not only a technical property of an algorithm; it is also an archival and demographic question.

The response by Eary, Shankar, Freymann, and Kirby is useful as a counterpoint. It argues that TCIA should be interpreted in relation to its original goals and the heterogeneity of its contributing studies. This does not erase the problem of representation. Instead, it clarifies the archive's condition: TCIA is not a population survey, but a public research archive assembled from many projects.

The controversy is productive for this archive because it shows that a medical image repository is never neutral. It has a history of collection, contribution, absence, permission, institutional capacity, and uneven representation.

## Operational body

Inside TCIA, the body becomes operational in several ways. It can be opened as an image, downloaded as a file, indexed through DICOM metadata, segmented into anatomical or pathological regions, compared with other cases, and used to train or test automated systems.

A simplified chain might look like this:

```text
cancer patient → clinical scan → de-identified DICOM → TCIA collection → annotations / metadata → computational model → segmentation, classification, prediction, or evaluation
```

This chain does not erase the original body completely. It changes the conditions through which that body can be approached. The image no longer belongs only to a diagnostic event. It becomes part of a distributed archive where it can be reused in ways the patient may never see.

## Why this matters for the archive

TCIA gives *Conjuring the Body* a concrete site where several existing questions meet: medical imaging, anonymization, dataset construction, public research access, AI training, and demographic unevenness.

It also complicates the idea of the fragment. A scan in TCIA is not only a visual fragment of a body. It is also a fragment of a dataset, a fragment of an institutional project, and a fragment of a larger history of who becomes available to computation.

The question is therefore not only what a cancer image shows, but what kind of body the archive makes possible: a body without a name, but with metadata; without biography, but with diagnosis; without voice, but with statistical usefulness.

## Connected notes

- [[Dataset composition and generalization]]
- [[Black box medical imaging]]
- [[AWS medical AI workflow]]
- [[Opt-out as default consent]]
- [[Data colonialism in digital health]]
- [[WORC Database - Rotterdam radiomics corpus]]
