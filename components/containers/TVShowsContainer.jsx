import React, { useState, useEffect } from "react";
import Loader from "../layout/Loader";
import ShowsList from "../lists/ShowsList";
import { getTV } from "../../services/api";

const TVShowsContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [showType, setShowType] = useState("popular");
    const [items, setItems] = useState([]);

    const fetchTVShows = async () => {
        setIsLoading(true);
        const response = await getTV(showType);

        setItems(response.results);

        setIsLoading(false);
    };

    useEffect(() => {
        fetchTVShows();
    }, [showType]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <ShowsList
                    navigation={navigation}
                    items={items}
                    type={"tv"}
                />
            )}
        </>
    );
};

export default TVShowsContainer;
