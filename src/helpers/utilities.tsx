import React from 'react';
import { IDictionary } from 'helpers/definitions';

export function highlightFirstLetter(value: string): React.ReactNode {
    return (
        <>
            <span>{value.substr(0, 1)}</span>
            {value.substr(1)}
        </>
    );
}

export const groupBy = (key: string, sort: string) => (array: Array<any>) => {
    const reducedObject: IDictionary = array.reduce(
        (objectsByKeyValue, obj) => ({
            ...objectsByKeyValue,
            [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj),
        }),
        {},
    );

    for (let key in reducedObject) {
        if (reducedObject.hasOwnProperty(key)) {
            reducedObject[key] = reducedObject[key].sort((a: any, b: any) =>
                a[sort] < b[sort] ? 1 : -1,
            );
        }
    }

    return reducedObject;
};
