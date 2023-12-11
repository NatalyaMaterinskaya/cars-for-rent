import { Wrapper } from "./CarsList.styled";
import { CarItem } from "../CarItem/CarItem";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";

export const CarsList = () => {
  const cars = useSelector(selectCars);
  console.log("cars", cars);
  return (
    <Wrapper>
      {cars?.map((car) => <CarItem key={car.id} car={car} />)}
    </Wrapper>
  );
};
