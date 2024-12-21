import { render, screen } from '@testing-library/react';
import PostsList from '../../components/PostsList';
import { Provider } from 'react-redux'
import store from '../../app/store';
import type { ReactNode } from 'react';
import { mockPosts } from '../../mocks/mockPosts.ts';
import {logRoles} from '@testing-library/dom'

const wrapper = (props: { children: ReactNode }) => ( <Provider store={store}>{props.children}</Provider> );

describe('PostsList', () => {
    test('renders a list of posts', () => {
        render(<PostsList posts={mockPosts} />, {wrapper});
        const postElements = screen.getByRole('list', { name: 'posts' });
        logRoles(postElements); // will log all the roles the postElements has and its corresponding elements
        expect(postElements).toBeDefined();
        const postsHeadings = screen.getAllByRole('heading',{name: /title/i});
        expect(postsHeadings).toHaveLength(2);
        const postsBody = screen.getAllByRole('paragraph',{name: /body/i});
        expect(postsBody).toHaveLength(2);
        const postsLikes = screen.getAllByRole('button');
        expect(postsLikes).toHaveLength(4);
        const postsDislikes = screen.getAllByRole('button',{name: /dislikes/i});
        expect(postsDislikes).toHaveLength(2);
    });
});