import "./intro.css";
// import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
     <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="images/Sohail.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi, this is</h2>
          <h1 className="i-name">Muhammad Sohail</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">A Freelancer</div>
              <div className="i-title-item">.Net Developer</div>
              <div className="i-title-item">Student at BUKC</div>
              <div className="i-title-item">Front End Developer</div>
            </div>
          </div>
          <p className="i-desc">
          <a href="images/Sohail CV.pdf" download='Resume'>
                              <button  ><span>Download Resume</span> </button>
           </a>
          </p>
        </div>
        
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src={} alt="" className="i-img" /> */}
      </div>
    </div>
  );
};

export default Intro;
