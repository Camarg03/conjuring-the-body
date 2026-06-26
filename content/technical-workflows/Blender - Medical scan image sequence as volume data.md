---
title: Blender - Medical scan image sequence as volume data
tags:
  - technical-reference
  - blender
  - cycles
  - medical-imaging
  - image-sequence
  - volume-data
  - volumetric-rendering
  - osl
  - udim
---

# Blender - Medical scan image sequence as volume data

## Source

Technical discussion: *Using image sequence of medical scans as volume data in cycles*  
Platform: Blender Stack Exchange  
Question asked: 2016  
Most recent substantial update: 2024  
URL: https://blender.stackexchange.com/questions/62110/using-image-sequence-of-medical-scans-as-volume-data-in-cycles

This entry archives a technical discussion about how to make Blender / Cycles interpret a sequence of medical scan images as volumetric data. The thread is important because it documents several solutions to the same underlying problem across different moments in Blender’s development: OSL-based image lookup, sprite-sheet sampling with Cycles nodes, and a later UDIM-based workflow.

## Core problem

The original question begins with a specific limitation: Blender can load an image sequence, but the Image Texture node shows one frame at a time. The user wants to use the frame number as a spatial coordinate, so that each image in the sequence corresponds to a position along the Z axis. In other words, the goal is not to animate the scan, but to reconstruct a volume from stacked frames.

The source data is a sequence of 16-bit TIF files from the MRBrain dataset hosted by Stanford. The images are mapped in XY space, and the missing operation is the translation of frame index into Z position.

The central technical question is:

How can a 2D medical scan sequence be sampled as a 3D volume inside Cycles?

This question is foundational for many later workflows. It names the basic difficulty behind several methods in this archive: Blender can read images, but medical volumes require a way to bind image index, texture coordinates, and spatial depth into one material or object system.

## Why this thread matters

The thread is useful because it does not present a single stable solution. It shows an evolution of methods:

1. an OSL shader that reads individual files according to Z position;
2. a Cycles-only node setup that requires joining all slices into one large strip or sprite sheet;
3. a later UDIM workflow that allows the image sequence to be read natively as tiled texture data.

This makes the thread more valuable than a simple tutorial. It is a compact technical genealogy of the problem of volume reconstruction in Blender from medical scan slices.

The discussion also clarifies a recurring tradeoff:

A method can be flexible and direct, but limited to CPU rendering.  
A method can be GPU-compatible, but may require preprocessing the image sequence.  
A method can become simpler when Blender introduces a new texture convention, such as UDIM.

## Method 1: OSL shader reading individual images

One solution uses an Open Shading Language shader. The OSL script receives object coordinates, reads the Z component, calculates which frame number corresponds to that Z position, constructs the filename, and samples the correct TIF file at the XY coordinate.

The relevant inputs include:

- vector position;
- directory;
- filename prefix;
- file extension;
- number of digits in the frame counter;
- first frame;
- last frame;
- object elevation or Z range.

The shader then creates a formatted filename such as `prefix003.tif`, samples that image, and outputs the result as color or non-color data.

This method is conceptually clean because the image sequence can remain as individual files. The volume material decides which file to read based on spatial position. It treats the scan folder as a stack of addressable slices.

The limitation is that OSL in Cycles requires CPU rendering. This makes the method less practical for heavy volumetric datasets, especially when the medical image sequence is large. A later comment also notes that the initial algorithm does not interpolate between data points along the Z axis, which can produce stepped or discontinuous sampling between slices.

## Method 2: Sprite sheet / strip image with Cycles nodes

Another solution avoids OSL and uses only Cycles nodes. This is important because OSL was not supported on GPU. The tradeoff is that the image sequence must first be converted into one large strip image or sprite sheet.

The method joins all slices into a single image. The node system then uses the Z coordinate to calculate an offset into that strip. Instead of choosing between separate image files, the material samples different regions of one large texture.

The original question accepts this solution because it allows GPU rendering. The thread mentions ImageMagick as a practical way to concatenate the TIF sequence into one image strip, using a command of the form:

```bash
convert +append *.tif anim.tif
```

In this method, the medical scan is not preserved as a folder of slices during rendering. It is preprocessed into a single texture atlas. The atlas is then spatially decoded in the shader.

This workflow is more compatible with Cycles GPU rendering, but it introduces a preprocessing step and can produce very large texture files. It is therefore useful, but not elegant.

## Method 3: UDIM image sequence as volume texture

A later answer updates the problem after UDIM support became available in Blender. The UDIM approach changes the workflow because the image sequence no longer needs to be stitched into one sprite sheet, and it no longer depends on OSL.

The practical requirement is file naming. The images must follow Blender’s UDIM numbering convention, starting at `1001`. A sequence might be named like:

```text
filename_1001.png
filename_1002.png
filename_1003.png
...
```

