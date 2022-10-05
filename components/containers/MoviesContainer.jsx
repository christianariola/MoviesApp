import React, { useState, useEffect } from "react";
import Loader from "../layout/Loader";
import ShowsList from "../lists/ShowsList";
import { getMovies } from "../../services/api";
import ShowTypeForm from "../forms/ShowTypeForm";
import { movieTypes } from "../../utils/constants";

const MoviesContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showType, setShowType] = useState("popular");
    const [items, setItems] = useState([]);

    const fetchMovies = async () => {
        setIsLoading(true);
        const response = await getMovies(showType);

        setItems(response.results);

        setIsLoading(false);
    };

    useEffect(() => {
        fetchMovies();
    }, [showType]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <ShowTypeForm
                        options={movieTypes}
                        showType={showType}
                        setShowType={setShowType}
                    />
                    <ShowsList
                        navigation={navigation}
                        items={items}
                        type={"movie"}
                    />
                </>
            )}
        </>
    );
};

export default MoviesContainer;
