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
});
