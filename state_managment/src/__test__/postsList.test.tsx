import { render, screen } from '@testing-library/react';
import PostsList from '../components/PostsList';
import { Provider } from 'react-redux'
import store from '../app/store.ts'
import type { ReactNode } from 'react';
import {mockPosts} from '../mockData/mockPosts.ts'

const wrapper = (props: { children: ReactNode }) => ( <Provider store={store}>{props.children}</Provider> );

describe('PostsList', () => {
    test('renders a list of posts', () => {
        render(<PostsList posts={mockPosts} />, {wrapper});
        const postElements = screen.getByRole('list', { name: 'posts' });
        expect(postElements).toBeDefined();
    });
});