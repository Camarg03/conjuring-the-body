---
title: MRI visualization in Blender - Curtis Holt and Cartesian Caramel
tags:
  - technical-workflow
  - medical-imaging
  - blender
  - mri
  - ct-scan
  - scan-data
  - volumetric-rendering
  - geometry-nodes
---

# MRI visualization in Blender - Curtis Holt and Cartesian Caramel

## Source map

This note archives a small technical ecosystem around MRI / CT scan visualization in Blender. The material is centered on Curtis Holt’s experiments with his own MRI scan data and Ben / Cartesian Caramel’s **Scan Data Visualizer**, a Blender-based workflow for turning medical scan slices into volumetric and mesh-like outputs.

Main project page:  
https://curtisholt.online/studio/mri-visualizations-in-blender

Scan Data Visualizer V1:  
https://bbbn19.gumroad.com/l/qhldu

The five videos should not be read as separate tutorials that repeat the same idea. Each one shows a different layer of the same workflow. One video introduces the scan as a personal medical dataset inside Blender. Another explains the tool from the developer’s side. A third presents the tool as a public resource. A fourth follows the transformation of the scan into an artwork. The final satellite video returns to the scan through heatmap-like display, interface choices, inner ear references, and bodily orientation.

The shared technical problem is how a stack of medical images can be reorganized into something that Blender can read as space.

```text
MRI / CT scan data
→ DICOM or exported image files
→ ordered image slices
→ tiled image / flipbook image
→ Blender shader or geometry-nodes setup
→ volumetric visualization
→ density, color-range, and slicing controls
→ optional mesh / voxel output
→ render, animation, demonstration, or artwork
```

## 1. Curtis Holt — MRI scan as Blender volume

Video: *I Put My BRAIN into Blender!*  
URL: https://www.youtube.com/watch?v=-fbV_4OvZiM&t=2016s

<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; max-width:100%; margin:0 0 2rem 0;">
  <iframe 
    src="https://www.youtube.com/embed/-fbV_4OvZiM?start=2016" 
    title="I Put My BRAIN into Blender!"
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>

This is the central case study of the series. Curtis Holt opens with the visual result: his own MRI scan appears as a volumetric head inside Blender, visible from different angles and readable through colorized styles, density changes, Cycles denoising, and slicing operations. The video is not a clean tutorial yet; it is closer to a technical breakdown of how the result was reached and why the workflow is interesting.

The important contribution of this video is that it establishes the whole data chain. The scan starts as medical data produced during an MRI Brain / IAM scan, but the video focuses on what happens after that data is obtained: the scan is broken into image slices, the slices are combined into a tiled image, and Blender samples that tiled image through a shader so that the scan can be reconstructed as a volume. Curtis repeatedly frames the result as visually fascinating but technically conditional. What appears on screen depends on slice order, tile layout, density, interpolation, render settings, and the axis from which the data was acquired.

A major technical idea introduced here is the **tiled image** or **flipbook**. Instead of loading hundreds of scan slices as separate objects or textures, the slices are packed into a single tiled image. The shader then treats positions in 3D space as coordinates for sampling different regions of that tiled image. This is how the image sequence becomes spatial again.

The video also introduces the division between a shader-based volume and a geometry-nodes route. The shader approach is useful for visual exploration because it allows the volume to remain translucent, sliceable, and visually adjustable. The geometry-nodes approach suggests a different destination: voxelized or mesh-like outputs that can become objects, exports, or sculptural material.

The strongest technical caution in this video is that a compelling render is not the same as medical accuracy. Density settings can make structures appear thicker or more connected. Interpolation can smooth over gaps. Color ramps can isolate some values and suppress others. The MRI becomes visible, but it is visible through a rendering system.

## 2. Cartesian Caramel — Scan Data Visualizer tool tutorial

Video: *Brain Scans in Blender! (Tool Tutorial)*  
URL: https://www.youtube.com/watch?v=AlzQPR4o8jA

<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; max-width:100%; margin:0 0 2rem 0;">
  <iframe 
    src="https://www.youtube.com/embed/AlzQPR4o8jA" 
    title="Brain Scans in Blender! Tool Tutorial"
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>

This is the technical core of the series. Where Curtis’s first video explains the project as a case study, Ben / Cartesian Caramel’s tutorial explains the tool as a working Blender setup. The Scan Data Visualizer is presented as a volumetric viewer for MRI or CT scan data. It expects the user to arrive with prepared image slices, usually converted from DICOM or another medical image format into ordinary image files, and then packed into a flipbook.

The tutorial clarifies why the flipbook is central. A scan can consist of many layers, but Blender needs a structure that can be sampled efficiently. By packing those layers into a tiled image, the tool can use mathematical coordinates inside a shader or geometry-nodes system to recover the layer order. The user provides information such as the number of rows, layer structure, volume dimensions, and density behavior so that the file knows how to rebuild the volume.

