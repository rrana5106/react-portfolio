import { Link } from "react-router-dom";

function Project(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
         
          <Link to="#" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
