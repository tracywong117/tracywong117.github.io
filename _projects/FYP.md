---
layout: page
title: Final Year Project
description: Spam Movie Reviews Detection through Supervised Learning
img: 
importance: 1
category: school
related_publications: false
---

<style>
    :root {
      --primary: #203864;
      --accent:rgb(96, 108, 186)
      --bg:rgb(127, 155, 184);
      --text: #222;
      --card: #fff;
      --border: #e6e8ec;
    }
    header {
      text-align: center;
      margin-bottom: 32px;
    }
    h1 {
      margin-top: 0;
      color: var(--primary);
      font-size: 2.1rem;
      font-weight: 700;
      letter-spacing: -1px;
    }
    h2 {
      color: var(--primary);
      font-size: 1.3rem;
      margin-top: 2.3em;
    }
    h3 {
      color: var(--accent);
      font-size: 1.1rem;
      margin-top: 1.7em;
      margin-bottom: 0.6em;
    }
    .key-points {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin: 12px 0 16px 0;
    }
    .key-point {
      background: #f2faf7;
      border-left: 5px solid var(--accent);
      padding: 12px 18px;
      border-radius: 7px;
      flex: 1 1 250px;
      min-width: 220px;
    }
    blockquote {
      border-left: 4px solid var(--accent);
      background: #f7fdfa;
      margin: 1.1em 0;
      padding: 12px 18px;
      color: #3a5566;
      font-size: 1.02rem;
      border-radius: 6px;
    }

  </style>

## Abstract
Identifying spam reviews is essential for trustworthy movie recommendation platforms. While much research has been devoted to commercial goods, spam detection in movie reviews—especially in Chinese—remains underexplored. In this project, we constructed a high-quality, labeled dataset from Douban Movie, engineered domain-specific features, and evaluated multiple supervised learning models for effective spam detection.


## Motivation
Online movie reviews influence public opinion and box office performance. The rise of paid posters and fake reviews undermines user trust and distorts analytics. Our work aims to restore the integrity of movie review platforms by reliably detecting and filtering out spam reviews using AI and data-driven techniques.

## Methodology

<div align="center">
  <img src="/assets/graphics/spam-movie-reviews-detection-workflow.png">
</div>

- **Data Collection**: Scraped over 5,000 reviews from Douban Movie and manually labeled a balanced dataset of 1,600 reviews (800 spam, 800 genuine) with the help of multiple annotators.
- **Feature Engineering**: Combined classic NLP (TF-IDF, sentiment analysis) with movie-domain features: counts of Chinese characters, English words, numbers, movie name mentions, review ratings, and posting time.
- **Modeling**: Evaluated Naïve Bayes, KNN, Logistic Regression, SVM (RBF &amp; Linear), and Decision Tree models. Used accuracy, F1-score, and ROC AUC for assessment.

## Result
<div class="key-point">
  <strong>Best Models</strong><br>
  Logistic Regression, SVM, and Decision Tree achieved the highest accuracy (&gt;80%).
</div>
<div class="key-point">
  <strong>Effective Features</strong>
  <ul>
    <li>Chinese character count</li>
    <li>English word count</li>
    <li>Number count</li>
    <li>Movie name mentions</li>
    <li>Sentiment score</li>
    <li>Review rating</li>
    <li>Posting time</li>
  </ul>
</div>
<div class="key-point">
  <strong>Insights</strong><br>
  Spam reviews are typically shorter, less detailed, and show more extreme sentiment and ratings.
</div>

## Key Takeaways
- Building a labeled, domain-specific dataset is crucial for reliable fake review detection.
- Tailored feature engineering improves model performance over generic NLP features alone.
- The methodology and dataset provide a strong foundation for future research in Chinese-language review filtering.

## Future Work
- Expand the dataset with more reviews and greater diversity across movies.
- Add lexical and semantic features (readability, POS tags, slang, actor names).
- Train custom sentiment analyzers specific to movie reviews in Chinese.
- Explore deep learning approaches (RNN, Transformer) for richer semantic understanding.
- Release dataset for the research community.

## Acknowledgements
<blockquote>
This research was conducted independently and self-funded. We thank Professor Leung Ho Fung for his supervision and our annotators for their dedication.
</blockquote>


## [GitHub](https://github.com/tracywong117/Spam-Movie-Reviews-Detection) | [Report](/assets/spam-movie-reviews-detection-through-supervised-learning-report.pdf)