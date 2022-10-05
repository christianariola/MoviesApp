import { Center } from "native-base";
import React, { useState, useEffect } from "react";
import { getSearchResults } from "../../services/api";
import Loader from "../layout/Loader";
import ShowsList from "../lists/ShowsList";
import SearchForm from "../forms/SearchForm";
import { Text } from "native-base";
import Pagination from "../../navigation/Pagination";

const SearchContainer = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [items, setItems] = useState([]);
    const [type, setType] = useState("multi");
    const [searchStarted, setSearchStarted] = useState(false);

    // For Pagination
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState(1);
    const fetchSearch = async () => {
        setIsLoading(true);

        setSearchStarted(true);

        const response = await getSearchResults(query, type);

        setItems(response.results);

        setMaxPages(response.total_pages);

        setIsLoading(false);
    };

    useEffect(() => {
        if (items.length > 0) {
            fetchSearch();
        }
    }, [page]);

    const inputChangeHandler = (movie) => {
        setQuery(movie);
    };

    return (
        <>
            <SearchForm
                type={type}
                setType={setType}
                fetchSearch={fetchSearch}
                inputChangeHandler={inputChangeHandler}
                query={query}
                setPage={setPage}
            />

            {searchStarted ? (
                isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <ShowsList
                            navigation={navigation}
                            items={items}
                            type={type}
                        />

                        <Pagination
                            page={page}
                            setPage={setPage}
                            maxPages={maxPages}
                        />
                    </>
                )
            ) : (
                <Center mt={20}>
                    <Text fontWeight="bold" fontSize={24}>
                        Please initiate a search
                    </Text>
                </Center>
            )}
        </>
    );
};

export default SearchContainer;
