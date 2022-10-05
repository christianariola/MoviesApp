import React, { useState, useEffect } from "react";
import Loader from "../layout/Loader";
import ShowsList from "../lists/ShowsList";
import { getMovies } from "../../services/api";
import ShowTypeForm from "../forms/ShowTypeForm";
import { movieTypes } from "../../utils/constants";
import Pagination from "../../navigation/Pagination";

const MoviesContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showType, setShowType] = useState("popular");
    const [items, setItems] = useState({});

    // For Pagination
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState(1);

    const fetchMovies = async () => {
        setIsLoading(true);
        const response = await getMovies(showType, page);

        setItems(response.results);

        setMaxPages(response.total_pages);

        setIsLoading(false);
    };

    useEffect(() => {
        fetchMovies();
    }, [showType, page]);

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

                    <Pagination
                        page={page}
                        setPage={setPage}
                        maxPages={maxPages}
                    />
                </>
            )}
        </>
    );
};

export default MoviesContainer;
