---
layout: page
title: "Projects"
permalink: /projects/
---

Here I list noteworthy projects that I have built (or added to) either alone or with a team.

---

# Spotlight Projects

## 🗄️ RAG/Vector DB/BERT Fine Tune
- In this project, I worked on implementing a RAG system. This included fine tuning BERT on a kubernetes cluster, comparing vector databases such as Annoy and FAISS, and using LangChain to build the pipeline.
- I worked with one other student and I worked on English data while they worked on German data.
- [Presentation (English Data)](reports/BERT_FT_VDB_RAG.pdf)
- [Vector DB Notebook](reports/VectorDB.html)
- [RAG Notebook](reports/RAG.html)
- [GitHub](https://github.com/chandlerNick/Tax_Law_RAG)

## 📊 tab-err PyPi (Open Source Contribution)
- Working at the BHT's [Calgo Lab](https://calgo-lab.de/) with Sebastian Jaeger I added to the tab-err, realistic errors in tabular data, package on PyPi.
- Wrote basic tests, developed a high level api, and modified some other error types as well as worked on bug fixes in python.
- [PyPi](https://pypi.org/project/tab-err/)
- [GitHub](https://github.com/calgo-lab/tab_err)

## 🌐 K-Means Clustering of Cities
- Implementation of the K-Means algorithm to cluster high population cities based on geographic coordinates.
- I wrote this in R Markdown for fun.
- [Report](reports/LargeCitiesVisualization.html)

---

## 🕵️ CIA World Factbook Visualization
- Coming Soon...

## ☁️ Weather Time Series Forecasting
- Coming Soon...

## 4️⃣ Anscombe's Quartet
- Details the importance of data visualization by an exploratory analysis of Anscombe's Quartet in R.
- Written in R Markdown
- [Report](reports/AnscombesQuartet.html)

## 📖 Editing/ Errata Addition of Machine Learning Kurz & Gut
- I read the book Machine Learning Kurz und Gut in German and pointed out a few errors to the author.
- Shows some proficiency in German written communication.
- [Github](https://github.com/DJCordhose/buch-machine-learning-notebooks)

## 🏦 Messenger Bot
- In this project, I setup messaging with the Telegram API, GitHub actions, and yfinance to ping my phone each day before the US Stock Exchange opens with information about the S&P 500 and crypto.
- A future direction I am interested in is having LLMs summarize news articles and send a daily report to my phone from a curated list of sources.
- [GitHub](https://github.com/chandlerNick/TechnoHerald)

## ☁️ Business Intelligence Presentation
- This is a presentation for a team project to analyze data from a 2006 AOL USA search query dataset which we hosted as an Exasol database on a Virtual Machine.
- We were required to augment the database with another dataset, so we chose weather events in the USA during 2006.
- The skills developed were: SQL, Python, OLAP, ETL, Data Visualization, Tableau, and EDA.
- [Presentation](reports/BIPresentation.pdf)

## ⚡ Berlin Electric Vehicle Charger Geo-Visualizer
- In this project, I loaded data from various German government sources about the population and charging stations in various postal codes in Berlin.
- A heatmap overlay of a map of Berlin, subdivided by postal code is presented with options for viewing population, number of charging stations, and estimated new station demand.
- Finally, a suggestion box functionality allows users to input suggestions attached to a given postal code.
- [Streamlit Page](https://berlinevdistributiongeovisualizer.streamlit.app/)

## 🪙 Income Tax Calculator
- In this application I loaded 2020 IRS data and used linear interpolation of tax brackets to compute the estimated median income of various zip codes in the United States.
- [Streamlit Page](https://incometaxdataanalyzer.streamlit.app/)
- [Data](https://www.irs.gov/statistics/soi-tax-stats-individual-income-tax-statistics-2020-zip-code-data-soi)

## 🤖 NumPy Feed Forward Neural Network
- In this project, I implemented (alone, in NumPy, without the use of LLMs) a customizable feed forward neural network that can have an arbitrary number of layers and hidden units.
- This was done from the absolute basics, just matrix & vector operations to implement forwardpropagation, backpropagation, and minibatched stochastic gradient descent.
- [GitHub](https://github.com/chandlerNick/home/tree/main/WWU/Projects/DataScience_ML/NNFromScratch)

## 🏠 Housing Price Prediction Report
- In this project, I worked with a team of 3 other students to apply and compare several different statistical learning methodolgies in R on a real estate dataset from Kaggle.
- [Report](reports/MultivariateStatisticsHousingPricePrediction.pdf)
- [GitHub](https://github.com/chandlerNick/home/tree/main/WWU/Projects/DataScience_ML/RealEstatePricesReport)


## 🎓 Computer Science BS Senior Project Writeup
- This project was the culminating work of my senior research project in my bachelor's of computer science.
- I worked with a team of 3 people to build an applied deep learning model in Python using PyTorch, NumPy, Pandas, and Astropy to predict parameters of binary star systems.
- [Report](reports/SeniorProjectWriteup.pdf)
- [GitHub](https://github.com/chandlerNick/home/tree/main/WWU/Projects/DataScience_ML/WWUSeniorProject)

## 📈 Data Mining Analysis of Energy Economics Time Series
- In this project, I worked with one other student to analyze a set of time series concerning energy economics data. 
- During this project, we worked with faculty in the department of business and economics as well as the department of computer science.
- The main techniques employed were clustering of time series and sequence mining. Traditional techniques for forecasting were not explored.
- [Report](reports/AnalysisOfEnergyEconomicsTimeSeries.pdf)
- [GitHub](https://github.com/chandlerNick/home/tree/main/WWU/Projects/DataScience_ML/EnergyTimeSeries)

## ⚙️ Toy Operating System
- In this project, as we worked through the textbook: Operating Systems Concepts 10th Edition, we had to individually implement (in KPL & Assembly) a toy operating system, the Blitz OS.
- Due to academic integrity constraints I cannot publish my solution for this but I found the course instrumental in developing a deepened understanding of how operating systems work.
- [Book](https://en.wikipedia.org/wiki/Operating_System_Concepts)
- [Blitz OS Description](https://web.cecs.pdx.edu/~harry/Blitz/BlitzDoc/BlitzOverview.htm)
- [Blitz OS GitHub](https://github.com/hhauer/blitz)

## ⚙️ lsdir Implementation in C
- This was a midterm live coding question which I did before the advent of ChatGPT.
- We were given only 50 minutes to complete the program but I managed to get full points including extra credit.
- [GitHub](https://github.com/chandlerNick/home/tree/main/WWU/Projects/Programming/Systems_Networking/lsdirImplementation)

## 📡 TCP Client Server
- In this class project, I implemented a client server architecture that allowed for the communication of messages using TCP/IP and UNIX sockets in C.
- [Assignment Description](reports/AncientBookCurses.pdf)
- [GitHub](https://github.com/chandlerNick/home/tree/main/WWU/Projects/Programming/Systems_Networking/TCPClientServer)

## 📡 UDP Load Balancing Server
- In this class project, I implemented a UDP load balancing server using UNIX sockets in C.
- The assignment description is on the GitHub but in MS Word...
- [GitHub](https://github.com/chandlerNick/home/tree/main/WWU/Projects/Programming/Systems_Networking/UDPLoadBalancingServer)

## 📝 Text Editor
- In this assignment, I followed a lab to implement a text editor in Java. While not the most involved project, it is still a fun one.
- [GitHub](https://github.com/chandlerNick/home/tree/main/WWU/Projects/Programming/DataStructures_Algos/TextEditor)
