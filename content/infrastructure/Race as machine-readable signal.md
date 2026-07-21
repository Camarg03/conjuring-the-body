---
title: Race as machine-readable signal
tags:
  - infrastructure
  - medical-ai
  - medical-imaging
  - race
  - bias
  - opacity
  - machine-perception
---

# Race as machine-readable signal

## Source

Key reference:

- Gichoya, J. W., Banerjee, I., Bhimireddy, A. R., Burns, J. L., Celi, L. A., Chen, L.-C., Correa, R., Dullerud, N., Ghassemi, M., Huang, S.-C., Kuo, P.-C., Lungren, M. P., Palmer, L. J., Price, B. J., Purkayastha, S., Pyrros, A. T., Oakden-Rayner, L., Okechukwu, C., Seyyed-Kalantari, L., Trivedi, H., Wang, R., Zaiman, Z., & Zhang, H. (2022). *AI recognition of patient race in medical imaging: A modelling study*. The Lancet Digital Health, 4(6), e406–e414. https://doi.org/10.1016/S2589-7500(22)00063-2

Related preprint:

- Banerjee, I., Bhimireddy, A. R., Burns, J. L., et al. (2021). *Reading race: AI recognises patient's racial identity in medical images*. arXiv. https://arxiv.org/abs/2107.10356

## The image reads more than it shows

Medical imaging has long been associated with the promise of seeing inside the body. But AI systems introduce a different problem: a medical image can become readable in ways that exceed human visual interpretation.

Gichoya et al. showed that deep learning models can predict self-identified race from medical images across multiple imaging modalities and datasets. This result is disturbing not because it reveals race as a biological essence inside the scan, but because the machine can detect a signal that human experts cannot easily locate or explain.

For *Conjuring the Body*, this is a central black box problem. The body becomes visible to the machine through correlations whose source remains uncertain.

## Not biological essence

This entry should not be read as saying that race is biologically visible in the medical image. That would repeat a dangerous and false racial logic. The more precise point is that race, as a social category, may become entangled with many forms of embodied, technical, environmental, and institutional difference.

A model may learn from disease distribution, scanner settings, body habitus, image markers, institutional patterns, environmental exposure, socioeconomic inequality, clinical access, or other indirect traces. The problem is that these relations may be encoded in the image without being legible as such.

Race becomes machine-readable not as essence, but as proxy, residue, correlation, or signal cluster.

## Opacity and harm

The danger is not only that the model recognizes race. The danger is that this recognition can remain hidden inside other predictions.

If a model can infer race from an image, then race-related signals may influence outputs even when race is not explicitly included as a variable. A diagnostic model could appear to be reading pathology while also relying on social or technical proxies that reproduce inequality.

This creates a specific form of opacity. The system does not simply fail to explain its decision. It may use categories that researchers did not intend to provide, clinicians cannot see, and patients cannot contest.

## The image as social-technical surface

A medical image is not only a picture of tissue. It is produced inside a social and technical environment. Scanner type, clinical indication, hospital workflow, demographic distribution, access to care, and historical inequality can all leave indirect traces in the data.

The image is therefore a social-technical surface. It holds anatomical information, but also patterns produced by the conditions under which bodies enter medicine.

This is why the finding matters for the archive. The medical image is not a purified fragment of the body. It carries the residue of systems.

## Reading and being read

Traditional medical imaging imagines a human expert looking at a scan. AI medical imaging introduces another viewer: a model trained to detect patterns that may not correspond to human categories of vision.

The patient is not only imaged. The patient is read by a system that may infer things beyond the explicit clinical task.

A simplified chain might be:

```text
scan → dataset → model training → latent correlations → prediction → hidden use of protected signals
```

This chain is difficult to contest because the signal is not necessarily visible in the conventional sense. It may be distributed across the image, embedded in frequencies, or entangled with acquisition conditions.

## Why this matters for the archive

This entry gives *Conjuring the Body* a way to think about the body as computationally overexposed. The scan may be anonymized, cropped, degraded, or separated from obvious identifiers, and still contain forms of information that exceed the subject's control.

The question is no longer only what the medical image reveals. The question is what the machine can extract from it.

In this sense, the body does not disappear when it becomes data. It may become readable in new and troubling ways.

## Connected notes

- [[MIMIC-CXR - radiographs and reports as multimodal medical data]]
- [[Black box medical imaging]]
- [[Dataset composition and generalization]]
- [[Fairness and bias in radiomics]]
- [[Medical images as biometric traces]]
- [[Data colonialism in digital health]]
