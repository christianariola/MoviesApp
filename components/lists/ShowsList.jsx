import { FlatList } from "native-base";
import Card from "../listItems/Card";

const ShowsList = ({ navigation, items, type }) => {
    return (
        <FlatList
            data={items}
            renderItem={({ item }) => (
                <Card navigation={navigation} item={item} type={type} />
            )}
        />
    );
};

export default ShowsList;
