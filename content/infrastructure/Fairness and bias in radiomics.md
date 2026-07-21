---
title: Fairness and bias in radiomics
tags:
  - infrastructure
  - radiomics
  - fairness
  - bias
  - medical-ai
  - datasets-and-corpora
  - oncology
---

# Fairness and bias in radiomics

## Source

Key references:

- Ruiz Pujadas, E., Hernández-González, J., Dang, V. N., Camacho, M., Lekadir, K., & Starmans, M. P. A. (2026). *Bias and fairness in radiomics: A comparative analysis of machine learning models on four oncology datasets*. International Journal of Imaging Systems and Technology, 36(2), e70329. https://doi.org/10.1002/ima.70329
- Pot, M., Kieusseyan, N., & Prainsack, B. (2021). *Not all biases are bad: Equitable and inequitable biases in machine learning and radiology*. Insights into Imaging, 12, 13. https://doi.org/10.1186/s13244-020-00955-7
- Ricci Lara, M. A., Echeveste, R., & Ferrante, E. (2022). *Addressing fairness in artificial intelligence for medical imaging*. Nature Communications, 13, 4581. https://doi.org/10.1038/s41467-022-32186-3

## Bias after quantification

Radiomics converts medical images into quantitative features. Texture, shape, intensity, heterogeneity, and spatial patterns are extracted from regions of interest and used for prediction or classification. This can make medical imaging seem more objective because the image becomes measurable.

But quantification does not remove bias. It can move bias into another form.

For *Conjuring the Body*, radiomics is important because it shows a further abstraction of the body. The scan is no longer only a visual image. It becomes a feature table, a model input, a prediction problem.

## Performance is not one number

A radiomics model can have strong overall performance while performing unevenly across demographic groups. Ruiz Pujadas et al. analyze four oncology datasets from the WORC Database and compare machine learning models in relation to fairness. Their study shows that differences can appear across age and sex groups, and that mitigation methods do not work uniformly across datasets, algorithms, and attributes.

This is important because general performance can hide unequal behavior. A global metric can produce confidence while masking weaker performance for specific groups.

A simplified evaluation problem might look like this:

```text
all patients → high average score
subgroup A → strong performance
subgroup B → weaker performance
```

The model appears successful until the population is disaggregated.

## Equitable and inequitable bias

Pot, Kieusseyan, and Prainsack complicate the language of bias. Not every bias has the same meaning or ethical status. Some forms of bias may be introduced deliberately to correct inequity or to improve care for an underserved group. Other biases reproduce unfairness, exclusion, or harm.

This distinction is useful because it prevents the archive from treating bias as a simple technical defect. In medical AI, bias can refer to data imbalance, measurement error, historical inequality, clinical over- or underdiagnosis, algorithmic shortcut, or a corrective intervention.

The ethical question is not only whether bias exists, but what kind of bias it is, whom it affects, and whether it amplifies or reduces injustice.

## Fairness as a medical imaging problem

Ricci Lara, Echeveste, and Ferrante argue that fairness in medical imaging AI needs attention to the specific conditions of imaging data. Medical images differ from generic computer vision data because they are shaped by scanner hardware, protocols, anatomy, disease prevalence, hospital context, and clinical interpretation.

Fairness cannot be solved only at the end of the pipeline. It must be considered through dataset design, acquisition, annotation, preprocessing, model evaluation, deployment context, and clinical responsibility.

This places fairness inside the entire medical imaging chain:

```text
scanner → protocol → patient cohort → annotation → feature extraction → model → evaluation → clinical use
```

## The body as feature imbalance

Radiomics introduces a particular tension. The body is converted into features so that it can become comparable and predictive. But if those features are extracted from uneven populations or unstable protocols, then the quantified body may reproduce the inequalities of the systems that produced it.

The problem is not that quantification is useless. The problem is that quantification can create a feeling of neutrality while carrying forward hidden exclusions.

## Why this matters for the archive

This entry connects WORC, TCIA, MIMIC-CXR, and the broader infrastructure notes. It gives the archive a way to discuss bias after the body has already become mathematical.

The body in radiomics is not a body seen by an expert. It is a body translated into variables. Fairness asks whether that translation works equally, whether it makes some bodies less legible, and whether the model's success depends on forgetting the differences between populations.

For *Conjuring the Body*, this is a way to ask how a fragment can be made measurable without being made neutral.

## Connected notes

- [[WORC Database - Rotterdam radiomics corpus]]
- [[Dataset composition and generalization]]
- [[Race as machine-readable signal]]
- [[Black box medical imaging]]
- [[The Cancer Imaging Archive - heterogeneous cancer image collections]]
- [[Data colonialism in digital health]]
