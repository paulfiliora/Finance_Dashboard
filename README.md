# FINSY 
## A sales and campaign management dashboard for small businesses

#### Overview & Technologies

A Full-Stack App combining back-end & front-end technologies
    - Back-end: Written in Java, Bootstrapped with Spring Boot and Docker Compose, Database creation and migrations with FlyWheel
    - Front-end: Written in Javascript, Built using React, React-Bootstrap Framework
    - API's with endpoints querying a PostGres Database with multiple tables

---

#### Features

    Sales entry recordings, Tasks lists, & Monthly Revenue Graphs with CRUD functions to a database

#### Installation/Demo
    - Within the java_back_end folder, run `docker-compose up`
    - Within the react-js_front-end, run `npm start`
    
#### Development Process
    After writing down a user story for a small business I created basic schema for tables and a basic dashboard-ui design, 
    Focused on setting up the BACK-END environment primarily until json data was available,
    Switched to FRONT-END to style a front end frame display GET data and perform a PUT via UI,
    Having a better understanding of BACK-END & FRONT-END interaction I alternated adding a new API and incorporating it to the UI
    
    

#### Project Proposal
    Problem from Client
    ::Space Whips:: recently began has now transitioned from a spacecraft salvage company to a repair and resale company. All aspect of business, including salvage, repair, and resale, are all carried out by 2 people creating a need for a management tool. They now require a small business management platform with a dashboard for quick overviews of sales, campaigns, and tasks, as well as logging new sales.

    The business category is of the low-volume/high-priced sales. Therefore, a simple app is proposed with multiple API endpoints to split services while allowing scalability in the individual aspects. While a MicroServices solution was offered to allow agility & resiliency by the application services being compartmentalized, and efficiency should scaling require boosting resources to app specific services provided. However, after client input, a monolithic solution with multiple APIs is to be implemented due to concerns of deployment and transaction management complexity. With the application being simple enough, multiple modules with well defined APIs and low operational overhead will be implemented.

    As requested, the client requested some articles on remaining a monolith to help affirm their decision.
    [](https://www.infoq.com/articles/monolith-defense-part-1 "Monolith Defense")
    [](https://www.infoq.com/articles/monolith-defense-part-2 "Monolith Defense part 2")


    Phase 1 - Define sales requirements & strategy, document valuable datapoints to assist in management & growth
    Phase 2 - Build a Java Spring Bootstrapped environment with neessary data tables managed through a RESTful API
    Phase 3 - Design & build a client application using React.js, integrated with the API

    Include an external case study that demonstrates a similar problem/solution

    ![DashboardView](https://i.imgur.com/9zUCeoo.png?1)
    ![SalesView](https://i.imgur.com/qhTQseK.png?1)
