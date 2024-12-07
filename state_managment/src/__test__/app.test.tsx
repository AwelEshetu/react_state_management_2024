import { screen, render} from '@testing-library/react';
import App from '../App.tsx';
import { Provider } from 'react-redux'
import store from '../app/store.ts'
import type { ReactNode } from 'react';

const wrapper = (props: { children: ReactNode }) => ( <Provider store={store}>{props.children}</Provider> );

describe('App', () => {
    beforeEach(() => {
        render(<App />, {wrapper});
    });
    
   it('renders App component', () => {  
        const appHeader = screen.getByText('React state management showcase using RTK');
        expect(appHeader).toBeDefined();
    });
    it('renders Api link', () => {
        const apiLink = screen.getByText('Dummy json posts');
        expect(apiLink).toBeDefined();
    });
    it('renders number of posts fetched', () => {
        const postCount = screen.getByText('Number of posts fetched:');
        expect(postCount).toBeDefined();
    });
    it('renders CircularProgress', () => {
        const circularProgress = screen.getByRole('progressbar');
        expect(circularProgress).toBeDefined();
    });
    

});
