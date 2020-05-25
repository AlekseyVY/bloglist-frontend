import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import {prettyDOM} from '@testing-library/dom'
import BlogToggable from './BlogToggle.js'

test('blog renders title and author when visibility is off', () => {
    const blog = {
        title: 'TEST_TITLE',
        author: 'TEST_AUTHOR',
        url: 'TEST_URL',
        likes: 0
    }

    const component = render(
        <BlogToggable blog={blog} render={() => {console.log('RENDER_TEST')}}/>
    )

    expect(component.container).toHaveTextContent('TEST_TITLE')
    expect(component.container).toHaveTextContent('TEST_AUTHOR')

    const div = component.container.querySelector('.invisibleBlogPart')
    expect(div).toHaveStyle('display: none')
})