Ben distinguishes between the **shader version** and the **geometry-nodes version** of the visualizer. The shader version places the volume inside a cube and uses Cycles to render sampled density. It is useful for fast visual culling and cross-section inspection because the volume can be cut or restricted by moving geometry. The geometry-nodes version is more appropriate when the user wants voxel-like or mesh-like output, because it moves the scan from a rendered volume toward generated geometry.

The tutorial also makes practical constraints visible. Cycles and denoising are needed for cleaner volumetric images. Eevee may work but is less reliable for this kind of volumetric reading. Performance depends on hardware, image resolution, volume density, and the number of layers in the scan. Interpolation between layers can make the volume look smoother, but it also produces an interpreted space between slices.

This video is the best place to understand the tool as a technical object: it explains what kind of input it expects, how the flipbook is read, why density matters, how slicing works, and why shader and geometry-nodes versions serve different purposes.

## 3. Curtis Holt — Scan Data Visualizer demonstration

Video: *Now YOU Can Put Your BRAIN into Blender!*  
URL: https://www.youtube.com/watch?v=uigeio5-9aI

<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; max-width:100%; margin:0 0 2rem 0;">
  <iframe 
    src="https://www.youtube.com/embed/uigeio5-9aI" 
    title="Now YOU Can Put Your BRAIN into Blender!"
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>

This video translates the previous experiments into a public workflow. Curtis presents the Scan Data Visualizer V1 resource and explains what a user receives when downloading it. The tone is more practical than the first video: the question is no longer only “how did we put this MRI into Blender?” but “what does someone need in order to try this with their own scan data?”

The video makes an important clarification: Blender does not scan the body. The user still needs to obtain MRI or CT scan data, and that data must provide image scan slices. Once those slices exist, they can be converted into a tiled flipbook and loaded into the visualizer. The public workflow therefore depends on a chain outside Blender: clinical scan, access to data, export, conversion, flipbook packing, then visualization.

The Gumroad resource is described as containing two main pieces: the **Scan Data Visualizer** file and the **Image Flipbook Packer**. The visualizer contains different representations of the same scan data: a shader volume, a geometry-nodes volume, a geometry-nodes mesh, and an extracted inner ear / labyrinth object from Curtis’s scan. The file is therefore not only a viewer but also a comparison between output modes.

This demonstration is useful because it shows the workflow as a reusable package. The scan can be read as translucent volume, restricted through slicing, adjusted through density, or moved toward mesh generation. Curtis emphasizes that density and solidity can easily change the interpretation of the scan. A more solid render may look more convincing, but it can also overstate connections or forms that depend on threshold settings.

In the sequence of the series, this video marks the transition from personal experiment to distributed method. The MRI is no longer only Curtis’s visual object; it becomes an example dataset inside a tool that other people can download, test, and adapt.

## 4. Curtis Holt — Brain scan as 3D artwork

Video: *I Turned my BRAIN into 3D ART with Blender!*  
URL: https://www.youtube.com/watch?v=OvjPu4n5mO0

<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; max-width:100%; margin:0 0 2rem 0;">
  <iframe 
    src="https://www.youtube.com/embed/OvjPu4n5mO0" 
    title="I Turned my BRAIN into 3D ART with Blender!"
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>

This is the artwork branch of the workflow. The scan has already passed through the earlier stages: MRI data, volume reconstruction, and mesh generation. The question in this video is what happens when the scan-derived form is treated as material for a 3D composition rather than as a technical visualization.

Curtis works with a mesh derived from the MRI volume and uses the process to test Blender 4.0 features, especially the AGX view transform. The scan data becomes part of a longer image-making process involving cleanup, smoothing, sculpting, material tests, lighting decisions, framing, and render iteration. The video is valuable because it does not present the final image as a direct outcome of the scan. It shows the many artistic operations that intervene between medical data and finished render.

The mesh branch introduces a different problem from the shader-volume branch. Volumetric visualization keeps the scan in a semi-transparent, density-based state. Mesh conversion makes the data more object-like, but it also requires decisions about thresholds, surface continuity, smoothing, and cleanup. Once the scan becomes a mesh, it can be sculpted, distorted, lit, framed, and surfaced like any other 3D asset.

The video also demonstrates how quickly anatomical fidelity becomes secondary once the scan enters an artwork workflow. Materials such as glass, plastic, metal, or frosted surfaces change how the form is perceived. Lighting and color management shape the emotional and spatial reading of the mesh. Camera composition and support structures turn the scan-derived geometry into a scene.

This video is therefore not a manual for the Scan Data Visualizer. It is a record of what happens after the data becomes usable geometry. It is the point in the series where medical visualization becomes a 3D image-making process.

## 5. Curtis Holt — MRI heatmap and inner ear visualization

