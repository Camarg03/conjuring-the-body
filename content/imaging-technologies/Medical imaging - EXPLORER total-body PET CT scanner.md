---
title: Medical imaging - EXPLORER total-body PET CT scanner
type: technology-reference
category: imaging-technologies
tags:
  - medical-imaging
  - pet-ct
  - scanner
  - total-body-imaging
  - radiotracer
  - dynamic-imaging
---

# Medical imaging - EXPLORER total-body PET CT scanner

## Source

Article: BBC Mundo article on the first 3D scanner capable of imaging the entire human body  
Publisher: BBC Mundo  
URL: https://www.bbc.com/mundo/noticias-45880391

Reference sources:  
UC Davis Health: EXPLORER Total Body PET Scanner  
https://health.ucdavis.edu/radiology/myexam/PET/Equipment/explorer.html

Paper: Badawi et al., *First Human Imaging Studies with the EXPLORER Total-Body PET Scanner*, *Journal of Nuclear Medicine*, 2019  
https://pmc.ncbi.nlm.nih.gov/articles/PMC6424228/

Manufacturer reference: United Imaging, uEXPLORER Total-body PET/CT  
https://eu.united-imaging.com/en/product-service/products/mi/uexplorer

## What this entry archives

This entry documents EXPLORER / uEXPLORER as a total-body PET/CT imaging technology. It is not a software workflow, a Blender technique, or a method for converting existing scan slices into a visual object. It belongs to a different category: medical imaging devices that change the way the body is acquired as data.

The relevance of EXPLORER is that it expands PET/CT from a segmented or region-based acquisition into a whole-body, simultaneous, dynamic imaging system. Instead of assembling a body from multiple bed positions or focusing on a limited anatomical region, the scanner is designed to acquire PET data across the entire adult human body in a single scan field.

## Technology described

EXPLORER is a total-body PET/CT scanner developed through a collaboration between UC Davis researchers and United Imaging Healthcare. The system combines positron emission tomography and computed tomography. PET records the distribution and movement of radiotracers inside the body. CT provides anatomical localization and attenuation correction.

The key technical distinction is its long axial field of view. The EXPLORER / uEXPLORER system has a PET axial field of view of approximately 194 cm, long enough to cover the entire adult body in one bed position. This differs from conventional PET/CT systems, which usually image only a smaller axial region at one time and reconstruct whole-body studies by moving the patient through multiple bed positions.

The scanner therefore changes the temporal and spatial logic of PET imaging. The body can be imaged as one simultaneous physiological field rather than as separate segments stitched together across time.

## Imaging modality

The system combines two imaging modalities:

PET: a functional molecular imaging technique that tracks radiotracers introduced into the body. PET can show metabolic activity, tracer uptake, pharmacokinetics, and disease processes.

CT: an anatomical X-ray-based imaging technique that provides structural context and supports PET correction and localization.

The combined PET/CT system produces a registered anatomical-functional image. CT gives spatial structure; PET gives molecular or physiological activity.

In a total-body PET/CT system, this registered anatomical-functional image is extended across the full body.

## What changes technically

The main change is sensitivity. Because the scanner surrounds a much longer portion of the body with detectors, it captures a higher fraction of emitted PET signal. This increased sensitivity can be used in several ways:

- to reduce scan time;
- to reduce injected radiotracer dose;
- to improve image quality;
- to support delayed imaging;
- to support dynamic whole-body acquisitions;
- to track radiotracer movement through the body over time.

The first human imaging studies describe the 194 cm axial field of view as sufficient to cover the entire adult human body in a single acquisition. UC Davis describes EXPLORER as a scanner that acquires PET imaging from head to toe at the same time.

This matters because conventional whole-body PET/CT is not truly simultaneous. It is usually acquired in steps. EXPLORER makes it possible to observe the body as a continuous dynamic system.

## Dynamic body imaging

One of the most important features of total-body PET is dynamic imaging. Because the entire body is inside the PET field of view, the scanner can follow the motion of radiotracers across organs and tissues over time.

