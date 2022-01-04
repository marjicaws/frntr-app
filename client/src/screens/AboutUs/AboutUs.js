import './AboutUs.css'

import Layout from "../../components/Layout/Layout";
export default function About() {
  return (
    <Layout>
      <div className='big-container-about'>
        <div className='join-about'>
        <div className="about-container">
          <h1 className='title-about'>About Us</h1>
          </div>
            {" "}
            <h4 className='about-text'>
              All of our products are made carefully and use only premium
              materials.
            </h4>
            </div>
            <div className="github">
            <div className="profile"><p>Marjica Watson-Santos</p><a target="_blank" rel="noopener noreferrer" href='https://github.com/marjicaws'><img src="https://i.imgur.com/PfMoKGt.png"/></a><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/marjica-watson-santos-561aa7a9/'><img src="https://i.imgur.com/COYA784.png"/></a></div>
            <div className="profile"><p>Michael Tan</p><a target="_blank" rel="noopener noreferrer" href='https://github.com/michaelbtan'><img src="https://i.imgur.com/PfMoKGt.png"/></a><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/michael-tan-b12293ba/'><img src="https://i.imgur.com/COYA784.png"/></a></div>
            <div className="profile"><p>Elliott Terral</p><a target="_blank" rel="noopener noreferrer" href="https://github.com/eterral"><img src="https://i.imgur.com/PfMoKGt.png"/></a><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/elliott-terral-606888106/'><img src="https://i.imgur.com/COYA784.png"/></a></div>
            <div className="profile"><p>Jerry Gonzalez</p><a target="_blank" rel="noopener noreferrer" href='https://github.com/TekJerry'><img src="https://i.imgur.com/PfMoKGt.png"/></a><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/jerrygonz'><img src="https://i.imgur.com/COYA784.png"/></a></div>
            </div>
          
        
      </div>
    </Layout>
  );
}
