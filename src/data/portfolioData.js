const portfolioCategories = [
  {
    id: 1,
    title: 'Living Area', 
    image: 'https://images.unsplash.com/photo-1738771629156-3675a5c8c4de?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A stylish and contemporary living area designed with modern aesthetics and cutting-edge comfort.',
    projects: [
      {
        id: 1,
        title: 'living-1',
        image: 'https://images.unsplash.com/photo-1739035585283-16c67317061c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"',
        description: 'A full-featured e-commerce solution'
      },
      {
        id: 2,
        title: 'living-2',
        image: 'https://images.unsplash.com/photo-1739035585845-4de07221b76f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Community-driven platform'
      },
      {
        id: 3,
        title: 'living-3',
        image: 'https://images.unsplash.com/photo-1739035812606-b3ee4bf33ae5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Real-time data visualization'
      },
      {
        id: 4,
        title: 'living-4',
        image: 'https://images.unsplash.com/photo-1739035812934-1690c4790115?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Showcase your work beautifully'
      }
    ]
  },
  {
    id: 2,
    title: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1738771608985-ca679b186f0a?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A sleek and functional kitchen designed for efficiency, blending modern aesthetics with seamless usability.',
    projects: [
      {
        id: 1,
        title: 'kitchen-1',
        image: 'https://images.unsplash.com/photo-1739034120735-25c1a008b143?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Track your daily workouts'
      },
      {
        id: 2,
        title: 'kitchen-2',
        image: 'https://images.unsplash.com/photo-1739034119749-aea61adeb69f?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Order food on the go'
      },
      {
        id: 3,
        title: 'kitchen-3',
        image: 'https://images.unsplash.com/photo-1739034119749-aea61adeb69f?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Explore new destinations'
      },
      {
        id: 4,
        title: 'kitchen-4',
        image: 'https://images.unsplash.com/photo-1739034119659-36f74a31a124?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Stay connected with friends'
      }
    ]
  },
  {
    id: 3,
    title: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1738771525821-8eddde5101e4?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A cozy and serene bedroom designed for comfort, blending modern aesthetics with a relaxing ambiance.',
    projects: [
      {
        id: 1,
        title: 'bedroom-1',
        image: 'https://images.unsplash.com/photo-1739033479683-3562796997b4?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Modern banking interface'
      },
      {
        id: 2,
        title: 'bedroom-2',
        image: 'https://images.unsplash.com/photo-1739033478926-10224d12dfa2?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Sleek audio controls'
      },
      {
        id: 3,
        title: 'bedroom-3',
        image: 'https://images.unsplash.com/photo-1739033478996-4e74d90686f1?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Productivity focused design'
      },
      {
        id: 4,
        title: 'bedroom-4',
        image: 'https://images.unsplash.com/photo-1739033479773-6899eb74ecf7?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Clean weather interface'
      }
    ]
  },
  {
    id: 4,
    title: 'Commercial',
    image: 'https://images.unsplash.com/photo-1738771646428-388f892dde4b?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A well-designed commercial space, whether an office, retail store, or workspace, built for efficiency and customer engagement',
    projects: [
      {
        id: 1,
        title: 'commercial-1',
        image: 'https://images.unsplash.com/photo-1739035947056-b719c5d7c23b?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Local coffee shop identity'
      },
      {
        id: 2,
        title: 'commercial-2',
        image: 'https://images.unsplash.com/photo-1739035947076-485b484f9098?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Clothing brand design'
      },
      {
        id: 3,
        title: 'commercial-3',
        image: 'https://images.unsplash.com/photo-1739035947224-52f452a24fb2?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Modern tech branding'
      },
      {
        id: 4,
        title: 'commercial-4',
        image: 'https://images.unsplash.com/photo-1739035947049-08d01d552930?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Food industry branding'
      }
    ]
  },
  {
    id: 5,
    title: 'Others',
    image: 'https://images.unsplash.com/photo-1738771618427-9d9f0d4ab2f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A modern, functional, and aesthetically designed space tailored for efficiency, engagement, and seamless experiences across various industries.',
    projects: [
      {
        id: 1,
        title: 'others-1',
        image: 'https://images.unsplash.com/photo-1739036252651-05ceeb360ca2?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Commercial product shots'
      },
      {
        id: 2,
        title: 'others-2',
        image: 'https://images.unsplash.com/photo-1739036221339-7af65eae2693?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Professional portraits'
      },
      {
        id: 3,
        title: 'others-3',
        image: 'https://images.unsplash.com/photo-1739036312662-2abf670b019a?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Corporate event photography'
      },
      {
        id: 4,
        title: 'others-4',
        image: 'https://images.unsplash.com/photo-1739036221793-7b08c51ed3ce?q=80&w=1787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Natural landscape shots'
      }
    ]
  }
];

export default portfolioCategories