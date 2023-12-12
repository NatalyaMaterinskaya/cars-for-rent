import React from "react";

import {
  ListItem,
  TitleWrapper,
  Title,
  Model,
  TextWrapper,
  Text,
  Type,
} from "./CarItem.styled";

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
    accessories,
  },
}) => {
  const newAddress = address.split(",");

  const newRentalCompany = rentalCompany.split(" ");

  const maxSymbol = 33;
  let isPremium = true;
  if (
    newRentalCompany[0] === "Economy" ||
    newAddress[1].length + newAddress[2].length + rentalCompany.length >=
      maxSymbol
  ) {
    isPremium = false;
  }
  return (
    <ListItem>
      <img src={img ? img : defaultImg} alt={make} width="274"></img>
      <TitleWrapper>
        <Title>
          {make} <Model>{model}, </Model>
          {year}
        </Title>
        <Title>{rentalPrice} </Title>
      </TitleWrapper>
      <TextWrapper>
        <Text>{newAddress[1]}</Text>
        <Text>{newAddress[2]}</Text>
        <Text>{rentalCompany}</Text>
        {isPremium && <Text>Premium</Text>}
      </TextWrapper>
      <TextWrapper>
        <Text>
          <Type>{type.toLowerCase()}</Type>
        </Text>
        <Text>{model}</Text>
        <Text>{id}</Text>
        <Text>{accessories}</Text>
      </TextWrapper>
    </ListItem>
  );
};
