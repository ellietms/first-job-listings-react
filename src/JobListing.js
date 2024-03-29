import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const JobListing = (props) => {
  return (
    <div className="main-container">
      <nav className="navbar col-12">
        <svg xmlns="http://www.w3.org/2000/svg">
          <g fill="#63BABA" fillRule="evened">
            <path d="M470.577 563.429c-51.432-51.425-51.438-134.806-.013-186.237l.013-.013L867.235-19.424c51.441-51.434 134.836-51.434 186.276 0 48.811 48.804 51.304 126.392 7.473 178.135l178.158-178.135c51.441-51.434 134.836-51.434 186.277 0 51.431 51.424 51.437 134.805.013 186.237-.005.004-.01.008-.013.013l-396.66 396.603c-51.44 51.433-134.834 51.433-186.275 0-48.812-48.805-51.304-126.394-7.471-178.138L656.853 563.43c-51.441 51.433-134.836 51.433-186.276 0zM342.268 45.605c-51.432-51.425-51.438-134.806-.013-186.237l.013-.013 396.658-396.603c51.441-51.434 134.836-51.434 186.277 0 51.431 51.424 51.437 134.805.013 186.237-.005.004-.01.008-.013.013L528.543 45.605c-51.44 51.433-134.834 51.433-186.275 0zm-444.692 71.824c-51.432-51.424-51.438-134.806-.013-186.237l.013-.013 396.658-396.603c51.441-51.434 134.836-51.434 186.277 0 51.431 51.424 51.437 134.805.013 186.237a80.86 80.86 0 01-.013.013L83.85 117.429c-51.44 51.433-134.834 51.433-186.275 0z" />
          </g>
        </svg>
      </nav>
      {props.jobs.map((eachjob, index) => {
        return (
          <div  key={index} className="container">
              <div  className="col-12">
            <div  className="box-container">
              <div className="job-detail">
              <img className="image-container" src={eachjob.logo} alt="" />
              <div className="job-detail">
                <div className="job-detail-topline">
                  <strong className="company-name">{eachjob.company}</strong>
                  {eachjob.new && <strong className="new-job">New!</strong>}
                  {eachjob.featured && (
                    <strong className="featured">FEATURED</strong>
                  )}
                 <div className="job-level">{eachjob.position}</div>
                <div className="job-detail-bottomline text-muted">
                  <div className=" posted">{eachjob.postedAt}</div>
                  <div className="contract">{eachjob.contract}</div>
                  <div className="location">{eachjob.location}</div>
                </div>
              </div>
                </div>
              </div>
              <div className="info">
                <div className="feature-style">{eachjob.role}</div>
                <div className="feature-style">{eachjob.level}</div>
                  {eachjob.languages.map( lang => 
                    <div className="feature-style" >
                      {lang}  
                    </div>
                    )}
              </div>
              </div>
            </div>
            </div>
        );
      })}
    </div>  
  );
};

export default JobListing;
