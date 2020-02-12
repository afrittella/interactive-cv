import React from 'react';
import { render, getByText } from '@testing-library/react';
import CenteredBox from 'components/CenteredBox';

test('renders a CenteredBox', () => {
    const component = <p>Test</p>;
    const { container } = render(<CenteredBox>{component}</CenteredBox>);

    const expectedComponent = getByText(container, 'Test');

    expect(container.firstChild).toMatchSnapshot();
    expect(expectedComponent).toBeInTheDocument();
});
