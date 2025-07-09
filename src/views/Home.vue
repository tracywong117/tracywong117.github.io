<template>
    <div class="flex flex-col items-center justify-center pt-10">
        <div class="flex mx-auto w-4/5 xl:w-260 p-2">
            <div class="flex flex-col items-center md:flex-row gap-15">
                <div class="md:w-2/6 w-full flex flex-col items-center">
                    <img src="/tracy-image.png" alt="Tracy Wong" class="">
                    <h3 class="pt-3 text-center mt-4">Tracy Wong</h3>
                    <h4 class="text-center text-gray-600">AI Programmer</h4>
                </div>
                <div class="md:w-4/6 w-full">
                    <h1>About me</h1>
                    <div class="py-2">
                        <p>
                            I am an AI Programmer at <a href="https://www.d24h.hk/" target="_blank"
                                class="website-link">The Laboratory of Data Discovery for Health</a>, where I train
                            embedding models for short sequences in <a href="https://www.ncbi.nlm.nih.gov/sra"
                                target="_blank" class="website-link">Sequence Read Archive</a> using
                            Transformer architectures and build large-scale
                            search systems for SRA metadata and short sequences by similarity. Optimizing running time
                            and memory usage is one of my main focuses, which
                            includes wrapping C++ code with Python interfaces to offload heavy computations from Python
                            and implementing
                            efficient data structures. I also regularly read research papers to understand how others
                            approach similar problems and keep up with the latest advancements.
                        </p>
                        <p>
                            I graduated with a Bachelor of Engineering in Artificial Intelligence - Systems &
                            Technologies from The
                            Chinese University of Hong Kong in 2023. I minored in Mathematics, which has helped me
                            develop a strong foundation in mathematical concepts and their applications in AI.
                        </p>

                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div class="md:col-span-2">
                            <!-- Column 1 content here -->
                            <h2>Interests</h2>
                            <ul class="list-disc pl-5">
                                <li>Machine Learning</li>
                                <li>Computer Vision</li>
                                <li>Data Structures and Algorithms</li>
                                <li>Quantitative Trading</li>
                            </ul>

                        </div>
                        <div class="md:col-span-3">
                            <h2>Education</h2>
                            <div class="flex items-start">
                                <div class="pr-2">
                                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path
                                            d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
                                    </svg>
                                </div>
                                <div>
                                    <div>
                                        B.Eng. in Artificial Intelligence - Systems & Technologies, 2023
                                    </div>
                                    <div class="text-gray-600 text-sm">
                                        The Chinese University of Hong Kong
                                    </div>

                                </div>
                            </div>
                            <!-- <i class="fa-brands fa-github text-1xl  ml-4"></i> GitHub -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- spacing -->
        <div class="h-10"></div>
        <!-- Projects -->

        <div class="flex flex-col mx-auto w-4/5 xl:w-260 px-4 py-4 bg-gray-100 gap-10">
            <div class="flex flex-col items-start md:flex-row gap-15">
                <div class="md:w-2/6 w-full">
                    <h1>Work Projects</h1>
                </div>
                <div class="md:w-4/6 w-full">
                    <div>
                        <div class="flex flex-row gap-2">
                            <div>
                                <a href="">
                                    <h2>
                                        SRA Sequence Search
                                    </h2>
                                </a>
                                <p class="description">
                                    The SRA Sequence Search project aims to provide a powerful search engine for biological
                                    sequences stored in the Sequence Read Archive (SRA). It allows users to perform
                                    sequence-based
                                    searches, enabling them to find specific sequences or related data efficiently.
                                </p>
                            </div>
                            
                        </div>
                        <!-- <div class="flex gap-2">
                            <a class="link-button">
                                <i class="fa-brands fa-github text-1xl"></i>GitHub
                            </a>
                        </div> -->
                    </div>
                    <div>
                        <a href="">
                            <h2>
                                SRA Metadata Search
                            </h2>
                        </a>
                        <p class="description">
                            The SRA Metadata Search project focuses on developing a scalable and efficient search
                            infrastructure for the Sequence Read Archive (SRA). It aims to enable researchers to quickly
                            and easily find relevant metadata for biological sequences, facilitating data discovery and
                            analysis.
                        </p>
                        <div class="flex gap-2">
                            <a href="https://github.com/leod24h/sra-search" target="_blank" class="link-button">
                                <i class="fa-brands fa-github text-1xl"></i>GitHub
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="">
                            <h2>
                                SafeGuardChain: Real-Time Person Recognition, Tracking, and Object Detection
                            </h2>
                        </a>
                        <p class="description">
                            SafeGuardChain is a real-time person recognition, tracking, and object detection system
                            designed to enhance security and safety in public spaces. It utilizes advanced computer
                            vision
                            techniques to identify individuals and track their movements, while also detecting objects
                            of
                            interest.
                        </p>
                        <div class="flex gap-2">
                            <a href="https://www.innoblocktech.com/safeguard-series/" target="_blank"
                                class="link-button">
                                Link
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-start md:flex-row gap-15">
                <div class="md:w-2/6 w-full">
                    <h1>School Projects</h1>
                </div>
                <div class="md:w-4/6 w-full">
                    <div>
                        <a href="">
                            <h2>
                                Spam Movie Reviews Detection through Supervised Learning
                            </h2>
                        </a>
                        <p class="description">
                            This project focuses on detecting spam movie reviews using supervised learning techniques.
                            It involves training a machine learning model to classify reviews as spam or non-spam based
                            on their content, helping to improve the quality of user-generated content on movie review
                            platforms.
                        </p>
                        <div class="flex gap-2">
                            <a href="https://github.com/tracywong117/Spam-Movie-Reviews-Detection" target="_blank"
                                class="link-button">
                                <i class="fa-brands fa-github text-1xl"></i>GitHub
                            </a>
                            <!-- <a href="" target="_blank" class="link-button">PDF</a> -->
                        </div>
                    </div>
                    <div>
                        <a href="">
                            <h2>
                                Auto-Generated Beatmaps and Song Feature Visualization for a Rhythm Game
                            </h2>
                        </a>
                        <p class="description">
                            This project involves the development of a system that automatically generates beatmaps for
                            a
                            rhythm game based on song features. It also includes a visualization component to help
                            players
                            understand the rhythm and timing of the music, enhancing their gaming experience.
                        </p>
                        <div class="flex gap-2">
                            <a href="https://github.com/tracywong117/Melody-Quest" target="_blank" class="link-button">
                                <i class="fa-brands fa-github text-1xl"></i>GitHub
                            </a>
                            <a href="https://github.com/tracywong117/Melody-Quest/blob/main/Auto-Generated%20Beatmaps%20and%20Song%20Feature%20Visualization%20for%20a%20Rhythm%20Game.pdf"
                                target="_blank" class="link-button">PDF</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-start md:flex-row gap-15">
                <div class="md:w-2/6 w-full">
                    <h1>Side Projects</h1>
                </div>
                <div class="md:w-4/6 w-full">
                    <div>
                        <a href="">
                            <h2>
                                AI Video Segment Cutter
                            </h2>
                        </a>
                        <p class="description">
                            The AI Video Segment Cutter is a tool designed to automatically segment videos based on
                            content analysis. It uses artificial intelligence algorithms to identify key moments in a
                            video, allowing users to extract and save specific segments for further use or analysis.
                        </p>
                        <div class="flex gap-2">
                            <a href="https://github.com/tracywong117/AI-Video-Segment-Cutter" target="_blank"
                                class="link-button"><i class="fa-brands fa-github text-1xl"></i>GitHub</a>
                            <a href="https://colab.research.google.com/drive/18GD-tQ9hIRG6f_9hLGMqSjx8PNTXPmy3?usp=sharing"
                                target="_blank" class="link-button">Google Colab</a>
                        </div>
                    </div>
                    <div>
                        <!-- <a href=""> -->
                        <h2>
                            Daily Mood Tracker
                        </h2>
                        <!-- </a> -->
                        <p class="description">
                            The Daily Mood Tracker is a personal project that allows users to log and track their daily
                            moods. It provides insights into emotional patterns over time, helping individuals
                            understand
                            their mental well-being and identify triggers for mood changes.
                        </p>
                        <div class="flex gap-2">
                            <a href="https://github.com/tracywong117/daily-mood-tracker" target="_blank"
                                class="link-button">
                                <i class="fa-brands fa-github text-1xl"></i>GitHub
                            </a>
                        </div>
                    </div>
                    <div>
                        <!-- <a href=""> -->
                        <h2>
                            Flower Journal: Self-implemented Draggable Calendar
                        </h2>
                        <!-- </a> -->
                        <p class="description">
                            The Flower Journal is a self-implemented draggable calendar application that allows users to
                            organize their schedules and tasks visually. It features a user-friendly interface with
                            drag-and-drop
                            functionality, enabling easy management of events and reminders.
                        </p>
                        <div class="flex gap-2">
                            <a href="https://github.com/tracywong117/FlowerJournal" target="_blank" class="link-button">
                                <i class="fa-brands fa-github text-1xl"></i>GitHub
                            </a>
                            <a href="https://tracywong117.github.io/FlowerJournalApp" target="_blank"
                                class="link-button">Demo site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Home'
}
</script>