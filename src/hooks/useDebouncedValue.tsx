import { useState, useEffect } from "react";

export const useDebouncedValue = (input: string = '', timeToSearch: number = 500) => {

    const [debounce, setDebounce] = useState(input);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounce(input)

        }, timeToSearch)

        return () => {
            clearTimeout(timeout)
        }

    }, [input])

    return debounce

}