﻿const generatedBibEntries = {
    "8852358": {
        "abstract": "Public transport buses exhibit uncertainties in their arrival/travel times, due to several factors such as signals, dwell times at bus stops, seasonal variations, fluctuating travel demands etc. Further, factors like excess vehicles, acute lack of lane discipline and diversity in modes of transport additionally plague the traffic in the developing world. Owing to these diverse factors, the bus arrival time prediction (BATP) continues to be a challenging problem especially in the developing world. The current work proposes a data-driven method to perform bus arrival time prediction in real-time. Unlike existing approaches, the proposed method explicitly learns both the spatial and temporal correlations/patterns of traffic in a novel and general fashion. In particular, it first detects the unknown order of spatial dependence and then learns general nonlinear and non-stationary correlations using supervised learning, for this detected order. The real time prediction problem is now posed as an inference problem on an associated non-linear dynamical system (NLDS) model. We propose to use an Extended Kalman Filter (EKF) to solve this inference problem in an approximate but efficient manner. We demonstrate the effectiveness of our proposed algorithm on real field data from challenging traffic conditions in the developing world. Our experiments demonstrate that the proposed EKF outperforms diverse existing state-of-art data driven approaches proposed for the same problem.",
        "author": "Achar Avinash, Rohith RegiKumar, B Anil",
        "booktitle": "2019 International Joint Conference on Neural Networks (IJCNN)",
        "doi": "10.1109/IJCNN.2019.8852358",
        "issn": "2161-4407",
        "journal": "IEEE",
        "keywords": "Correlation,Predictive models,Computational modeling,Real-time systems,Data models,Schedules,Kalman filters",
        "month": "July",
        "number": "NA",
        "pages": "1-8",
        "title": "Dynamic Bus Arrival Time Prediction exploiting Non-linear Correlations",
        "type": "article",
        "volume": "NA",
        "year": "2019"
    },
    "8947251": {
        "abstract": "Reliable and accurate prediction of bus arrival time is considered as one of the important services to attract people's choice of bus ridership. In this paper, we develop a simple yet accurate real-time bus arrival prediction system for a crowded small tourist city, like Macao, using accurate on-line bus locations provided by the government website. These accurate bus locations are freely available on-line, which are generated by dedicated sensors installed in bus stops and buses. We first proposed a link time model for storing all of the link times between adjacent bus stops on different bus routes in the entire network so that the trip time between any two of the bus stops in the network can be predicted in real-time. Three different simple models based on historical and real-time on-line bus locations, namely Simple Moving Average (SMA), Artificial Neural Network (ANN) and Hybrid Model, are proposed for the bus arrival prediction system, taking into account the real-time weather conditions. It was found that the Hybrid model perform the best among the three models. The average mean absolute percentage error (MAPE) for the Hybrid model is 17% and the average mean absolute error (MAE) and root mean square error (RMSE) is less than 1 minute. For future works, more advanced deep learning models with Kalman filtering can be evaluated, using on-line bus locations from more bus routes.",
        "author": "Lam, Chan-Tong and Ng, Benjamin and Leong, Su Hou",
        "booktitle": "2019 IEEE 19th International Conference on Communication Technology (ICCT)",
        "doi": "10.1109/ICCT46805.2019.8947251",
        "issn": "2576-7828",
        "journal": "IEEE",
        "keywords": "Predictive models,Real-time systems,Meteorology,Data models,Artificial neural networks,Urban areas,Global Positioning System",
        "month": "Oct",
        "number": "NA",
        "pages": "473-478",
        "title": "Prediction of Bus Arrival Time Using Real-Time on-Line Bus Locations",
        "type": "article",
        "volume": "NA",
        "year": "2019"
    },
    "8954709": {
        "abstract": "Bus arrival prediction has important implications for public travel, urban dispatch, and mitigation of traffic congestion. The factors affecting urban traffic conditions are complex and changeable. As the predicted distance increases, the difficulty of traffic prediction becomes more difficult. Forecast based on historical data responds quite slowly for changes under the short-term conditions, and vehicle prediction based on real-time speed is not sufficient to predict under long-term conditions. Therefore, an arrival prediction method based on temporal vector and another arrival prediction method based on spatial vector is proposed to solve the problems of remote dependence of bus arrival and road incidents, respectively. In this paper, combining the advantages of the two prediction models, this paper proposes a long short-term memory (LSTM) and Artificial neural networks (ANN) comprehensive prediction model based on spatial-temporal features vectors. The long-distance arrival-to-station prediction is realized from the dimension of time feature, and the short-distance arrival-to-station prediction is realized from the dimension of spatial feature, thereby realizing the bus-to-station prediction. Besides, experiments were conducted and tested based on the entity dataset, and the result shows that the proposed method has high accuracy among bus arrival prediction problems.",
        "author": "Liu, Hongjie and Xu, Hongzhe and Yan, Yu and Cai, Zaishang and Sun, Tianxu and Li, Wen",
        "doi": "10.1109/ACCESS.2020.2965094",
        "journal": "IEEE Access",
        "number": "NA",
        "pages": "11917-11929",
        "title": "Bus Arrival Time Prediction Based on LSTM and Spatial Temporal Feature Vector",
        "type": "article",
        "volume": "8",
        "year": "2020"
    },
    "9425771": {
        "abstract": "An accurate real-time public transport prediction system occupies an important position in urban development. It includes the accurate prediction of the model and the real-time processing of the fitting data. This paper developed a bus arrival time prediction system based on the Spark framework. The process included data collection, data storage (using HDFS), data preprocessing, and modeling (ARIMAX and SVR). Moreover, we have collected data of 78 days of Chiang Mai bus real-time location and location timestamp. We used these data to construct attributes related to bus prediction. The experiment results show that the SVR model's accuracy is as high as 99.5%, which is 25% higher than that of the ARIMAX model. Therefore, the time series prediction system developed based on the Spark framework with the SVR algorithm can quickly and accurately predict bus arrival time.",
        "author": "Ye, Li and Thiengburanathum, Pree and Thiengburanathum, Poon",
        "booktitle": "2021 Joint International Conference on Digital Arts, Media and Technology with ECTI Northern Section Conference on Electrical, Electronics, Computer and Telecommunication Engineering",
        "doi": "10.1109/ECTIDAMTNCON51128.2021.9425771",
        "journal": "IEEE",
        "keywords": "",
        "month": "March",
        "number": "NA volume - {NA",
        "pages": "243-248",
        "title": "A Real-Time Bus Arrival Time Prediction System Based on Spark Framework and Machine Learning Approaches: a case study in Chiang Mai",
        "type": "article",
        "year": "2021"
    },
    "BRUGLIERI2015493": {
        "abstract": "Promoting the use of public transportation and Intelligent Transport Systems, as well as improving transit accessibility for all citizens, may help in decreasing traffic congestion and air pollution in urban areas. In general, poor information to customers is one of the main issues in public transportation services, which is an important reason for allocating substantial efforts to implement a powerful and easy to use and access information tool. This paper focuses on the design and development of a real time mobility information system for the management of unexpected events, delays and service disruptions concerning public transportation in the city of Milan. Exploiting the information on the status of urban mobility and on the location of citizens, commuters and tourists, the system is able to reschedule in real time their movements. The service proposed stems from the state of the art in the field of travel planners for public transportation, available for Milan. Peculiarly, we built a representation of the city transit based on a time-expanded graph that considers the interconnections among all the stops of the rides offered during the day. The structure distinguishes the physical stations and the get on/get off stops of each ride, representing them with two different types of nodes. Such structure allows, with regard to the main focus of the project, to model a wide range of service disruptions, much more meaningful than those possible with approaches currently proposed by transit agencies. One of the most interesting point lies in the expressive capability in describing the different disruptions: with our model it is possible, for instance, to selectively inhibit getting on and/or off at a particular station, avoid specific rides, and model temporary deviations.",
        "author": "Maurizio Bruglieri, Francesco Bruschi, Alberto Colorni, Alessandro Lu\u00e8, Roberto Nocerino, Vincenzo Rana",
        "doi": "https://doi.org/10.1016/j.trpro.2015.09.003",
        "issn": "2352-1465",
        "journal": "Transportation Research Procedia",
        "keywords": "advanced traveller information, public transport, travel planner, time-dependent minimum path",
        "note": "18th Euro Working Group on Transportation, EWGT 2015, 14-16 July 2015, Delft, The Netherlands",
        "pages": "493-502",
        "title": "A Real-time Information System for Public Transport in Case of Delays and Service Disruptions",
        "type": "article",
        "url": "https://www.sciencedirect.com/science/article/pii/S2352146515001908",
        "volume": "10",
        "year": "2015"
    },
    "DALE2019749": {
        "abstract": "A Workplace Parking Levy (WPL) scheme raises a levy on private non-domestic off-street parking provided by employers. In April 2012 Nottingham became the first UK City to implement such a scheme with the revenue generated hypothecated for funding two additional tram lines into the city, the refurbishment of the main railway station and enhancements to a number of bus services. Evaluations of similar Parking Space Levies schemes in Australia show that their introduction, along with any transport improvements they part fund, have been followed by mode switch to non-car based modes, a pre-requisite for congestion constraint. The aim of this paper is to investigate the impact the introduction of the Nottingham Workplace Parking Levy and its associated transport improvements has had on transport mode choice for commuters. This research however, does not directly demonstrate cause and effect leaving open the possibility that the observed mode shift could be caused by exogenous factors. The paper is based on data collected from a survey of 2500 commuters in Nottingham, relating to their mode choice. The results indicate that 8.6% of commuters currently travelling by sustainable modes switched from the car between 2010 and 2016 at least in part due to the implementation of the WPL and/or the associated transport improvements. In the region of 50 per cent of those individuals gave the WPL as a stand-alone scheme as an important factor in their decision to shift away from the car via an increase in the cost of parking at work or because their employer had removed workplace parking spaces. However, this research has also revealed evidence of commuters switching to the car away from other modes demonstrating a significant suppressed demand for travel by car which in part offsets some of the beneficial impacts of the WPL package.",
        "author": "Simon Dale and Matthew Frost and Stephen Ison and Lucy Budd",
        "doi": "https://doi.org/10.1016/j.cstp.2019.09.001",
        "issn": "2213-624X",
        "journal": "Case Studies on Transport Policy",
        "number": "4",
        "pages": "749-760",
        "title": "The impact of the Nottingham Workplace Parking Levy on travel to work mode share",
        "type": "article",
        "url": "https://www.sciencedirect.com/science/article/pii/S2213624X19301063",
        "volume": "7",
        "year": "2019"
    },
    "Jabamony2020": {
        "abstract": "Advancement of the public transport system is important to modern society for reliable performance. Intelligent public transport system can utilize the time very effectively to give better performance to the society. Fast advancement in equipment, programming, and correspondence innovations has encouraged the rise of Internet associated devices that give perceptions and information gathering from modern reality. By interfacing, an internet\u0002enabled device with the public transport system leads to the intelligent public transport system. This paper proposed intelligent public transport with IoT enabled system to give an accurate prediction to the arrival time of the bus to the particular bus stops. Here, Artificial Neural Network (ANN) is used as a prediction algorithm and ANN is trained with different traffic parameters and environmental conditions. Parameters which are considered in the proposed system includes Distance(D), Waiting Time at Stops (WTS), Red signal Duration at Traffic Signal (RSD), Traffic Density (TD), Turning Density (TRD), Rush hours (RH), Weekends (WE), Weather conditions (WC), Number of passengers in the bus (NP), Public Holiday (PH), Road Type (RT). These parameters and the measured real-time arrival time of the bus in different stops for 10 days is used for training the ANN. This trained ANN is implemented on the server-side. In this paper, the performance of the proposed IOT-ANN-SPTS system is compared with the existing previous related works. From the performance analysis, it is shown that the proposed system produced less",
        "author": "Jabamony Jalaney, Ganesh",
        "doi": "10.22266/ijies2020.0229.29",
        "error (mae": "134.582, RMSE",
        "journal": "International Journal of Intelligent Engineering and Systems",
        "keywords": "Intelligent transportation system, Internet of things, Internet-connected sensory devices, Artificial neural network, Smart public transportation system, Public transport system.",
        "month": "02",
        "number": "NA",
        "pages": "312-323",
        "title": "IoT Based Bus Arrival Time Prediction Using Artificial Neural Network (ANN) for Smart Public Transport System (SPTS)",
        "type": "article",
        "volume": "13",
        "year": "2020"
    },
    "PETERSEN2019426": {
        "abstract": "Accurate and reliable travel time predictions in public transport networks are essential for delivering an attractive service that is able to compete with other modes of transport in urban areas. The traditional application of this information, where arrival and departure predictions are displayed on digital boards, is highly visible in the city landscape of most modern metropolises. More recently, the same information has become critical as input for smart-phone trip planners in order to alert passengers about unreachable connections, alternative route choices and prolonged travel times. More sophisticated Intelligent Transport Systems (ITS) include the predictions of connection assurance, i.e. an expert system that will decide to hold services to enable passenger exchange, in case one of the services is delayed up to a certain level. In order to operate such systems, and to ensure the confidence of passengers in the systems, the information provided must be accurate and reliable. Traditional methods have trouble with this as congestion, and thus travel time variability, increases in cities, consequently making travel time predictions in urban areas a non-trivial task. This paper presents a system for bus travel time prediction that leverages the non-static spatio-temporal correlations present in urban bus networks, allowing the discovery of complex patterns not captured by traditional methods. The underlying model is a multi-output, multi-time-step, deep neural network that uses a combination of convolutional and long short-term memory (LSTM) layers. The method is empirically evaluated and compared to other popular approaches for link travel time prediction and currently available services, including the currently deployed model at Movia, the regional public transport authority in Greater Copenhagen. We find that the proposed model significantly outperforms all the other methods we compare with, and is able to detect small irregular peaks in bus travel times very quickly.",
        "author": "Niklas Christoffer Petersen and Filipe Rodrigues and Francisco Camara Pereira",
        "doi": "https://doi.org/10.1016/j.eswa.2018.11.028",
        "issn": "0957-4174",
        "journal": "Expert Systems with Applications",
        "keywords": "Bus travel time prediction, Intelligent Transport Systems, Convolutional neural network (CNN), Long short-term memory (LSTM), Deep learning",
        "number": "NA",
        "pages": "426-435",
        "title": "Multi-output bus travel time prediction with convolutional LSTM neural network",
        "type": "article",
        "url": "https://www.sciencedirect.com/science/article/pii/S0957417418307486",
        "volume": "120",
        "year": "2019"
    },
    "Pei2019": {
        "abstract": "We propose a new structured transit system with flexible bus line length based on the real-time requests of passengers. This operation mode can meet the travel demands of passengers (lower travel-time cost) and reduce the number of unnecessary stops (without boarding or alighting activities). We then compare the performance of the proposed transit system with that of fixed-route transit service and show the pros and cons of each system for several passenger demand levels. It is found that at low-to-moderate demand levels, the proposed flexible-route system tends to provide the lowest total travel time. In comparing a real-world deployment of the system in Guangzhou with comparable alternative system states, the optimization of the former is evident in idle and tidal modes, in which the total travel times reduced by more than 10%. Moreover, this operating system can achieve enhanced performance with the development of automated vehicle technology in the future.",
        "author": "Pei, Mingyang and Lin, Peiqun and Ou, Junfeng",
        "doi": "10.1177/0361198119837502",
        "journal": "Transportation Research Record: Journal of the Transportation Research Board",
        "month": "04",
        "pages": "036119811983750",
        "title": "Real-Time Optimal Scheduling Model for Transit System with Flexible Bus Line Length",
        "type": "article",
        "volume": "2673",
        "year": "2019"
    },
    "inproceedings": {
        "abstract": "The increase of population has intensified everyday rush. Traffic congestions are still a problem in cities and are one of the main cause for public transport delays. City residents and visitors have experienced time loss by using public transport buses, because of waiting at the bus stops and not knowing if the bus is delayed or already serviced the stop. Therefore it is valuable for people to know at what time the bus should arrive (or is it already missed) at specific bus stop. Real-time public bus tracking and management system development has been the focus of many researchers, and many studies have been done in this area. This paper focuses on bus travel time prediction comparison between linear regression and support vector regression models (SVR), when using limited data set. Data were limited in a way that only historical GPS (Global Positioning System) coordinates of bus location (recorded each 30 seconds) and driven distance were used, there were no information about arrival/departure times, delays or dwell times. Distance between stops and delay (assumed values based on route observations by authors) were used as inputs for both models. It was concluded that SVR algorithm showed better results, but the difference was not significantly large.",
        "author": "Kviesis, Armands and Zacepins, Aleksejs and Komasilovs, Vitalijs and Munizaga, Marcela",
        "doi": "10.5220/0006816306430647",
        "journal": "Proceedings of the 4th International Conference on Vehicle Technology and Intelligent Transport Systems - RESIST,",
        "keywords": "Smart Public Transport, Public Buses, Arrival Time, GPS Data. , type : tested",
        "month": "01",
        "number": "NA",
        "pages": "643-647",
        "title": "Bus Arrival Time Prediction with Limited Data Set using Regression Models",
        "type": "article",
        "volume": "NA",
        "year": "2018"
    }
};