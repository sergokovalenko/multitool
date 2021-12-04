import { useState, useCallback } from 'react';

type InitialState = boolean | (() => boolean);

export const useBoolean = (initialState: InitialState = false) => {
    const [value, setValue] = useState(initialState);

    const setTrue = useCallback(() => setValue(true), []);
    const setFalse = useCallback(() => setValue(false), []);

    return [value, setTrue, setFalse] as [boolean, () => void, () => void];
};
