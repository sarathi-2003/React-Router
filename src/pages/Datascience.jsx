import React from "react";
import { Link } from "react-router-dom";
// import featureimageBestDataScienceOnlineCoursesforBeginners from '../assets/Images/DataScience/featureimageBestDataScienceOnlineCoursesforBeginners.webp';
// import datasciencewebinarsandworkshops from '../assets/Images/DataScience/datasciencewebinarsandworkshops.webp';
// import bestdatascienceframeworks from '../assets/Images/DataScience/bestdatascienceframeworks.webp';
// import mustwatchdatasciencefocusedyoutubechannels from '../assets/Images/DataScience/mustwatchdatasciencefocusedyoutubechannels.webp';
// import EverythingaboutDataScientistSalaryinIndia from '../assets/Images/DataScience/EverythingaboutDataScientistSalaryinIndia.png';
// import HowLongWouldItTaketoLearnDataScience from '../assets/Images/DataScience/HowLongWouldItTaketoLearnDataScience.webp';

const cardData = [
  {
    title: "10 Best Data Science Online Courses for Beginners | 2023",
    
    description: "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most",
    date: "14 August 2023",
    comments: "No Comments"
  },
  {
    title: "Data Science Webinars and Workshops",
   
    description: "In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data",
    date: "9 August 2023",
    comments: "No Comments"
  },
  {
    title: "10 Best Data Science Frameworks in 2023",
   
    description: "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
    date: "5 August 2023",
    comments: "No Comments"
  },
  {
    title: "7 Must-Watch Data Science Focused YouTube Channels for Effective Learning",
  
    description: "Data science has become one of the most sought-after skills in the current job market.",
    date: "5 August 2023",
    comments: "No Comments"
  },
  {
    title: "Everything about Data Scientist Salary in India | 2023",
    
    description: "Are you curious about the highly sought-after field of data science and the potential it",
    date: "5 August 2023",
    comments: "No Comments"
  },
  {
    title: "How Long Would It Take to Learn Data Science?",
   
    description: "Have you ever wondered how much time it takes to learn data science? It’s an",
    date: "5 August 2023",
    comments: "No Comments"
  }
];

export default function Datascience() {
  return (
    <div className="container">
      <div className="row g-4">
        {cardData.map((card, index) => (
          <div className="col-lg col-md-6" key={index}>
            <div className="card h-100">
              <div>
              
              </div>
              <div className="card-body">
                <p className="card-title">
                  <Link className="nav-link" to={card.link}>
                    {card.title}
                  </Link>
                </p>
                <p className="card-text">{card.description}</p>
                <p>
                  
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary d-inline-flex w-100 text-align-left">
                  {card.date} <ul><li>{card.comments}</li></ul>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}