This makes the body visible as a pharmacokinetic and physiological system. A tracer can be observed as it enters the bloodstream, passes through organs, accumulates in tissues, clears through kidneys or liver, and produces time-dependent patterns of uptake.

The resulting image is not just a static 3D body. It can become a time-based whole-body dataset.

This is different from the slice-to-volume workflows in Blender, where the main question is how to reconstruct a volume from existing image slices. In EXPLORER, the acquisition device itself produces a body-scale dynamic dataset.

## Data logic

EXPLORER produces a form of body data organized around simultaneity, sensitivity, and temporal continuity.

The body is not only imaged anatomically. It is measured as a moving distribution of radiotracer activity. This gives the scanner a different data logic from CT, MRI, or anatomical slice datasets:

CT: structural density  
MRI: tissue contrast and magnetic signal  
PET: radiotracer distribution and metabolic / molecular activity  
Total-body PET/CT: registered anatomy plus whole-body tracer dynamics

The result is not only a body volume, but a body-wide activity map that can be reconstructed across time.

## Research and clinical uses

The increased sensitivity and long axial field of view create several possible uses:

- oncology imaging;
- cardiovascular imaging;
- inflammatory disease imaging;
- arthritis and musculoskeletal disease imaging;
- pharmacokinetic studies;
- drug development;
- low-dose imaging;
- delayed tracer imaging;
- whole-body dynamic studies;
- pediatric or vulnerable-patient imaging where dose reduction matters.

UC Davis presents EXPLORER as a clinical PET system for diagnosing and treating diseases such as cancer, arthritis, and cardiovascular disease. Research papers emphasize that total-body PET can support new kinds of dynamic and low-dose imaging.

For an archive of medical imaging technologies, the important point is that the scanner changes the relation between image acquisition, bodily scale, and time.

## Comparison with existing archive materials

EXPLORER should not be confused with the Blender workflows already archived.

Blender workflows usually begin after medical data already exists. They ask how to transform slices, image sequences, TIFF stacks, PNG datasets, point clouds, or tiles into volumes, meshes, renders, or visual studies.

EXPLORER belongs earlier in the chain. It is an acquisition technology. It determines what kind of medical data can be produced in the first place.

The difference can be summarized as:

Blender workflows: existing medical image data → visualization / reconstruction / render  
EXPLORER PET/CT: body + radiotracer → simultaneous total-body PET/CT dataset

This distinction is important for keeping the archive organized. Some entries document how images are processed. Others document how the body is captured as data.

## Technical cautions

The language around EXPLORER can easily become promotional: “first,” “fastest,” “whole body,” “3D scanner,” “revolutionary.” For the archive, these phrases should be translated into technical terms.

More precise terms are:

- long axial field of view;
- high sensitivity;
- simultaneous total-body PET acquisition;
- low-dose potential;
- short scan duration;
- dynamic radiotracer imaging;
- PET/CT registration;
- whole-body molecular imaging.

It is also important not to treat PET/CT images as simple photographic representations. PET images are reconstructed from detected gamma events produced by positron annihilation after radiotracer decay. The image depends on tracer biology, acquisition geometry, detector sensitivity, reconstruction algorithms, CT correction, and temporal framing.

## Archival value

This entry is useful because it marks a different scale of medical imaging. The body is not represented as a single anatomical region, a sequence of slices, or a post-processed mesh. It is captured as a whole-body field of molecular activity.

The scanner expands the body-image from anatomical form to dynamic bodily system. It makes visible the circulation, uptake, and clearance of radiolabeled compounds across the entire body.

For the archive, EXPLORER is a reference point for:

total-body imaging  
PET/CT acquisition  
dynamic medical data  
radiotracer movement  
high-sensitivity scanners  
whole-body molecular visualization  
medical imaging as capture infrastructure

## Key terms

EXPLORER  
uEXPLORER  
total-body PET  
PET/CT  
positron emission tomography  
computed tomography  
radiotracer  
axial field of view  
194 cm AFOV  
dynamic imaging  
whole-body acquisition  
molecular imaging  
low-dose imaging  
pharmacokinetics  
simultaneous body-scale imaging
