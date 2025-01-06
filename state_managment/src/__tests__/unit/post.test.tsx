import { screen, render } from '@testing-library/react';
import Post from '../../components/Post.tsx';
import { Provider } from 'react-redux'
import store from '../../app/store.ts'
import { type ReactNode } from 'react';
import user from '@testing-library/user-event';

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
    
    it('renders post details correctly', () => {
        const dislikeHandler = vi.fn();
        const likeHandler = vi.fn();
        render(<Post post={mockPost} handleLike={likeHandler} handleDislike={dislikeHandler} />, {wrapper});
        const title = screen.getByText("His mother had always taught him");
        const body = screen.getByText("His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto.");
        const likes = screen.getByText("192");
        const dislikes = screen.getByText("25");
        expect(title).toBeDefined();
        expect(body).toBeDefined();
        expect(likes).toBeDefined();
        expect(dislikes).toBeDefined();
        // screen.debug(likes);  // this will print the likes element in the console
    });

    it('when buttons clicked', async () => {
        user.setup();
        const dislikeHandler = vi.fn();
        const likeHandler = vi.fn();
        render(<Post post={mockPost} handleLike={likeHandler} handleDislike={dislikeHandler}/>, {wrapper});
        const likeButton = screen.getAllByRole("button", {hidden: true})[0];
        const dislikeButton = screen.getAllByRole("button", {hidden: true})[1];
        await user.click(dislikeButton);
        await user.click(likeButton);
        expect(dislikeHandler).toHaveBeenCalledTimes(1);
        expect(likeHandler).toHaveBeenCalledTimes(1);
    })
});