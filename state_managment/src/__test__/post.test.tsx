import { screen, render } from '@testing-library/react';
import Post from '../components/Post';
import { Provider } from 'react-redux'
import store from '../app/store.ts'
import type { ReactNode } from 'react';

const wrapper = (props: { children: ReactNode }) => ( <Provider store={store}>{props.children}</Provider> );
const mockPost = {
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
};

describe('Post', () => {
    beforeEach(() => {
        render(<Post post={mockPost} />, {wrapper});
    });
    it('renders post details correctly', () => {
        const title = screen.getByText("His mother had always taught him");
        const body = screen.getByText("His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto.");
        const likes = screen.getByText("192");
        const dislikes = screen.getByText("25");
        expect(title).toBeDefined();
        expect(body).toBeDefined();
        expect(likes).toBeDefined();
        expect(dislikes).toBeDefined();
    });
});