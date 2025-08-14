---
layout: page
title: Final Year Project
description: Spam Movie Reviews Detection through Supervised Learning
---

## Abstract
Identifying spam reviews is essential for trustworthy movie recommendation platforms. While much research has been devoted to commercial goods, spam detection in movie reviews—especially in Chinese—remains underexplored. In this project, we constructed a high-quality, labeled dataset from Douban Movie, engineered domain-specific features, and evaluated multiple supervised learning models for effective spam detection.


## Motivation
Online movie reviews influence public opinion and box office performance. The rise of paid posters and fake reviews undermines user trust and distorts analytics. Our work aims to restore the integrity of movie review platforms by reliably detecting and filtering out spam reviews using AI and data-driven techniques.

## Methodology

<div align="center">
  <img src="/spam-movie-reviews-detection-workflow.png">
</div>

**Data Collection**: Scraped over 5,000 reviews from Douban Movie and manually labeled a balanced dataset of 1,600 reviews (800 spam, 800 genuine) with the help of multiple annotators.
**Feature Engineering**: Combined classic NLP (TF-IDF, sentiment analysis) with movie-domain features: counts of Chinese characters, English words, numbers, movie name mentions, review ratings, and posting time.
**Modeling**: Evaluated Naïve Bayes, KNN, Logistic Regression, SVM (RBF &amp; Linear), and Decision Tree models. Used accuracy, F1-score, and ROC AUC for assessment.

## Result
> [!Important]
> **Best Models**  
> Logistic Regression, SVM, and Decision Tree achieved the highest accuracy (>80%).
> <br> <br>
> **Effective Features**  
> - Chinese character count  
> - English word count  
> - Number count  
> - Movie name mentions  
> - Sentiment score  
> - Review rating  
> - Posting time  
> <br>
> **Insights**  
> Spam reviews are typically shorter, less detailed, and show more extreme sentiment and ratings.

## Key Takeaways
* Building a labeled, domain-specific dataset is crucial for reliable fake review detection.
* Tailored feature engineering improves model performance over generic NLP features alone.
* The methodology and dataset provide a strong foundation for future research in Chinese-language review filtering.

## Future Work
* Expand the dataset with more reviews and greater diversity across movies.
* Add lexical and semantic features (readability, POS tags, slang, actor names).
* Train custom sentiment analyzers specific to movie reviews in Chinese.
* Explore deep learning approaches (RNN, Transformer) for richer semantic understanding.
* Release dataset for the research community.

## Acknowledgements
>This research was conducted independently and self-funded. We thank Professor Leung Ho Fung for his supervision and our annotators for their dedication.


## [GitHub](https://github.com/tracywong117/Spam-Movie-Reviews-Detection) | [Report](/assets/spam-movie-reviews-detection-through-supervised-learning-report.pdf)