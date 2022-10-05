import {
    Text,
    Box,
    HStack,
    VStack,
    Image,
    Button,
} from "native-base";

const Card = ({ navigation, item, type }) => {
    return (
        <Box pb={3} px={4} mb={1}>
            <HStack
                space={2}
                alignItems="center"
                mr={20}
                style={{ maxWidth: 200 }}
            >
                <Image
                    alt={'Image'}
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                    size="xl"
                />
                <VStack ml={1} space={1}>
                    <Text fontSize="sm" bold>
                        {type == 'movie' ? item.original_title : item.original_name}
                    </Text>
                    <Text fontSize="xs">
                        Popularity: {item.popularity ? item.popularity : "N/A"}
                    </Text>
                    <Text fontSize="xs">
                        Release Date: {item.release_date ? item.release_date : "N/A"}
                    </Text>
                    <Button
                        bg="primary.500"
                        style={{ width: 190 }}
                        onPress={() =>
                            navigation.navigate("ShowDetails", {
                                itemId: item.id,
                                type: type !== 'multi' ? type : item.media_type.toLowerCase(),
                            })
                        }
                        size="md"
                    >
                        More Details
                    </Button>
                </VStack>
            </HStack>
        </Box>
    );
};

export default Card;
