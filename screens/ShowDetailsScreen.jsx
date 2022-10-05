import React, { useState, useEffect } from "react";
import Loader from "../components/layout/Loader";
import { Box, Text, HStack, VStack, Center, Image } from "native-base";
import { getShowDetails } from "../services/api";
import { imagePlaceholder } from "../utils/constants";

const ShowDetailsScreen = ({ navigation, route }) => {
    const { itemId, type } = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        setIsLoading(true);
        const response = await getShowDetails(itemId, type);

        setDetails(response);
        navigation.setOptions({
            title:
                type == "movie"
                    ? response.original_title
                    : response.original_name,
        });

        setIsLoading(false);
    };

    useEffect(() => {
        fetchDetails();
    }, [itemId, type]);

    return (
        <>
            <Box flex={1}>
                <Center mt={12} pb={2}>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <VStack
                            alignItems="center"
                            justifyContent="center"
                            space={2}
                            px={10}
                        >
                            <Text fontSize="lg" mb={7} bold>
                                {type == "movie"
                                    ? details.original_title
                                    : details.original_name}
                            </Text>
                            <Image
                                alt={"Image"}
                                source={{
                                    uri:
                                    details.poster_path !== undefined && details.poster_path
                                            ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                                            : imagePlaceholder,
                                }}
                                size="2xl"
                                mb={4}
                            />
                            <Text fontSize="xs">{details.overview}</Text>
                            <HStack mt={4} alignSelf={"flex-start"}>
                                <Text fontSize="xs">
                                    Popularity:{" "}
                                    {details.popularity
                                        ? details.popularity
                                        : "N/A"}{" "}
                                    | Release Date:{" "}
                                    {details.release_date
                                        ? details.release_date
                                        : "N/A"}
                                </Text>
                            </HStack>
                        </VStack>
                    )}
                </Center>
            </Box>
        </>
    );
};

export default ShowDetailsScreen;
