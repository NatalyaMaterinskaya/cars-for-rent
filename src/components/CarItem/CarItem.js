import React from "react";

import { ListItem, Text } from "./CarItem.styled";

const defaultImg =
  "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";

export const CarItem = ({
  car: {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
  },
}) => {
  return (
    <ListItem>
      <img src={img ? img : defaultImg} alt={make} width="274"></img>
      <Text>{make}</Text>
      <Text>{model}</Text>
      <Text>{year}</Text>
      <Text>{rentalPrice}</Text>
      <Text>{address}</Text>
      <Text>{rentalCompany}</Text>
      <Text>{type}</Text>
      <Text>{id}</Text>
      <Text>{functionalities}</Text>
    </ListItem>
  );
};
