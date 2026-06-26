---
title: Black box medical imaging
tags:
  - infrastructure
  - medical-imaging
  - ai
  - health-data
  - data-governance
  - opacity
---

# Black box medical imaging

Medical imaging promises access to the interior of the body. CT scans, MRIs, brain slices, and other diagnostic images open the body through layers, measurements, slices, and volumes. They seem to make the body more visible, more legible, and more available to knowledge.

Yet, once these images enter digital infrastructures, another kind of opacity appears. The body may become visible as an image, but the system that stores, processes, circulates, and interprets that image can become difficult to understand. This is where the idea of the black box becomes important.

In medical artificial intelligence, the black box problem usually refers to systems whose outputs can be observed, but whose internal decision-making processes remain unclear. A model may receive a medical image and produce a prediction, classification, or recommendation, but it may not be evident how that result was produced. This creates ethical problems in clinical contexts, where decisions affect patients, diagnoses, treatments, and forms of responsibility.

Within *Conjuring the Body*, the black box is not only the AI model. It is also the larger infrastructure that prepares the medical image for algorithmic use. Before a model produces a prediction, the image has already passed through multiple transformations: acquisition, formatting, anonymization, metadata extraction, database storage, cloud processing, dataset construction, annotation, labeling, and sometimes cloud-based machine learning workflows.

A simplified chain could look like this:

Medical scan → DICOM file → anonymization → metadata → dataset → cloud storage → machine learning model → prediction

Each step may appear technical or administrative, but together they produce a deep transformation. A bodily fragment is detached from the clinical encounter in which it was produced and becomes an operational object: searchable, comparable, linkable, and trainable.

The black box, then, does not begin only at the moment of AI prediction. It can begin earlier, when the body enters an infrastructure whose operations are distributed across standards, platforms, contracts, permissions, databases, and automated processes.

Obfuscation can be understood as one mechanism inside this larger black box. It describes the way certain relations become difficult to trace: the relation between image and body, between data and consent, between anonymization and intimacy, between storage and reuse, between prediction and responsibility.

In this sense, obfuscation is not simply the hiding of information. It can also be produced by complexity. The system may be documented, regulated, and technically functional, while still remaining inaccessible to the person whose body generated the data.

> The scanned body becomes transparent, while the system that processes it becomes opaque.

This reversal is central to the project. Medical imaging opens the body as an object of vision, but data infrastructure can close another box around that visibility. What becomes difficult to see is not the inside of the body, but the social, legal, technical, and computational chain that allows that body to circulate as data.

The black box is therefore not only a problem of explanation. It is a problem of relation. It asks who can understand the system, who can intervene in it, who is made responsible for its decisions, and who remains outside its field of visibility.

For *Conjuring the Body*, this concept helps describe a larger condition: the body is not transformed into data only when it is scanned, but when it enters a system that can abstract it, anonymize it, store it, connect it, and make it available for prediction.

## Machine-readable bodies

One important aspect of the black box problem in medical imaging is that AI systems may learn to read medical images in ways that exceed human interpretation. The issue is not only that the model does not explain itself clearly. It is also that the image may contain patterns, correlations, or proxies that become legible to the machine without being fully legible to doctors, patients, or researchers.

This changes the status of the medical image. It is no longer only a visual representation interpreted by a human expert. It becomes a computational surface from which hidden relations can be extracted. Some of these relations may be clinically useful, but others may reproduce bias, encode social categories, or generate predictions whose basis remains difficult to contest.

The medical image becomes readable to the machine while becoming politically and technically less readable to the subject whose body produced it.

## Reference notes

### Xu and Shuttleworth — medical AI and “do no harm”

Hanhui Xu and Kyle Michael James Shuttleworth discuss the black box problem in medical AI through the ethical principle of “do no harm.” Their central concern is that the unexplainability of medical AI can produce harm when patients, physicians, or even designers cannot understand why a system produced a recommendation. This makes the black box not only a technical limitation, but an ethical problem related to autonomy, trust, responsibility, and informed decision-making.

Reference: [Xu, Hanhui, and Kyle Michael James Shuttleworth. “Medical artificial intelligence and the black box problem: a view based on the ethical principle of ‘do no harm’.” *Intelligent Medicine*, vol. 4, no. 1, February 2024, pp. 52–57.](https://www.sciencedirect.com/science/article/pii/S2667102623000578)

### Marey et al. — black box challenges in radiology

Marey et al. address the black box problem specifically in radiology. They describe it as a condition in which AI systems can provide results or recommendations, while the reasoning behind those results remains opaque or difficult for humans to understand. This is important for *Conjuring the Body* because radiology is one of the main fields where medical images become computationally processed, interpreted, and integrated into clinical decisions.

Reference: [Marey et al. “Explainability, transparency and black box challenges of AI in radiology: impact on patient care in cardiovascular radiology.”](https://link.springer.com/article/10.1186/s43055-024-01356-2)

### Muhammad et al. — explainable AI in medical image analysis

Muhammad et al. review methods of Explainable Artificial Intelligence, or XAI, in medical image analysis. This field attempts to make AI decisions more interpretable by showing which parts of an image or which features influenced a model’s output. For this project, XAI is important because it shows that the black box is not an abstract metaphor: it is an active technical and ethical problem in medical imaging research.

Reference: [Muhammad et al. “Unveiling the black box: A systematic review of Explainable Artificial Intelligence in medical image analysis.”](https://pmc.ncbi.nlm.nih.gov/articles/PMC11382209/)

### Frank Pasquale — black box society

Frank Pasquale expands the black box problem beyond medicine. In *The Black Box Society*, he argues that powerful institutions often demand transparency from individuals while keeping their own algorithmic and financial systems opaque. This is useful for thinking about medical imaging infrastructures because the patient’s body becomes increasingly exposed, scanned, measured, and converted into data, while the systems that process those data may remain difficult to examine or contest.

Reference: [Frank Pasquale. *The Black Box Society: The Secret Algorithms That Control Money and Information*.](https://www.jstor.org/stable/j.ctt13x0hch)

## Related notes

- [[AWS medical AI workflow]]
- [[Opt-out as default consent]]
- [[Blender - TIFF stack to volume render]]
