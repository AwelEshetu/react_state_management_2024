import { render, screen } from '@testing-library/react';
import PostsList from '../components/PostsList';
import { Provider } from 'react-redux'
import store from '../app/store.ts'
import type { ReactNode } from 'react';

const wrapper = (props: { children: ReactNode }) => ( <Provider store={store}>{props.children}</Provider> );

const mockPosts = [
    {
        id: 1,
        title: "His mother had always taught him",
        body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto.",
        tags: ["history", "american", "crime"],
        reactions: {
            likes: 192,
            dislikes: 25
        },
        views: 305,
        userId: 121
    },
    {
        id: 2,
        title: "His mother had always taught him",
        body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto.",
        tags: ["history", "american", "crime"],
        reactions: {
            likes: 192,
            dislikes: 25
        },
        views: 305,
        userId: 122
    }
];
describe('PostsList', () => {
    test('renders a list of posts', () => {
        render(<PostsList posts={mockPosts} />, {wrapper});
        const postElements = screen.getByRole('list', { name: 'posts' });
        expect(postElements).toBeDefined();
    });
});