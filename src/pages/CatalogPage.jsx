import { useDispatch, useSelector } from "react-redux";
import { CarsList } from "../components/CarsList/CarsList";
import { selectCars, selectError, selectIsLoading } from "../redux/selectors";
import { useEffect } from "react";
import { fetchCars } from "../redux/operations";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <CarsList />
    </div>
  );
};

export default CatalogPage;
