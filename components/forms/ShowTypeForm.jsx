import { VStack, Select, CheckIcon } from "native-base";

const ShowTypeForm = ({ options, showType, setShowType }) => {
    return (
        <VStack py={8} alignItems="center">
                <Select
                    minWidth="200"
                    backgroundColor={"#ffffff"}
                    selectedValue={showType}
                    accessibilityLabel="Select type"
                    placeholder="Select type"
                    _selectedItem={{
                        bg: "teal.700",
                        _text: {
                            color: "#ffffff",
                        },
                        endIcon: <CheckIcon size={7} color="#ffffff" />,
                    }}
                    onValueChange={(itemValue) => 
                        setShowType(itemValue)
                    }
                >
                    {options?.map((option, index) => {
                        return (
                            <Select.Item
                                key={index}
                                label={option}
                                value={option}
                            />
                        );
                    })}
                </Select>
        </VStack>
    );
};

export default ShowTypeForm;
