import './AboutUs.css'

import Layout from "../../components/Layout/Layout";
export default function About() {
  return (
    <Layout>
      <div className="about-container">
        <div>
            <h1>About Us</h1>
          <div>
            {" "}
            <h4>
              All of our products are made carefully and use only premium
              materials.
            </h4>
            <div className="github">
            <div className="profile"><p>Marjica Watson-Santos</p><a><img src="https://i.imgur.com/PfMoKGt.png"/></a><a><img src="https://i.imgur.com/COYA784.png"/></a></div>
            <div className="profile"><p>Michael Tan</p><a><img src="https://i.imgur.com/PfMoKGt.png"/></a><a><img src="https://i.imgur.com/COYA784.png"/></a></div>
            <div className="profile"><p>Elliott Terral</p><a><img src="https://i.imgur.com/PfMoKGt.png"/></a><a><img src="https://i.imgur.com/COYA784.png"/></a></div>
            <div className="profile"><p>Jerry Gonzalez</p><a><img src="https://i.imgur.com/PfMoKGt.png"/></a><a><img src="https://i.imgur.com/COYA784.png"/></a></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
