---
title: Blender - Image sequence slices to point cloud
tags:
  - technical-workflow
  - blender
  - geometry-nodes
  - image-sequence
  - point-cloud
  - scan-data
---

# Blender - Image sequence slices to point cloud

## Source

Video: *Image sequence slices to point cloud*  
URL: https://www.youtube.com/watch?v=A2oa6n4I2UE

<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; max-width:100%; margin:0 0 2rem 0;">
  <iframe 
    src="https://www.youtube.com/embed/A2oa6n4I2UE" 
    title="Image sequence slices to point cloud"
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>

## What this workflow does

This video demonstrates a Geometry Nodes workflow for turning an image or video sequence into a spatial structure made from repeated slices. The method is not limited to medical scans. The author frames it as a general procedure that can work with any sequence: a movie, an image sequence, a CT scan series, or another set of ordered frames.

The useful part of the workflow is that it treats each frame as a slice and then distributes those slices through space. Instead of using a shader only to render a volume, the process begins to generate a point-based or mesh-like object from the sampled frames.

## Workflow

Image sequence / video / CT scan series  
→ frame sampling  
→ repeated slice structure  
→ Geometry Nodes Repeat Zone  
→ point cloud  
→ optional mesh conversion  
→ optimization / reduction

## Technical process

The video begins from a sequence that can be read frame by frame. The sequence is brought into Blender and processed through Geometry Nodes. The key operation is repetition: the node system duplicates or samples slices across an axis, using frame progression as a way to move through the source sequence.

A Repeat Zone is used to build the sliced structure procedurally. Each repetition corresponds to a different position in the stack, and each position can sample a different frame or part of the sequence. In this sense, the sequence becomes spatialized: time or frame order is translated into depth.

The workflow then turns the sampled slice data into a point cloud. This produces a visible three-dimensional structure that is made from many points distributed according to the image information. The method can also move toward mesh conversion, although the video makes clear that this creates practical problems of density and optimization.

## What is important technically

The important technical idea is the translation from frame order into spatial order. A video or image sequence is normally temporal: frame 1, frame 2, frame 3, and so on. This workflow converts that sequence into depth: slice 1, slice 2, slice 3.

This makes the method relevant for CT or MRI-like data, even if the video is not specifically about a clinical DICOM workflow. Any ordered set of slices can potentially be interpreted as a stack.

The workflow is also useful because it exposes a different route from previous volume-rendering methods. It does not depend primarily on UDIM textures or a specialized scan visualizer. It uses Geometry Nodes to construct a procedural object from repeated image slices.

## Point cloud logic

The generated result is closer to a point cloud than to a conventional medical volume. The image sequence is sampled and translated into points, producing a structure that can be navigated as a three-dimensional form.

This matters because point clouds behave differently from shader volumes. A volume shader can create the appearance of density, transparency, and internal depth, but it remains primarily a rendering strategy. A point cloud begins to create a manipulable geometric structure. It can potentially be reduced, converted, filtered, or transformed into mesh-like outputs.

## Optimization and limits

The video also shows an important practical issue: these workflows can easily generate too much data. Repeating slices, sampling frames, and producing points can create dense geometry very quickly.

The author therefore pays attention to reduction and optimization. Useful controls include reducing the number of frames or slices, lowering the density of points, simplifying the output, and deciding whether a mesh conversion is necessary at all.

This makes the workflow useful as a lightweight procedural experiment, but not necessarily as a precise medical reconstruction pipeline. Its strength is flexibility and accessibility. Its limitation is that accuracy depends heavily on the source sequence, sampling resolution, node setup, and reduction strategy.

## Difference from other workflows

This entry should remain distinct from other Blender-based scan workflows.

`Blender - TIFF stack to volume render` uses a TIFF stack and UDIM numbering to construct a shader-based volume.

`MRI visualization in Blender - Curtis Holt and Cartesian Caramel` documents a more developed MRI / CT visualization ecosystem based on tiled scan data, Scan Data Visualizer, shader sampling, and Geometry Nodes.

`Blender - Visible Human slices to volume cube` uses anatomical PNG slices from the Visible Human dataset and reconstructs them through an image texture / volume cube approach.

This workflow is different because it foregrounds Geometry Nodes, repeated slice generation, and point cloud output. It is less tied to a specific medical dataset and more useful as a general method for spatializing any ordered image sequence.

## Usefulness

This is a useful workflow to keep in the archive because it shows a less specialized but adaptable strategy. It can act as a bridge between video processing, image sequences, CT-like slice stacks, and procedural geometry generation in Blender.

Its value is not that it solves medical scan visualization completely, but that it makes the basic operation very explicit: an ordered image sequence can be converted into a spatial object by translating frame order into depth.

## Connected notes

- [[Blender - Medical scan image sequence as volume data]]
- [[Blender - Visible Human slices to volume cube]]
- [[Blender - TIFF stack to volume render]]
- [[MRI visualization in Blender - Curtis Holt and Cartesian Caramel]]
- [[Audiovisual documentation register]]
