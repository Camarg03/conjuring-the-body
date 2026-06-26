---
title: Blender - TIFF stack to volume render
tags:
  - technical-workflow
  - medical-imaging
  - blender
  - visualization
  - volume-rendering
  - data-conversion
---

# Blender - TIFF stack to volume render

This note documents a technical workflow from the tutorial *How to import Medical scans into Blender 3.0*. The tutorial shows how to transform a stack of medical scan images into a volumetric render inside Blender. It does not import DICOM or NIfTI data directly into Blender. Instead, it works from a sequence of regular images, such as TIFF files, and uses Blender’s UDIM system as a way to map those slices into a volumetric object.

## Source

Video: *How to import Medical scans into Blender 3.0*  
URL: https://www.youtube.com/watch?v=TPX3_j2aeMg&t=12s

<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; max-width:100%; margin:0 0 2rem 0;">
  <iframe 
    src="https://www.youtube.com/embed/TPX3_j2aeMg?start=12" 
    title="How to import Medical scans into Blender 3.0"
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>

## Workflow

The workflow can be summarized as:

medical scan → image stack → TIFF sequence → UDIM numbering → Blender → shader node group → volumetric render

The scan does not become visible by itself. It has to be converted, renamed, mapped, corrected, scaled, and rendered. Each operation changes the relation between the original medical data and the image that becomes available inside Blender.

## What the tutorial does

The tutorial begins with a medical volume already rendered in Blender. The example appears as a head or brain volume made from a stack of scan images. The process then moves backward through the technical steps required to make this possible: preparing the image sequence, renaming it according to UDIM conventions, appending a prepared Blender setup, loading the images into a shader node group, and correcting the visual result through mapping and scale adjustments.

The important point is that Blender is not reading the medical scan as a medical file. It is reading a prepared image sequence. The medical data has already passed through a conversion stage before it enters the 3D environment.

## Technical steps

### 1. Convert medical data into an image stack

The tutorial assumes that the medical scan has already been converted into a stack of regular images. It mentions that medical data can come in many formats and that this conversion may require external scripts or tools.

The recommended format is TIFF, especially when the file can preserve a high bit depth. This matters because medical images often contain more information than ordinary display images. Treating them as simple pictures can reduce or distort the data.

### 2. Rename the sequence as UDIM tiles

The tutorial uses UDIM numbering as a workaround for loading many image slices into Blender. The sequence must be renamed so that the numbering starts at:

1001

A sequence might look like:

scan.1001.tiff  
scan.1002.tiff  
scan.1003.tiff  
scan.1004.tiff

This step is important because the UDIM system allows Blender to handle the sequence as a structured set of image tiles. In this workflow, UDIMs are used less as texture tiles and more as a way to index image slices.

### 3. Open Blender and prepare the render environment

Inside Blender, the tutorial sets up the scene for volumetric rendering. The basic configuration includes:

- switching the render engine to Cycles
- enabling GPU rendering
- turning off world lighting
- adding a point light
- appending a prepared volume setup from a Blender file

The tutorial uses a prepared file called something like:

UDIMs to Volume.blend

This file contains a volume object and a shader node group designed to read the image sequence.

### 4. Load the image sequence as UDIMs

In the Shader Editor, the image sequence is loaded through an image texture node using the UDIM numbering. The color space is changed from:

sRGB → Non-Color

This is a small but conceptually important operation. The images are not treated as ordinary color photographs. They are treated as data-like image slices whose values need to be interpreted without color correction.

### 5. Set the number of slices

The node group includes a setting for the number of slices. This value must match the number of images in the sequence.

slice count = number of images

If the slice count is wrong, the volume will not be reconstructed correctly.

### 6. Adjust values with Map Range

The tutorial shows that the raw result may appear overexposed or noisy. A Map Range node is used to remap intensity values and reduce unwanted visual artifacts. This step is not neutral: it changes what becomes visible, what becomes hidden, and how the volume appears.

### 7. Correct the volume dimensions

The initial volume may appear distorted because the dimensions of the image stack do not automatically match the dimensions of the 3D domain. The tutorial corrects this with a Geometry Nodes modifier.

The logic is:

X dimension = image width  
Y dimension = image height  
Z dimension = slice count

This step translates the structure of the image stack into the proportions of the 3D volume.

### 8. Render and further manipulate the volume

Once the volume is reconstructed, it can be modified through Blender’s shader system. The tutorial mentions the possibility of using math nodes, procedural textures, and other shader operations to produce different visual results.

At this stage, the medical scan has become a volumetric object inside an artistic and cinematic software environment.

## Conceptual relevance

This workflow is valuable for *Conjuring the Body* because it makes visible the technical chain through which medical data becomes an image again. The scan does not simply move from medical diagnosis into artistic visualization. It is translated through a series of operations: conversion, renaming, indexing, color-space correction, value remapping, scaling, lighting, and rendering.

In this workflow, the body is not imported as a body. It is reconstructed from slices.

The image stack is a fragmented body. Each slice contains partial information, but the volume appears only when the sequence is ordered, mapped, and rendered. The body emerges from technical coordination.

> In this workflow, the medical image is not simply imported into Blender; it is translated through a sequence of technical operations that reorganize the body as a volumetric object.

This connects to a larger question in the project: what happens to bodily presence when it depends on a chain of conversions? The medical scan is already an abstraction of the body, but the Blender workflow adds another layer of abstraction. The body becomes a stack, then a sequence, then UDIM tiles, then a shader input, then a volume.

## Why this matters for the archive

This tutorial belongs to the technical workflow line of the project. It documents a practical method for working with medical imaging, but it also shows where artistic interpretation enters the process.

Every technical decision affects the image:

- file format affects what information is preserved
- naming conventions affect whether the stack can be read
- color space affects how image values are interpreted
- slice count affects the coherence of the volume
- Map Range affects visibility and noise
- scale correction affects bodily proportion
- lighting and shaders affect aesthetic presence

The workflow is therefore both technical and interpretive. It is not only a method for importing data. It is a method for deciding how a fragment of the body becomes visible.

## Related notes

- [[AWS medical AI workflow]]
- [[Black box medical imaging]]
- [[The body as anatomical territory]]
