import React from 'react';
import { Users } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl outfit-bold text-gray-900 mb-4">About Us</h1>
          <div className="flex justify-center mb-4">
            <Users className="w-12 h-12 text-blue-600" />
          </div>
          <p className="outfit text-lg text-gray-600 max-w-2xl mx-auto">
            We are a passionate team of creative professionals dedicated to delivering exceptional digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl outfit-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 outfit">
              Founded with a vision to transform digital experiences, we've grown into a dynamic team that combines creativity
              with technical excellence. Our journey is marked by continuous innovation and a commitment to exceeding client
              expectations.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="outfit-bold text-xl font-bold text-gray-900 mb-2">Mission</h3>
                <p className="outfit text-gray-600">
                  To deliver innovative digital solutions that empower businesses to thrive in the modern world.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2 outfit-bold">Vision</h3>
                <p className="text-gray-600 outfit">
                  To be the leading force in digital transformation, setting new standards in creativity and technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
