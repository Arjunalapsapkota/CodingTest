import React from "react";

// changed to functional component
const RowList = props => {
  const handleClick = e => {
    const { name, value } = e.target;
    const { updateMyList, updateRecommendations } = props.keyprops;
    name === "My List" ? updateMyList(value) : updateRecommendations(value);
  };
  return (
    <div className="RowList container">
      <h6>{props.name}</h6>
      <div className="RowListFlex">
        {props.lists
          ? props.lists.map(item => (
              <div key={item.id} className="box">
                <img className="movieImage" src={item.img} alt="movie poster" />
                <button
                  className="btn btn-primary"
                  name={props.name}
                  value={item.id}
                  onClick={handleClick}
                >
                  {props.name === "My List" ? "Remove" : "Add"}
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default RowList;
