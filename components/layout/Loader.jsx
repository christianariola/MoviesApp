import React from "react";
import { Spinner, HStack, Heading, Center } from "native-base";

const Loader = () => {
    return (
        <Center mt={10}>
            <HStack space={2} justifyContent="center">
                <Spinner accessibilityLabel="Loading results" color="black" />
                <Heading color="black" fontSize="md">
                    Loading results
                </Heading>
            </HStack>
        </Center>
    );
};

export default Loader;
