import { useStage, useEffect } from 'react';
import { firestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useStage([]);

    useEffect(() => {
        firestore.toJSON(collection)
    }, [collection])

    return { docs };
}