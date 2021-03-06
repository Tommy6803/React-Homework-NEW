import { useDispatch, useSelector } from "react-redux";

import { animalsSelectors, getRandomAnimals } from "../../store/animals";
import { Error } from "../../components/Errors";
import { Loader } from "../../components/Loader";
import { Figure } from "../../components/Figure";
import { Button } from '@material-ui/core';

export const Animals = () => {

    const data = useSelector(animalsSelectors.getAnimalsData);
    const isError = useSelector(animalsSelectors.getAnimalsError);
    const isLoading = useSelector(animalsSelectors.getAnimalsLoading);
    const dispatch = useDispatch();

    const getData = (() => {
        dispatch(getRandomAnimals);
    }, []);

    return (
        <div>
            <h1>Homework</h1>
            {
                !isError &&
                <Button onClick={getData} disabled={isLoading}>Reload</Button>
            }

            {isError && (
                <Error reload={getData} />

            )}
            {isLoading && <Loader />}
            {!isLoading && data && <Figure {...data} />}
        </div>
    );
};