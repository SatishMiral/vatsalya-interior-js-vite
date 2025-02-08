import React, { useEffect, useState } from 'react';

const StatsCard = ({ name, className = '', style = {}, delay = 0 , img}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`
        absolute rounded-3xl shadow-lg 
        transform transition-all duration-700 ease-out
        hover:-translate-y-3 hover:shadow-5xl
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-96'}
        ${className}
      `}
      style={{
        ...style,
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="relative w-full h-full">
        <div className="absolute z-10 top-4 left-4">
          <h1 className='text-3xl font-bold drop-shadow-lg'>{name}</h1>
        </div>
        <img 
          src={img} 
          alt="background" 
          className="absolute top-0 left-0 w-full h-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

const OpenSourceSection = () => {
  const stats = [
    {
      name: "Living Area",
      img: "https://images.unsplash.com/photo-1738771629156-3675a5c8c4de?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "rotate-12",
      style: {
        height: '320px',
        width: '360px',
        left: '0%',
        top: '27%',
        zIndex: 1
      },
      delay: 100
    },
    {
      name: "Kitchen",
      img: "https://images.unsplash.com/photo-1738771608985-ca679b186f0a?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "rotate-6",
      style: {
        height: '320px',
        width: '360px',
        left: '12%',
        top: '64%',
        zIndex: 2
      },
      delay: 200
    },
    {
      name: "Bedroom",
      img: "https://images.unsplash.com/photo-1738771525821-8eddde5101e4?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "-rotate-15",
      style: {
        height: '320px',
        width: '360px',
        left: '32%',
        top: '40%',
        zIndex: 3
      },
      delay: 350
    },
    {
      name: "Commercial",
      img: "https://images.unsplash.com/photo-1738771646428-388f892dde4b?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "-rotate-5",
      style: {
        height: '320px',
        width: '360px',
        left: '54%',
        top: '62%',
        zIndex: 4
      },
      delay: 200
    },
    {
      name: "Others",
      img: "https://images.unsplash.com/photo-1738771618427-9d9f0d4ab2f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "-rotate-11",
      style: {
        height: '320px',
        width: '360px',
        left: '71%',
        top: '29%',
        zIndex: 5
      },
      delay: 100
    }
  ];

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-b from-gray-50 to-gray-100 ">
      <div className="max-w-7xl mx-auto h-full relative">
        <button className='cursor-pointer'>
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              name={stat.name}
              className={stat.className}
              style={stat.style}
              delay={stat.delay}
              img={stat.img}
            />
          ))}
        </button>
      </div>
    </div>
  );
};

export default OpenSourceSection;