import React, { useState, useEffect } from "react";
import Loader from "../components/layout/Loader";
import { View, Text, Box, HStack, VStack, Center, Image, Button } from 'native-base'
import { getShowDetails } from "../services/api";

const ShowDetailsScreen = ({ navigation, route }) => {
    const { itemId, type } = route.params
    const [isLoading, setIsLoading] = useState(false);
    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        setIsLoading(true);
        const response = await getShowDetails(itemId, type);

        setDetails(response);
        navigation.setOptions({ title: response.original_title })
        
        setIsLoading(false);
    };

    useEffect(() => {
        fetchDetails();
    }, [itemId, type]);

    return <>
        <Center mt={12} pb={2}>
            {isLoading ? <Loader /> : (
            <VStack alignItems='center' justifyContent="center" space={2} px={10}>
                <Text fontSize='lg' mb={7} bold>{details.original_title}</Text>
                <Image
                    alt={'Image here'}
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${details.poster_path}`,
                    }}
                    size="2xl"
                    mb={4}
                />
                <Text fontSize='xs'>{details.overview}</Text>
                <HStack mt={4} alignSelf={'flex-start'}>
                    <Text fontSize='xs'>Popularity: {details.popularity ? details.popularity : 'N/A'} | Release Date: {details.release_date ? details.release_date : 'N/A'}</Text>
                </HStack>
            </VStack>
            )}
        </Center>
    </>;
};

export default ShowDetailsScreen;
