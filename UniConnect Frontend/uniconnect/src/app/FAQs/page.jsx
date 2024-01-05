"use client"
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';


const FAQs = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const faqs = [
    { question: 'How does UniConnect ensure the anonymity of users submitting grievances?', answer: 'A: UniConnect takes privacy seriously. When users submit grievances, their identity remains confidential through the use of advanced encryption and secure data storage. Even the platform administrators cannot trace back the submissions to individual users, ensuring a safe space for students to express their concerns without fear of reprisal.' },
    { question: 'How are the most upvoted grievances prioritized for resolution, and what role does the institute play?', answer: 'A: The grievances on UniConnect are sorted based on upvotes from the student community. The institute is actively involved in addressing the most upvoted posts, creating a collaborative approach to problem-solving. This ensures that the concerns with the most significant impact on the student body are given priority, fostering a responsive and accountable environment within the educational institution.' },
    { question: 'Can users trust the authenticity of the grievances shared on UniConnect, and how does the platform prevent misuse?', answer: 'A: UniConnect promotes transparency by allowing students to verify the authenticity of grievances through an upvote/downvote system. Users can choose to support or challenge a post, contributing to a self-regulating community. Additionally, the platform employs advanced algorithms and moderation mechanisms to detect and prevent misuse, maintaining the integrity of the platform and ensuring a reliable space for meaningful dialogue and issue resolution.' },
    // Add more FAQs as needed
  ];
  return (
    <div>
        <Navbar/>
    
    <div className='bg-cover' style={{ backgroundImage: 'url("/wallp1.jpg")', color: 'white', paddingTop: '8rem', paddingBottom: '8rem' }}>
    <div className="container mx-auto" ><br/>
      <h1 className="text-4xl font-bold mb-4 text-white-500" style={{ fontSize: 48 }}>Frequently Asked Questions (FAQs)</h1><br />

      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`backdrop-blur-sm bg-black/30 p-6 mb-4 rounded-md shadow cursor-pointer ${expandedQuestion === index ? 'border border-0F6FFF' : ''}`}
          onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
        >
          <div className="flex justify-between items-center">
            <div className="text-xl">{faq.question}</div>
            <button
              className="text-white-500 font-bold text-2xl"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedQuestion(expandedQuestion === index ? null : index);
              }}
            >
              {expandedQuestion === index ? '-' : '+'}
            </button>
          </div>
          {expandedQuestion === index && (
            <div className="mt-4 text-white-700 font-bold">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default FAQs;
