import React from 'react';
import { MessageCircle } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Working with this team has been an absolute pleasure. They delivered beyond our expectations.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'Their attention to detail and creative solutions have helped us achieve remarkable results.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Founder, InnovateNow',
      content: "The team's expertise and dedication to our project was exceptional. Highly recommended!",
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl outfit-bold text-gray-900 mb-4">Client Testimonials</h1>
          <div className="flex justify-center mb-4">
            <MessageCircle className="w-12 h-12 text-blue-600" />
          </div>
          <p className="outfit text-lg text-gray-600 max-w-2xl mx-auto">
            Do not just take our word for it. Here is what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="outfit-bold text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="outfit text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;