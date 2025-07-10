---
layout: page
title: SRA Metadata Search
description: LLM-powered Semantic Search Platform
---

**Role:** AI Programmer  
**Company:** D24H  
**Project Period:** Jan 2025 – Jun 2025

> *"Developed a production-grade, **open-source**, natural language search engine for the world’s largest public genomic resource — the Sequence Read Archive (SRA) — enabling researchers to query and filter 35M+ records using semantic search, advanced filters, and state-of-the-art AI models."*

### Project Highlights

- **LLM Integration:** Built an end-to-end query interpretation pipeline using Gemini-2.0-flash-lite for natural language parsing, typo correction, and metadata extraction.
- **Semantic & ANN Search:** Engineered fast, accurate semantic search with BERT-based [SentenceTransformers](https://www.sbert.net) and [pgvector](https://github.com/pgvector/pgvector), supporting <0.2s query speed on 35M+ samples.
- **Advanced Filtering:** Supported complex queries on organism, geography, time, sequencing platform, and more, combining both semantic and structured filters.
- **Reranking & Relevance:** Integrated transformer-based cross-encoder models ([Jina AI](https://github.com/jina-ai)) for context-aware reranking of search results.
- **User Interface:** Designed a researcher-friendly UI for flexible searching and immediate data exploration, removing the need for SQL or bioinformatics expertise.
- **Scalable Infrastructure:** Leveraged PostgreSQL 16, pgvector 0.8.0, and efficient embedding storage to achieve high throughput and low-cost querying at scale.

**Key Technologies:** Python, Flask, PostgreSQL, pgvector, SentenceTransformers, JinaAI, Pandas, Torch, LLMs

<div class="container my-5">
  <h3 class="mb-4">System Interface</h3>
  <div class="row g-4">
    <div class="col-12 col-md-6 text-center">
      <figure class="figure">
        <img src="/SRA%20Metadata%20Study%20Search.jpeg" class="img-fluid rounded shadow-sm" style="max-width:95%;" alt="Study Search Example">
        <figcaption class="figure-caption small">Study Search Example</figcaption>
      </figure>
    </div>
    <div class="col-12 col-md-6 text-center">
      <figure class="figure">
        <img src="/StudyResult.jpeg" class="img-fluid rounded shadow-sm" style="max-width:95%;" alt="Semantic Search Result">
        <figcaption class="figure-caption small">Semantic Study Search Result</figcaption>
      </figure>
    </div>
    <div class="col-12 col-md-6 text-center">
      <figure class="figure">
        <img src="/SRA%20Metadata%20Sample%20Search.jpeg" class="img-fluid rounded shadow-sm" style="max-width:95%;" alt="Sample Search Example">
        <figcaption class="figure-caption small">Sample Search Example</figcaption>
      </figure>
    </div>
    <div class="col-12 col-md-6 text-center">
      <figure class="figure">
        <img src="/SRA%20Metadata%20Sample%20Result.jpeg" class="img-fluid rounded shadow-sm" style="max-width:95%;" alt="Sample Search Result">
        <figcaption class="figure-caption small">Sample Search Result</figcaption>
      </figure>
    </div>
    <div class="col-12 col-md-6 text-center">
      <figure class="figure">
        <img src="/SRA%20Metadata%20Home%201.jpeg" class="img-fluid rounded shadow-sm" style="max-width:95%;" alt="Home UI Example">
        <figcaption class="figure-caption small">Home UI</figcaption>
      </figure>
    </div>
    <div class="col-12 col-md-6 text-center">
      <figure class="figure">
        <img src="/SRA%20Metadata%20Home%202.jpeg" class="img-fluid rounded shadow-sm" style="max-width:95%;" alt="Home UI Example">
        <figcaption class="figure-caption small">Home UI</figcaption>
      </figure>
    </div>
  </div>
</div>

### References:
- [NCBI SRA](https://www.ncbi.nlm.nih.gov/sra)  
- [pgvector Documentation](https://github.com/pgvector/pgvector)  
- [JinaAI](https://github.com/jina-ai)  
- [SentenceTransformers](https://www.sbert.net)

## [GitHub](https://github.com/leod24h/sra-search)