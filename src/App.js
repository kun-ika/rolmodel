import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Correct bootstrap import

const App = () => {
  return (
    <React.Fragment>
      <h1 className="text-center my-5 text-danger text-capitalize">My Role Model</h1>
      <div className="container">
        <div className="row">
          {/* First Card */}
          <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/1200px-A._P._J._Abdul_Kalam.jpg" 
                className="card-img-top" 
                alt="..." 
                height="200px" 
              />
              <div className="card-body">
                <h5 className="card-title"><b>Rol Model</b></h5>
                <p className="card-text">
                  My role model is <b>APJ Abdul Kalam</b>, the former President of India and a renowned scientist. 
                His journey from a small town in Rameswaram to becoming the "Missile Man of India" is truly inspiring. 
                He always emphasized hard work, perseverance, and the power of dreams.
                </p>
                <a href="#" className="btn btn-primary">view detail</a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img 
                src="https://cdn.britannica.com/56/148856-004-2F59E2D9/APJ-2008.jpg" 
                className="card-img-top" 
                alt="..." 
                height="200px" 
              />
              <div className="card-body">
                <h5 className="card-title"><b>Rol Model</b></h5>
                <p className="card-text">
                Dr. Kalam's contributions to India's defense and space research have left an everlasting impact. 
                He believed in the potential of youth and always encouraged students to think big and work hard. 
                His life teaches us that with dedication and sincerity, we can achieve great heights.
                </p>
                <a href="#" className="btn btn-primary">view detail</a>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <img 
                src="https://gosharpener.com/content/uploads/photos/2024/08/sngine_d789172177a31e6918fa4f5672114ff5.jpg" 
                className="card-img-top" 
                alt="..." 
                height="200px" 
              />
              <div className="card-body">
                <h5 className="card-title"><b>Rol Model</b></h5>
                <p className="card-text">
                My role model is <b>APJ Abdul Kalam</b>, the former President of India and a renowned scientist. 
                His journey from a small town in Rameswaram to becoming the "Missile Man of India" is truly inspiring. 
                He always emphasized hard work, perseverance, and the power of dreams.
                </p>
                <a href="#" className="btn btn-primary">view detail</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
