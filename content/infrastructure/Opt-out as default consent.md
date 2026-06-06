---
title: Opt-out as default consent
tags:
  - infrastructure
  - health-data
  - ai
  - data-governance
  - consent
---

# Opt-out as default consent

Opt-out works in a similar way to cookies: data use is treated as something already built into the system, and the user, institution, or administrator must actively intervene in order to refuse it. Consent is not requested as a clear affirmative act; instead, refusal becomes a configuration task.

In the context of health data, this is especially problematic. The data at stake is not browsing behavior or consumer preference, but internal images of the body, diagnoses, clinical histories, and possible biological risks. A medical scan stored in the cloud can be organized through services such as [[AWS medical AI workflow|AWS HealthImaging]], connected to clinical records, associated with genomic data, and later processed through machine learning systems.

AWS states that some AWS AI services may use and store customer content for service improvement, including debugging, evaluation, and model training, unless an organization applies an AI services opt-out policy. This does not mean that every AWS health service automatically trains on medical images, but it shows how refusal can become an administrative burden rather than a primary ethical principle. See: [AWS AI services opt-out policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html).

The problem is not only whether a company directly uses the data. The deeper issue is that the infrastructure is designed so that data can circulate, be processed, and become useful unless the correct limits are configured. In this sense, opt-out transforms silence into a kind of operational permission.

> Opt-out turns consent into a setting: the subject does not actively authorize the use of their data, but must know how to interrupt a circulation that the infrastructure has already made possible.

## Related notes

- [[AWS medical AI workflow]]
- [[Black box medical imaging]]