When the first image is opened through an Image Texture node, Blender recognizes the UDIM sequence and arranges the tiles automatically. A node group can then offset the image positions in texture space, turning the UDIM tile set into volume-like sampling.

This is the same family of solution used in the external tutorial already archived as `Blender - TIFF stack to volume render`. That tutorial’s logic—renaming slices as UDIMs, loading them through an Image Texture node, and using a shader node group to reconstruct volume—can be understood as a practical continuation of this Stack Exchange thread.

## Density, value range, and visibility

The UDIM answer also addresses a key problem in medical scan visualization: raw volume textures can appear too soft or faint. The answer recommends multiplying the texture values, with examples such as Multiply 100 or Multiply 1000, depending on the source data.

This is technically important because medical images are grayscale value fields. The visibility of anatomical structures depends on how those values are remapped before entering the volume shader.

The thread mentions the use of Color Ramp, Map Range, or more complex math between the Image Texture node and the Multiply node. These controls allow the user to isolate specific grayscale ranges, making different structures more visible, such as muscles, veins, or bones.

This is not a cosmetic step. It is the operation that turns a raw scan value field into a readable volume. The same scan data can produce different anatomical emphasis depending on thresholding, multiplication, range mapping, and step rate.

## Volume quality and render settings

The UDIM answer also notes the importance of Cycles volume step settings. Lowering the Render / Viewport Step Rate, for example to 0.1, can produce a denser or more detailed result. This matters because volumetric rendering samples the volume at intervals. If the step rate is too coarse, fine anatomical information may be missed or blurred.

The thread therefore links three layers of control:

- texture organization: OSL, sprite sheet, or UDIM;
- value interpretation: multiply, color ramp, map range;
- volume sampling: render step rate and viewport step rate.

These layers are often treated separately, but in practice they define the final appearance together.

## Technical comparison of the three methods

The OSL method keeps the scan sequence as separate files and makes the shader choose a file based on Z position. It is direct and flexible, but CPU-bound and dependent on OSL.

The sprite-sheet method converts all images into one large atlas. It works with ordinary Cycles nodes and can render on GPU, but it requires preprocessing and may produce very large images.

The UDIM method uses Blender’s tiled texture convention to organize the image sequence natively. It avoids both OSL and sprite-sheet stitching, but requires strict file naming and a node group that converts UDIM tile space into volume sampling.

These methods are not interchangeable in a simple way. Each one reorganizes the scan differently before Blender can treat it as volume data.

## Relation to current archive

This entry should be treated as a reference node for the technical problem of transforming medical image slices into volumetric data in Blender.

It connects conceptually and technically to several workflows already being archived:

- TIFF stack workflows that use UDIM numbering;
- Visible Human slice workflows that spatialize anatomical PNG sequences;
- image-sequence workflows that generate point clouds or mesh-like structures;
- Scan Data Visualizer workflows that convert scan slices into tiled or flipbook images;
- multimodal pipelines where segmented or reconstructed data must be aligned into a 3D environment.

The shared operation is always some version of:

2D slice sequence  
→ spatial index  
→ sampled value field  
→ volume, mesh, point cloud, or rendered object

This thread is particularly important because it makes the indexing problem explicit. The medical image is not enough. The software needs a rule that connects each slice to a spatial coordinate.

## Archival classification

This entry belongs to the category:

Blender volume-data reference  
medical scan image sequence  
slice-to-volume conversion  
Cycles volumetric rendering  
OSL image lookup  
sprite-sheet texture atlas  
UDIM volume sampling

It is not a standalone tutorial in the same sense as a video walkthrough. It is a technical reference that clarifies the problem space and records multiple historical solutions.

## Practical notes

For OSL-based workflows:

- individual image files can remain separate;
- the shader selects files based on Z coordinate;
- rendering must be CPU-based;
- Open Shading Language must be enabled;
- interpolation along Z may require additional code.

For sprite-sheet workflows:

- the image sequence must be concatenated into one large image;
- ImageMagick can be used for this preprocessing step;
- the node system samples regions of the strip according to position;
- GPU rendering is possible;
- the texture file can become very large.

For UDIM workflows:

- slice files must be renamed using UDIM numbering beginning at `1001`;
- Blender can recognize the tiled sequence through an Image Texture node;
- a node group converts tile offsets into volume sampling;
- Multiply, Map Range, or Color Ramp controls are needed to make structures visible;
- volume step rate affects detail and density.

## Key terms

Cycles  
Open Shading Language  
OSL shader  
image sequence  
medical scan slices  
16-bit TIF  
MRBrain dataset  
sprite sheet  
texture atlas  
ImageMagick  
UDIM  
Image Texture node  
volume shader  
volume step rate  
Color Ramp  
Map Range  
Multiply node  
Z coordinate sampling  
slice indexing
