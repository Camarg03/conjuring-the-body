---
title: Blender - Visible Human slices to volume cube
tags:
  - technical-workflow
  - medical-imaging
  - blender
  - anatomical-slices
  - visible-human
  - volume
---

# Blender - Visible Human slices to volume cube

## Source

Video: *Medical scan data in Blender / Visible Human slice workflow*  
URL: https://www.youtube.com/watch?v=e_L4wgxLFOQ

<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; max-width:100%; margin:0 0 2rem 0;">
  <iframe 
    src="https://www.youtube.com/embed/e_L4wgxLFOQ" 
    title="Visible Human slice workflow in Blender"
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>

## What this workflow does

This video demonstrates a relatively direct way of turning anatomical image slices into a volumetric form inside Blender. The method does not begin with a DICOM file, a medical imaging application, or a dedicated scan visualization tool. Instead, it starts from an already extracted set of anatomical images: PNG slices from the Visible Human dataset.

The workflow is useful because it exposes a basic principle behind many medical volume visualizations: a three-dimensional anatomical form can be reconstructed by ordering a sequence of two-dimensional slices and assigning them a spatial relationship.

In this case, the video uses slices of human legs. The slices are treated as image frames, then brought into Blender as an animated image texture. Through frame control and a volumetric or slice-based structure, the flat images begin to behave as a stacked body.

## Data source

The source material comes from the Visible Human dataset, which contains anatomical cross-sections of real human bodies. The video uses a selected region of the dataset rather than a complete body scan. The chosen images correspond to leg sections and are already available as ordinary PNG files.

This makes the workflow different from methods that begin with clinical MRI or CT data. The dataset has already passed through an earlier conversion stage: the body has been sectioned, photographed or digitized, and made available as a numbered image sequence. The task in this video is not to extract data from DICOM, but to spatialize an existing sequence of anatomical images.

## Workflow

Visible Human PNG slices  
→ ordered image sequence  
→ video strip or animated texture  
→ Blender image texture node  
→ frame-based slice selection  
→ volume cube or stacked slice structure  
→ anatomical volume / mesh-like reconstruction

## Preparing the image sequence

The video begins from a folder of PNG files. Each image represents one anatomical cross-section. On its own, each file is a flat image. In sequence, the files form a scan-like movement through the body.

The images are brought into Blender’s video editing workspace as an image sequence. This allows the slices to be previewed as a continuous animation. The sequence can be cropped, adjusted, and rendered out as a video or kept as an image sequence.

This step is important because it translates a folder of static slices into a time-based object. Once the slices are arranged as frames, Blender can use the frame number as a way to select which anatomical cross-section appears at a given moment.

## Frame control as slice selection

The central technical idea is that each anatomical slice can be addressed through a frame value. The image texture node does not simply display one fixed image. It can display different frames from the image sequence or video.

By controlling the frame value, the workflow turns time into depth. A frame number becomes a slice position.

This is a simple but powerful operation: the image sequence is not only played as animation, but redistributed spatially. Different parts of the Blender object can correspond to different moments in the sequence, and therefore to different anatomical depths.

## Blender setup

Inside Blender, the sequence is used through an image texture node. The texture contains the anatomical slice information. A cube or volumetric container is then used as the spatial structure that receives the data.

The video shows a workflow in which slices are repeated or distributed through the volume. Instead of building a detailed anatomical mesh by hand, the method uses the ordered image sequence as the source for a layered reconstruction.

The result is not a medically precise DICOM viewer. It is a practical reconstruction method that makes the logic of volume building visible: a volume can be assembled from ordered image planes, provided that the slices are correctly sequenced and mapped.

## Output

The resulting form appears as leg-like anatomical structures made from stacked cross-sections. Because the original PNG files contain color information, the output can retain some of the visual qualities of the source images. The workflow therefore produces a different visual effect from grayscale MRI or CT data: it is closer to a stratified anatomical model built from visible-light slices.

The video also suggests that the result can be pushed toward mesh-like output. This makes the method potentially useful for experiments that move from image sequence to object, from anatomical archive to 3D model, or from slice data to printable or renderable form.

## Technical value

The value of this workflow is its accessibility. It does not depend on a specialized medical imaging tool or a custom Blender visualizer. It works from ordinary image files, Blender’s image sequence logic, and shader or texture controls.

Its simplicity makes it technically limited but pedagogically useful. It shows the basic relationship between slice order, frame number, texture sampling, and spatial reconstruction. More advanced systems may hide this logic behind tools or node groups; this method makes the underlying operation easier to see.

## Limitations

The method depends on the quality, alignment, and spacing of the source images. If the slices are not evenly spaced or correctly ordered, the resulting volume will be distorted. Since the workflow uses already exported PNG images, information from the original medical or anatomical acquisition process may be missing.

The reconstruction also depends on how Blender maps the image sequence into space. Without careful scaling, slice spacing, and orientation, the result may be visually convincing but anatomically inaccurate.

This method should therefore be understood as a practical visualization workflow rather than a diagnostic or scientifically exact reconstruction pipeline.

## Relation to other scan workflows

This workflow should be kept separate from the Curtis Holt / Cartesian Caramel MRI visualization series. That series uses a more developed ecosystem involving personal MRI data, Scan Data Visualizer, tiled or flipbook images, volumetric shaders, geometry nodes, and rendered outputs.

This Visible Human workflow is more direct. It begins from anatomical PNG slices and uses Blender’s frame and texture logic to construct a layered volume.

It should also be compared later with the TIFF / UDIM workflow, where a stack of image slices is numbered and read as a volume through a different texture strategy. All three workflows share a common problem: how to make a sequence of two-dimensional body slices behave as a spatial object.
