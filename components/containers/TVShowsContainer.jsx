import React, { useState, useEffect } from "react";
import Loader from "../layout/Loader";
import ShowsList from "../lists/ShowsList";
import { getTV } from "../../services/api";
import ShowTypeForm from "../forms/ShowTypeForm";
import { tvTypes } from "../../utils/constants";
import Pagination from "../../navigation/Pagination";

const TVShowsContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showType, setShowType] = useState("popular");
    const [items, setItems] = useState({});

    // For Pagination
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState(1);


    const fetchTVShows = async () => {
        setIsLoading(true);
        const response = await getTV(showType, page);

        setItems(response.results);
        setMaxPages(response.total_pages);
        
        setIsLoading(false);
    };

    useEffect(() => {
        fetchTVShows();
    }, [showType, page]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <ShowTypeForm
                        options={tvTypes}
                        showType={showType}
                        setShowType={setShowType}
                    />
                    <ShowsList
                        navigation={navigation}
                        items={items}
                        type={"tv"}
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

export default TVShowsContainer;
