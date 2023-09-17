import { MutableRefObject, useEffect } from 'react';

function useOuterClick(
    ref: MutableRefObject<HTMLElement | null>,
    handler: (arg: MouseEvent, isFocused?: boolean) => void
) {
    useEffect(
        () => {
            const listener = (event: MouseEvent) => {
                // Do nothing if clicking ref's element or descendent elements
                // debugger
                if (ref?.current && !ref?.current?.contains(event?.target as Node)) {
                    handler(event, false);
                    return;
                }
            };
            document.addEventListener('click', listener);
            return () => {
                document.removeEventListener('click', listener);
            };
        },
        []
    );
}

export default useOuterClick;
