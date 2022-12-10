import { useStage, useEffect, useState } from 'react';
import { app } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        // const storageRef = projectStorage.ref(file.name);

        // storageRef
    }, [file])
}

