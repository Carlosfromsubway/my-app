import { View, Text, Button } from "react-native";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import { useState } from "react";

export default function Home () {
    const [users, setUsers] = useState([]);

    const GetData = async () => {

        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            dbusers.push({
                ...doc.data(),
                id:doc.id
        });
    })
        setUsers([
            ...dbusers]);
    }



return (
<View>
    <Button title="GetData" onPress={()=>GetData}/>
    {users.map(o=><view>
        <Text>{o.id} - {o.fullname}</Text>
        </view>
        )}
</View>
);

}