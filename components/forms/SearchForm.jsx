import {
    FormControl,
    VStack,
    HStack,
    Input,
    Button,
    Icon,
    Select,
    CheckIcon,
    Center,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { searchTypes } from "../../utils/constants";

const SearchForm = ({
    inputChangeHandler,
    fetchSearch,
    type,
    setType,
    query,
    setPage,
}) => {
    
    const onSubmitHandler = () => {
        if (query !== "") {
            fetchSearch();
            setPage(1);
        }
    };

    return (
        <Center>
            <VStack mt={8} mb={5} width="80%">
                <FormControl isRequired>
                    <FormControl.Label>
                        Search Movie/TV Show Name
                    </FormControl.Label>
                    <Input
                        bg="gray.200"
                        onChangeText={(value) => {
                            inputChangeHandler(value);
                        }}
                        placeholder="i.e. James Bond, CSI"
                        InputLeftElement={
                            <Icon
                                size={6}
                                ml={2}
                                color={"gray.400"}
                                as={<Ionicons name="ios-search" />}
                            />
                        }
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormControl.Label>Choose Search Type</FormControl.Label>
                    <HStack width="100%" space={2}>
                        <Select
                            mt={1}
                            minWidth="200"
                            backgroundColor={"#ffffff"}
                            selectedValue={type}
                            accessibilityLabel="Select type"
                            placeholder="Select type"
                            _selectedItem={{
                                bg: "teal.700",
                                _text: {
                                    color: "#ffffff",
                                },
                                endIcon: <CheckIcon size={7} color="#ffffff" />,
                            }}
                            onValueChange={(itemValue) => setType(itemValue)}
                        >
                            {searchTypes?.map((types, index) => {
                                return (
                                    <Select.Item
                                        key={index}
                                        label={types}
                                        value={types}
                                    />
                                );
                            })}
                        </Select>

                        <Button
                            bg="primary.500"
                            onPress={onSubmitHandler}
                            px={5}
                            leftIcon={
                                <Icon
                                    size={5}
                                    color={"#ffffff"}
                                    as={<Ionicons name="ios-search" />}
                                />
                            }
                        >
                            Search
                        </Button>
                    </HStack>
                    <FormControl.HelperText>
                        Please select a search type
                    </FormControl.HelperText>
                </FormControl>
            </VStack>
        </Center>
    );
};

export default SearchForm;
