import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Table = (props) => {
  const { _id, name, subject, price, img } = props.item;
  const [myNotes, setMyNotes] = useState([]);

  const removeNote = (id) => {
    const decision = window.confirm("Do You Really Want To Remove?");
    if (decision) {
      const url = `https://sleepy-depths-81993.herokuapp.com/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const restNotes = myNotes.filter((note) => note._id !== id);
            setMyNotes(restNotes);
            toast("Product  Deleted!");
          }
        });
      
    }
  };
  return (
    <tr>
      <td className="min-width">
        <div className="lead">
          <div className="lead-image">
            <img src={img} alt="" />
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
        <div className="action" onClick={() => removeNote(_id)}>
          <button className="text-danger">
            <i className="lni lni-trash-can" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Table;
