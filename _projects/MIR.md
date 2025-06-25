---
layout: page
title: Music Information Retrieval Project
description: Auto-Generated Beatmaps and Song Feature Visualization for a Rhythm Game
img: 
importance: 2
category: school
giscus_comments: false
---

## Overview

**Melody Quest** is a rhythm game I developed using Python 3 and the PyGame framework. My project allows you to import any song and auto-generate a beatmap you can play—no more being limited to preset music! Besides gameplay, Melody Quest visualizes the song's waveform and detects its mood using machine learning.

## Project Inspiration

As a rhythm game fan and a student of music information retrieval, I often wished I could play rhythm games with my own music. Melody Quest is my answer: a fully customizable rhythm game that generates beatmaps and visualizations for any imported song.

## Key Features

- **Custom Songs:** Import any song and instantly generate a beatmap.
- **Smart Beatmaps:** Uses onset detection, melody extraction, and pitch estimation for accurate beatmaps.
- **Mood Detection:** Classifies a song's mood using machine learning (arousal & valence).
- **Waveform Visualization:** Real-time, mood-colored waveform synced with gameplay.
- **Immersive UI:** Combo and score tracking, mood-based visuals, and animated backgrounds.

## How It Works

### User Interface

When you launch Melody Quest:

1. **Load a Song:** Choose any local audio file.
2. **Start Screen:** Get ready with an introduction page.
3. **Gameplay:** Beatmaps appear as falling notes. Hit the right keys in time with the music. 
4. **Visualization:** The top of the screen displays a waveform colored to match the song’s mood.
5. **Metrics:** Track your score and combo streaks live.

### Beatmap Generation

Beatmap creation relies on several music information retrieval techniques:

1. **Onset Detection:** Finds precise moments when notes are played (works best for simple/monophonic music).
2. **Melody Extraction & Separation:** For complex music, the system isolates the main melody, avoiding over-dense or unplayable beatmaps.
3. **Pitch Estimation:** Assigns notes to game columns based on their pitch, thanks to autocorrelation analysis.
4. **Speed Control:** For very dense music, closely-packed notes are randomly dropped so gameplay stays fun and feasible.

*Beatmaps are exported to a text file for fast reloading.*

### Mood Detection

Melody Quest uses machine learning to identify a song’s **mood** along two axes:

- **Arousal:** How intense/exciting the music feels.
- **Valence:** Whether the mood is positive or negative.

#### Data & Models

- Used the [Emotion in Music Database (1000 songs)](https://www.kaggle.com/datasets/mircealex/music-emotions) after testing other datasets.
- Extracted 57 audio features (e.g., tempo, MFCCs, chroma, spectral features).
- Tried several models: Linear Regression, Naïve Bayes, SVM, Random Forest.
- **Best results:** Linear Regression for arousal; Random Forest for valence.

| Model | Arousal RMSE | Arousal R² | Valence RMSE | Valence R² |
|-------|:------------:|:----------:|:------------:|:----------:|
| LR    | 0.1289       | 0.5997     | 0.1787       | 0.1485     |
| NB    | 0.1299       | 0.5934     | 0.1750       | 0.1836     |
| SVM   | 0.1311       | 0.5855     | 0.1815       | 0.1214     |
| RF    | 0.1328       | 0.5745     | 0.1691       | 0.2377     |


#### Mood-to-Color Mapping

| Mood      | Color   |
|-----------|---------|
| Happy     | Yellow  |
| Anxiety   | Purple  |
| Relaxing  | Green   |
| Sad       | Blue    |


### Waveform Visualization

- **Librosa** extracts audio data for waveform plotting.
- **Pygame** renders the waveform, using the mood color as detected above.
- The waveform is **synchronized** with the music playback for immersive feedback.

## Technologies Used

- **Python 3**
- **PyGame** – Game engine & UI
- **Tkinter** – File dialogs & some UI
- **Librosa** – Audio analysis
- **Scikit-learn** – Machine learning
- **MidJourney AI** – Background art generation

## What I Learned

Building Melody Quest was a comprehensive learning experience in:

- Python game development (PyGame, Tkinter)
- Music information retrieval (onset detection, melody extraction, pitch estimation)
- Machine learning for audio features (mood classification)
- Designing engaging, responsive game interfaces

## References

1. [AutoRhythm (Open Source Rhythm Game)](https://github.com/Garlov/AutoRhythm)
2. Gómez-Cañón et al., 2021. [Music Emotion Recognition: Toward new, robust standards in personalized and context-sensitive applications](https://ieeexplore.ieee.org/document/9547282)
3. [MidJourney AI](https://midjourney.com/) – AI-generated backgrounds
4. [Librosa Documentation](https://librosa.org/doc/latest/index.html)
5. Müller, M. (2015). [Onset Detection](https://www.audiolabs-erlangen.de/resources/MIR/FMP/C6/C6S1_OnsetDetection.html)
6. Müller, M., Rosenzweig, S. (2015). [Melody Extraction and Separation](https://www.audiolabs-erlangen.de/resources/MIR/FMP/C8/C8S2_MelodyExtractSep.html)
7. [Autocorrelation in MIR](https://musicinformationretrieval.com/index.html)
8. Eerola, T., Vuoskoski, J. K. (2011). [Comparison of models of emotion in music](https://journals.sagepub.com/doi/10.1177/0305735610362821)
9. Soleymani, M. et al. (2013). [1000 Songs for Emotional Analysis of Music](https://dl.acm.org/doi/10.1145/2506364.2506365)

## [GitHub](https://github.com/tracywong117/Melody-Quest) | [Report](/assets/Auto-Generated Beatmaps and Song_Feature_Visualization_for_a_Rhythm_Game.pdf)