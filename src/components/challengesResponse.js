import React, { useState, useEffect } from 'react'; 
import firebase from 'firebase';

const ChallengesResponse = params => {

    // ==================
    // MARK: - Use States
    // ==================

    const [dataList, setDataList] = useState([]);

    // ===================
    // MARK: - Use Effects
    // ===================

    useEffect(() => {
        console.log("A called");
        const unsubscribe = firebase.firestore().collection("challenges").onSnapshot((querySnapshot) => {
            var firestoreData = []; 
            querySnapshot.forEach(function(doc) {
                firestoreData.push({
                    id: doc.id,
                    hiscore: doc.data().hiscore,  
                }); 
            });
          setDataList(firestoreData);
        });
        return () => unsubscribe() 
    }, [])

    useEffect(() => {
        console.log("B called");
        params.setChallegeData(dataList);
    }, [dataList])

    return <></>

 };

export default ChallengesResponse;