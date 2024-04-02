import React, { useState } from 'react';

const projectsData = [
    { id: 1, name: 'Exclusive', category: 'Ecommerce', img: 'exclusive.PNG', link: '' },
    { id: 2, name: 'Himalayan', category: 'News', img: 'Himalayan.PNG', link: '' },
    { id: 3, name: 'Kushma', category: 'Hotel', img: 'kushma.PNG', link: '' },
    { id: 4, name: 'Cotiviti', category: 'Figma', img: 'cotiviti.PNG', link: '' },
    { id: 5, name: 'Tavel Landing', category: 'Tours and Travels', img: 'travellanding.PNG', link: '' },
    { id: 6, name: 'Booking', category: 'Hotel', img: 'booking.PNG', link: '' },
    { id: 7, name: 'MMC', category: 'School/Collage', img: 'campus.PNG', link: '' },
    { id: 8, name: 'Prospective', category: 'Health Care', img: 'Prospective.PNG', link: '' },
    { id: 8, name: 'Calculator', category: 'Mathmatics', img: 'calculator.PNG', link: '' },
];

const ProjectsFilter = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = selectedCategory === 'All' ? projectsData : projectsData.filter(project => project.category === selectedCategory);

    return (
        <section className='py-4'>
            <div className="container">
                <div className="row">
                    <div className="col-6 py-3">
                        <h2>My Projects</h2>
                    </div>
                    <div className="col-6 d-flex justify-content-end py-3">
                        <select className="form-control w-50" onChange={(e) => handleCategoryChange(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Figma">Figma Design</option>
                            <option value="Hotel">Hotel</option>
                            <option value="News">News</option>
                            <option value="Ecommerce">Ecommerce</option>
                            <option value="School/Collage">School/Collage</option>
                            <option value="Health Care">Health Care</option>
                        </select>
                    </div>
                    <div className='col-lg-12'>
                        <div className="row g-4">
                            {filteredProjects.map(project => (
                                <div className='col-lg-3 col-md-4 col-sm-6' key={project.id}>
                                    <div className='project-container position-relative border h-100 rounded-4'>
                                        <img src={project.img} alt='Project' className='img-fluid object-fit-fill w-100' />
                                        <div className='project-overlay position-absolute bottom-0 h-100 w-100 p-2 d-flex flex-column justify-content-end'>
                                            <h6 className='text-danger'>{project.name}</h6>
                                            <p className='text-danger'>{project.category}</p>
                                            <a className='text-decoration-none' href={project.link}><button type="button" class="btn btn-outline-secondary text-danger">View Details</button></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsFilter;
