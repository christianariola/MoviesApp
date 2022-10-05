import {
    HStack,
    Button,
    Center,
    Text,
    ArrowBackIcon,
    ArrowForwardIcon,
} from "native-base";

const Pagination = ({ page, setPage, maxPages }) => {
    return (
        <Center>
            <HStack py={6}>
                <Button
                    onPress={() => {
                        if (page > 1) {
                            const newPage = page - 1;
                            setPage(newPage);
                        }
                    }}
                    bg="primary.500"
                    leftIcon={<ArrowBackIcon />}
                    bordered
                ></Button>
                <Text px={5}>
                    {page}
                </Text>
                <Button
                    bg="primary.500"
                    onPress={() => {
                        if (page < maxPages) {
                            const newPage = page + 1;
                            setPage(newPage);
                        }
                    }}
                    leftIcon={<ArrowForwardIcon />}
                ></Button>
            </HStack>
        </Center>
    );
};

export default Pagination;
