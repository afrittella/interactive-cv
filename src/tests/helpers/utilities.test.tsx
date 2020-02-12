import React from 'react';
import { groupBy, highlightFirstLetter } from 'helpers/utilities';

test('it return the first letter highlighted', () => {
    const object = (
        <>
            <span>m</span>y string
        </>
    );
    expect(highlightFirstLetter('my string')).toMatchObject(object);
});

test('group by', () => {
    const initialData = [
        {
            key: 'first',
            value: '02',
        },
        {
            key: 'first',
            value: '01',
        },
        {
            key: 'first',
            value: '03',
        },
        {
            key: 'second',
            value: '10',
        },
        {
            key: 'second',
            value: '05',
        },
        {
            key: 'second',
            value: '04',
        },
    ];

    const expectedResultASC = {
        first: [
            {
                key: 'first',
                value: '01',
            },
            {
                key: 'first',
                value: '02',
            },
            {
                key: 'first',
                value: '03',
            },
        ],
        second: [
            {
                key: 'second',
                value: '04',
            },
            {
                key: 'second',
                value: '05',
            },
            {
                key: 'second',
                value: '10',
            },
        ],
    };

    const expectedResultDESC = {
        first: [
            {
                key: 'first',
                value: '03',
            },
            {
                key: 'first',
                value: '02',
            },
            {
                key: 'first',
                value: '01',
            },
        ],
        second: [
            {
                key: 'second',
                value: '10',
            },
            {
                key: 'second',
                value: '05',
            },
            {
                key: 'second',
                value: '04',
            },
        ],
    };

    expect(groupBy('key', 'value', 'ASC')(initialData)).toMatchObject(
        expectedResultASC,
    );

    expect(groupBy('key', 'value', 'DESC')(initialData)).toMatchObject(
        expectedResultDESC,
    );
});
