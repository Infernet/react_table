import React from 'react';

const useTableBodyHeight = (
    tableWrapperRef = null,
    tableHeaderRef = null,
    tableFooterRef = null
) => {
    const [height, setHeight] = React.useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onWindowResize = () => {
        if (tableWrapperRef?.current) {
            let newHeight = tableWrapperRef.current.offsetHeight;
            if (tableHeaderRef?.current)
                newHeight -= tableHeaderRef.current.offsetHeight;
            if (tableFooterRef?.current)
                newHeight = tableFooterRef.current.offsetHeight;
            setHeight(newHeight);
        }
    };

    React.useEffect(() => {
        onWindowResize();
        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, [onWindowResize]);

    return height;
};


export default useTableBodyHeight;
