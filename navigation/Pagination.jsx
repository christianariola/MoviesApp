import {
    HStack,
    Button,
    Center,
    Text,
    ArrowBackIcon,
    ArrowForwardIcon,
} from "native-base";

const Pagination = ({ page, setPage, maxPages }) => {
    const previousHandler = () => {
        if (page > 1) {
            const newPage = page - 1;
            setPage(newPage);
        }
    };

    const forwardHandler = () => {
        if (page < maxPages) {
            const newPage = page + 1;
            setPage(newPage);
        }
    };

    return (
        <Center alignItems="center" justifyContent="center">
            <HStack py={6}>
                <Button
                    onPress={previousHandler}
                    bg="primary.500"
                    leftIcon={<ArrowBackIcon />}
                    bordered
                ></Button>
                <Text px={5}>{page}</Text>
                <Button
                    bg="primary.500"
                    onPress={forwardHandler}
                    leftIcon={<ArrowForwardIcon />}
                ></Button>
            </HStack>
        </Center>
    );
};

export default Pagination;
