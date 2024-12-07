import { render, screen } from '@testing-library/react';
import PostsList from '../components/PostsList';

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
        render(<PostsList posts={mockPosts} />);
        const postElements = screen.getByRole('list', { name: 'posts' });
        expect(postElements).toBeDefined();
    });
});