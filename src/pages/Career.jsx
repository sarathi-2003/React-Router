import React from "react";
import { Link } from "react-router-dom";
// import featureimage from '../assets/Images/Career/featureimage.webp';
// import topcareer from '../assets/Images/Career/topcareer.jpg';
// import UX from '../assets/Images/Career/UX.webp';
// import Game from '../assets/Images/Career/Game.jpg';
// import scaled from '../assets/Images/Career/scaled.jpg';

 let cardData = [
  {
    title: "Top Skills Required to Become a Digital Marketer",
    
    description: "Digital marketing is one of the most dynamic industries that has transformed how businesses connect",
    date: "16 August 2023",
    comments: "No Comments"
  },
  {
    title: "Career Opportunities in Digital Marketing | Digital Marketing Career",
   
    description: "As we move forward in today’s digital age, the need for businesses to engage with",
    date: "16 August 2023",
    comments: "No Comments"
  },
  {
    title: "Top 12 Career Opportunities for UI/UX Design",
   
    description: "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most",
    date: "14 August 2023",
    comments: "No Comments"
  },
  {
    title: "How to Become a UI/UX Designer: 10 Steps to Master the Craft",
    description: "Are you passionate about offering intuitive and user-friendly digital experiences? Do you have an eye",
    date: "29 July 2023",
    comments: "No Comments"
  },
  {
    title: "Game Development Career 2023: The Ultimate Beginners Guide",
    
    description: "The game development industry has undergone a remarkable evolution over the years, witnessing exhilarating changes",
    date: "28 July 2023",
    comments: "No Comments"
  },
  {
    title: "The Future & Scope of Full Stack Developers in India",
    
    description: "Have you ever wondered about the future of full stack developers in India? These talented",
    date: "27 July 2023",
    comments: "No Comments"
  }
];

export default function Career() {
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
                <Link className="nav-link read" to={card.link}>
                  READ MORE »
                </Link>
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