Video: https://www.youtube.com/watch?v=cEC3xx0k3WM

<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; max-width:100%; margin:0 0 2rem 0;">
  <iframe 
    src="https://www.youtube.com/embed/cEC3xx0k3WM" 
    title="Curtis Holt MRI heatmap and inner ear visualization"
    style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>

This is a smaller satellite video, but it adds an important branch to the archive. It begins with interface and theme discussion, including the Blender Noir theme and Curtis’s own toolset, but then returns to the MRI project as an updated file. The scan is shown through a different visual strategy: emissive or heatmap-like data is projected in a way that makes the scan easier to read as a set of cross-sections and internal intensities.

The video is relevant because it shifts attention from full volumetric spectacle to specific anatomical and perceptual targets. Curtis refers back to the MRI Brain / IAM scan connected to vestibular issues and shows interest in the inner ear / labyrinth structure. The scan is not just a head volume; it becomes a way of looking at balance, orientation, and the small anatomical structures involved in vestibular perception.

Technically, the heatmap-like display changes the reading of the data. Instead of rendering the scan as a fleshy or translucent volume, color and emission are used to make slice information more legible. This is another reminder that visualization style is not cosmetic. It determines what can be seen, what recedes, and which structures become inspectable.

This video should be treated as a side branch rather than the main workflow. It connects interface aesthetics, MRI cross-section display, inner ear visualization, possible 3D-printable objects, and the use of scan data for self-orientation. It extends the same dataset into a more focused anatomical problem.

## Cross-reference inside the series

The five videos form a compact technical network. The first video establishes the personal MRI case and introduces the tiled-image volume method. The Cartesian Caramel tutorial explains the tool at the node and file-structure level. The Scan Data Visualizer demonstration shows how the tool is released and used by others. The 3D artwork video follows the mesh / render branch after visualization. The heatmap and inner ear video returns to the same data through a more targeted visual display.

The series can be read through four internal transitions:

```text
personal scan → reusable tool
shader volume → geometry-nodes / mesh output
technical visualization → rendered artwork
whole-head volume → inner ear / vestibular focus
```

## Technical model

The workflow depends on several translations. First, clinical scan data must be accessed and exported. Second, the medical files must become ordinary image slices. Third, those image slices must be packed into a tile or flipbook. Fourth, Blender must be given enough information to interpret the tile as ordered layers in space. Fifth, the volume must be rendered, sliced, colored, thresholded, or converted to geometry depending on the output.

The flipbook is the structural hinge. It converts a sequence into a grid, and the shader or geometry-nodes setup converts the grid back into spatial layering. This means that the scan is never simply “opened” in Blender. It is reassembled through a coordinate system.

Density and range controls are the interpretive hinge. They decide which values appear, how thick the volume looks, and which internal structures become legible. These controls are necessary for visualization, but they also create ambiguity. A change in density can make a structure appear more continuous or more separate than it is in the source data.

The shader / geometry-nodes distinction defines the output branch. Shader volumes are better for transparent, sliceable, atmospheric visualization. Geometry-nodes outputs are better for voxelized or mesh-like objects. The artwork video depends on this second branch because it treats the scan as editable 3D matter.

## Limitations and cautions

The videos repeatedly imply that MRI / CT visualization in Blender should be understood as exploratory and visual, not diagnostic. Several technical issues affect the result: scan axis, slice spacing, interpolation between layers, image resolution, density thresholds, color ramps, render engine behavior, and hardware limits.

The scan axis is especially important. Data can appear more precise from the direction in which the slices were acquired and more interpolated from other directions. Interpolation can make the volume smoother, but it invents continuity between slices. Density can reveal more information, but it can also thicken noise or merge nearby values. Mesh conversion can produce a tangible form, but it requires thresholds and cleanup that change the source data.

These limitations do not make the workflow useless. They define its proper use: visual exploration, communication, demonstration, artwork, and technical experimentation.

## Relation to previous workflow note

This workflow should be compared with [[Blender - TIFF stack to volume render]]. That earlier note documents a separate method based on TIFF image sequences and UDIM numbering. The Curtis Holt / Cartesian Caramel material is organized around a different structure: scan slices are packed as tiled or flipbook images, then read through a Scan Data Visualizer file using shader and geometry-nodes systems.

Both workflows turn ordered 2D medical slices into a 3D volume inside Blender, but they differ in how the slices are indexed. The UDIM workflow uses numbered texture tiles. The Scan Data Visualizer workflow uses a single packed flipbook image and internal controls for rows, layers, density, interpolation, and output type.

## Connected notes

- [[Blender - TIFF stack to volume render]]
- [[Blender - Medical scan image sequence as volume data]]
- [[Black box medical imaging]]
- [[Opt-out as default consent]]
- [[The body as anatomical territory]]
- [[Medical images as biometric traces]]
