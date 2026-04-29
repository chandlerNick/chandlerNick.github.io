---
layout: page
title: "Research"
permalink: /research/
---

This page showcases academic research I have participated in. That is, projects that take place in an academic community with the intent of publishing.

---

# Publications

## 📝 CURED: Creating, Understanding, & Repairing Errors Demonstrator

Coming soon... (hopefully)

## 📝 Probabalistic Neural Network Approach to Determining Parameters of Eclipsing Binaries

I did research on developing a deep learning approach to determining the parameters of eclipsing binary star systems. The paper [Probabilistic neural network approach to determining parameters of eclipsing binaries](https://iopscience.iop.org/article/10.3847/1538-3881/ae5b79) was accepted to The Astronomical Journal. 

**Abstract:**

Eclipsing binaries provide one of the most direct mechanisms for measuring stellar properties such
as mass and radius, but historically, determining these properties has been non-trivial and computationally prohibitive. As such, only a small fraction of all eclipsing binaries for which data have
been available have been fully characterized. To improve computational efficiency, we construct an
uncertainty-aware neural network which can ingest phase-folded light curves in any of 50 commonly
used passbands, combined with phase-folded radial velocity measurements for both primary and secondary, as well as fluxes across the spectral energy distribution to predict stellar and orbital parameters
of eclipsing binaries. The model was trained to be agnostic to the presence of third light, spots (both
cool and hot), and incomplete data. As the model is operating in a probabilistic framework, it is also
capable of outputting uncertainties in all of the parameters. The model was trained on synthetic data,
and applied to a set of ∼200 previously solved real eclipsing binaries to demonstrate its performance.
The model is capable of determining masses and radii of eclipsing binaries with precision of ≲20%
and Teff with precision of ∼500 K in only a fraction of the time it takes the more traditional solvers.
Although the resulting uncertainties are larger than what is possible to produce using more boutique
analysis of individual stars, in the era of large photometric surveys, this approach allows to identify the
most interesting systems, and it provides a starting point of the distributions in all of the parameters
that these solvers could improve upon.

**Contributions:**

I worked on prototyping the pytorch bayesian neural network as a part of undergraduate research at Western Washington University.

## 📝 MechDetect

I ran the experiments for (and co-authored) this paper: [*MechDetect: Detecting Data-Dependent Errors*](https://ieeexplore.ieee.org/document/11390600). It has been accepted at the IEEE conference Data Science and Intelligent Systems 2025.

**Abstract:**

Data quality monitoring is a core challenge in modern information processing systems. While many approaches to detect data errors or shifts have been proposed, few studies investigate the mechanisms governing error generation. We argue that knowing how errors were generated can be key to tracing and fixing them. In this study, we build on existing work in the statistics literature on missing values and propose MechDetect, a simple algorithm to investigate error generation mechanisms. Given a tabular data set and a corresponding error mask, the algorithm estimates whether or not the errors depend on the data using machine learning models. Our work extends established approaches to detect mechanisms underlying missing values and can be readily applied to other error types, provided that an error mask is available. We demonstrate the effectiveness of MechDetect in experiments on established benchmark datasets.

**Contributions:**

I ran the experiments, produced some of the scientific visualizations, and wrote the prose.

## 📝 Tab-Err

I assisted with the revisions of (and co-authored) the paper: [*Towards Realistic Error Models for Tabular Data*](https://dl.acm.org/doi/10.1145/3774914). It has been accepted to the Journal of Data and Information Quality of the ACM.

**Abstract:**

Errors in data are a key challenge in modern data management and processing systems. Monitoring and mitigating risks associated with errors in data transformations and downstream applications, such as Machine Learning (ML) model training, requires a profound understanding of error generation and impact of errors on data pipelines. Unfortunately, scientific progress in the field is facing two main challenges: For one, research on data errors often does not adhere to the FAIR (Findable, Accessible, Interoperable, and Reusable) principles, which impedes reproducibility and comparisons. Second, existing data error models are oversimplified and fail to capture the complex statistical dependencies underlying the types and distributions of errors observed in real-world data. Building on prior work in the database management systems and statistics literature, we extend the theory on missing values to encompass a broader range of errors in tables and provide an overview of relevant error types. Combining error sampling mechanisms often observed in real data with a comprehensive categorization of errors, we introduce a latent factor model for tabular data errors that is simple to implement and can effectively model realistic error dependencies. Error sampling is decoupled from error types, which allows for simple extensions with more error types or sampling mechanisms. Using established benchmarks, we evaluate our model in two application scenarios, data cleaning and tabular ML tasks. In a comprehensive suite of experiments we demonstrate the impact of realistic error models on data cleaning benchmarks. Our results also show that a simple generative error model captures a wide range of error mechanisms and offers a convenient formalization of data perturbations to improve the generalizability, robustness and reproducibility of data cleaning research.

**Contributions:**

I ran experiments to determine the scalability of the library with respect to memory and runtime. I also ran experiments to determine how different error models affect the downstream performance of machine learning models. Finally, I aided in the presentation of the results via prose checking and producing scientific visualizations.

## 📖 Editing/ Errata Addition of Machine Learning Kurz & Gut
- I read the book Machine Learning Kurz und Gut in German and pointed out a few errors to the author.
- Shows some proficiency in German written communication.
- [Github](https://github.com/DJCordhose/buch-machine-learning-notebooks)

---

# Presentations

## 🗣️ PiMUC 2024 Statistics Research Presentation (WWU)

- In this project, I present an example application of a novel statistical test to reaction times data.
- This was worked on under the supervision of Professor Kimihiro Noguchi of the WWU Mathematics department.
- We obtained funding from the WWU Mathematics department to travel to the 2024 Pacific inland Undergraduate Mathematics Conference (PiMUC) to present.
- [Presentation](reports/PiMUC_2024_Presentation_Chandler.pdf)

## 🗣️ PiMUC 2023 Statistics Research Presentation (WWU)

- In this project, I present a statistical test developed by Professor Kimihiro Noguchi of the WWU Mathematics department, to which I contributed by running simulation study code on the compute cluster and doing data visualization.
- This was worked on under the supervision of Professor Kimihiro Noguchi of the WWU Mathematics department.
- We obtained funding from the WWU Mathematics department to travel to the 2023 Pacific inland Undergraduate Mathematics Conference (PiMUC) to present.
- [Presentation](reports/Presentation_WI23.pdf)

---

# Posters

## 🧮 Scholar's Week 2024 Poster (WWU)

- In this poster, I presented results from my senior research project with my team members.
- This project was concerned with the prediction of various stellar parameters given satellite data using deep learning.
- Done in the HutchResearch group at WWU.
- [Poster](reports/HR_ScholarsWeek2024.pdf)

## 🧮 Joint Mathematics Meetings 2024 Poster (WWU)

- In this poster, I presented research regarding the simulation study aspect of the development of a novel class of statistical tests at the 2024 Joint Mathematics Meetings in San Francisco.
- This was done under supervision of Professor Kimihiro Noguchi of the WWU Mathematics department.
- We obtained funding from the WWU Mathematics department to travel to and stay in San Francisco for the 2024 Joint Mathematics Meetings.
- [Poster](reports/A_Simulation_Study_for_the_Evaluation_of_a_Novel_Class_of_Statistical_Tests.pdf)

## 🧮 Society of Industrial and Applied Mathematicians 2023 Biannual Meeting Poster (WWU)

- In this poster, I presented on the simulation study component of the development of a novel class of non-parametric statistical tests developed by Professor Kimihiro Noguchi in the WWU Mathematics Department.
- The SIAM 2023 Biannual Meeting was hosted at WWU.
- [Poster](reports/SIAM2023_Poster.pdf)

---

# Organizations

- [CalgoLab](https://calgo-lab.de/)
- [HutchResearch](https://fw.cs.wwu.edu/~hutchib2/hutchresearch.html)
- [WWU Mathematics Department](https://mathematics.wwu.edu/)
