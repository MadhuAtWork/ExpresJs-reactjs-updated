import React from "react";

export default function MatserPage() {
  const data = [
    {
      id: 1,
      title: "I Phone",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      Price: "1,40,000",
      img: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/05/X1006902-scaled.jpeg",
    },
    {
      id: 2,
      title: "Samsung",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      Price: "40,000",
      img: "https://i.gadgets360cdn.com/products/small/vivo-x100-db-240x180-1699936858.jpg",
    },
    {
      id: 3,
      title: "Motorola",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      Price: "10,000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoE3XXDmDpVFOSudNm8zLHVzoFH0C0CD58UlUrgQ2bk-cd85Ylknl1qUR7MzkQCvhidQI&usqp=CAU",
    },
    {
      id: 4,
      title: "One pluse",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      Price: "15,000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5Mjk_US7BLlWzRriE-rDGM5GAxFR4f5aBuUytTepCkCj8qM7b3DSYDfZuCqoHKt0RRM&usqp=CAU",
    },
  ];
  return (
    <div className="d-flex">
      {data.map((item) => {
        return (
          <div className="homeContainer m-2">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={item.img}
                className="card-img-top"
                alt="..."
                style={{ height: "12rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">Title:{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <p className="card-text">Price:{item.Price} $</p>
                <a className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
