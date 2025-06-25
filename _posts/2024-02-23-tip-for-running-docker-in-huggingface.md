---
layout: post
title: Run any Docker container in Huggingface Space
date: 2024-02-23 12:00:00
description: 
tags: Docker
categories: SWE
---

## Run any Docker container in Huggingface Space
Refer to [Huggingface Doc](https://huggingface.co/docs/hub/en/spaces-sdks-docker), we can host a Docker container in Huggingface(HF) Space. The following is a Dockerfile template where you install all the dependencies required by your model and host the web app on the HF Space. And, there are some tips for pushing your web app to the HF Space. 

### Dockerfile template
```Dockerfile
# Use the specific base image
FROM <base_image>

# Set up a new user named "user" with user ID 1000
RUN useradd -m -u 1000 user

# Set up environment variables for the user
ENV HOME=/home/user \
    PATH=/home/user/.local/bin:$PATH

# Set the working directory to the user's home directory
WORKDIR $HOME/app


# Install all the dependencies here


# Change ownership of the working directory to the user
RUN chown -R user:user $HOME/app

# Switch to the user
USER user

# Copy all files to the working directory with correct ownership
COPY --chown=user:user ./ $HOME/app/

# Install required Python dependencies
RUN pip install -r requirements.txt

# Expose the desired port
EXPOSE 7860

# Set the command to run the Python application
CMD ["python", "app.py"]
```

<!-- ### Use git lfs to track binary file and large file
Git LFS (Large File Storage) is an extension for Git that allows you to manage large files more efficiently. It replaces large files in your Git repository with text pointers while storing the actual file content in a separate location.
Install git lfs
logseq.order-list-type:: number
```
git lfs install
```
Track file
logseq.order-list-type:: number
```
git lfs track "<file_pattern>"
```
For File pattern in git,   
"*.jar" means all .jar file   
"folder/*" means all files in the folder  
"folder/**" means all files and directories in the folder  

### Reset git commit
You may face error while pushing your commit to remote Huggingface repository. At that time, you need to reset your git to commit that doesn't have the problem before you can push.
```bash
git reset --soft HEAD~<number_of_commits_you_want_to_go_back>
```
> [!NOTE]  
The `--soft` option ensures that your changes are preserved and become staged changes instead of being completely discarded.  
**DO NOT USE** --hard unless you really want to discard all the changes.  

### Unstage the changes
After resetting your commit, your changes in the commit will become staged changes. You may unstage all changes using 
```bash
git restore --staged .
``` -->
