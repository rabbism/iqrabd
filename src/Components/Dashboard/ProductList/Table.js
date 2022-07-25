import React from 'react';

const Table = (props) => {
    const{_id,name,subject,price,img} =props.item
    return (
        
      <tr>
      <td className="min-width">
        <div className="lead">
          <div className="lead-image">
            <img
              src={img}
              alt=""
            />
          </div>
          <div className="lead-text">
            <p>{subject}</p>
          </div>
        </div>
      </td>
      <td className="min-width">
        <p>
          <a href="#0">{name}</a>
        </p>
      </td>
      <td className="min-width">
        <p>{price}</p>
      </td>
      <td className="min-width">
        <p>{name}</p>
      </td>
      <td>
        <div className="action">
          <button className="text-danger">
            <i className="lni lni-trash-can" />
          </button>
        </div>
      </td>
    </tr>
        
    );
};

export default Table;