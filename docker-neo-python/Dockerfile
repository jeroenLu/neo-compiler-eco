# Dockerfile to create images running some services offered by neo-python
FROM ubuntu:18.04
LABEL maintainer="NeoResearch"

# Install dependencies
RUN apt-get update && apt-get install -y \
    wget \
    git-core \
    python3.6 \
    python3.6-dev \
    python3.6-venv \
    python3-pip \
    libleveldb-dev \
    libssl-dev \
    vim \
    nano \
    xxd \
    screen \
    man \
    curl

# APT cleanup to reduce image size
RUN rm -rf /var/lib/apt/lists/*

RUN mkdir neo-python
WORKDIR /neo-python

# Everything should be in the same line, then, clone happens again, if necessary

RUN git clone https://github.com/CityOfZion/neo-python.git /neo-python
RUN cd /neo-python && git pull && git checkout 773e57e72b24a00f6d6d0f9b6fe701e3bb0e7d31 # v0.8.1

# Install the dependencies
RUN pip3 install -e .

#==========================================================================
#====================== RPC and RESTFULL API interface ====================
#Script used to start  neopy
ADD start_neopython_rest.sh /opt/
#==========================================================================

#Loop that forces python clients to wait for csharp nodes
ADD waitNodes.sh /opt
