import React from 'react';
import { render } from '@testing-library/react';
import Avatar from 'components/Avatar';

test('renders avatar', () => {
    const { container } = render(<Avatar imageUrl="testImage" />);

    expect(container.firstChild).toMatchSnapshot();
});
