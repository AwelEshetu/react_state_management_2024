import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from '../App.tsx';
import { Provider } from 'react-redux'
import store from '../store'

describe('App', () => {
  test('render app header', () => {
    render(
        <Provider store={store}> 
            <App />
        </Provider>
    );
    const header= screen.getByText(/React state management options/i);
    expect(header).toBeDefined();
  });

    test('render current value header', () => {
        render(
        <Provider store={store}> 
            <App />
        </Provider>);
        const currentValueHeader = screen.getByText(/Current value:/i);
        expect(currentValueHeader).toBeDefined();
    });

    test('render current value', () => {
        render(
            <Provider store={store}> 
                <App />
            </Provider>
        );
        const currentValue = screen.getByText(/0/i);
        expect(currentValue).toBeDefined();
    });

    test('render plus button', () => {
        render(
            <Provider store={store}> 
                <App />
            </Provider>
        );
        const plusButton = screen.getByText(/Plus/i);
        expect(plusButton).toBeDefined();
    });
    
    test('render minus button', () => {
        render(
            <Provider store={store}> 
                <App />
            </Provider>
        );
        const minusButton = screen.getByText(/Minus/i);
        expect(minusButton).toBeDefined();
    });

    test('render reset button', () => {
        render(
            <Provider store={store}> 
                <App />
            </Provider>
        );
        // screen.debug(); prints out the html structure of the rendered component
        const resetButton = screen.getByText(/Reset/i);
        expect(resetButton).toBeDefined();
    });

    test('card element to exist', () => {
        const {container} =render(
            <Provider store={store}> 
                <App />
            </Provider>
        );
        const card = container.querySelector('.card');
        
        // screen.debug(card); prints out the html structure of selected element
        expect(card).toBeDefined();
    });

    test('clicking plus button should increment value', async () => {

        render(
            <Provider store={store}> 
                <App />
            </Provider>
        );

        const plusButton = screen.getByText(/Plus/i);
        await userEvent.click(plusButton)
        //screen.debug();
        const currentValue = screen.getByText(/1/i);
        expect(currentValue).toBeDefined();
    });

    test('clicking minus button should decrement value', async () => {
        render(
            <Provider store={store}> 
                <App />
            </Provider>
        );
        // reset the values to 0, since it was increased in the previous test
        const resetButton = screen.getByText(/Reset/i);
        await userEvent.click(resetButton);
        // decrement the value by 1
        const minusButton = screen.getByText(/Minus/i);
        screen.debug();
        await userEvent.click(minusButton);
        const currentValue = screen.getByText(/-1/i);
        expect(currentValue).toBeDefined();
    });

    test('clicking reset button should reset value to 0', async () => {
        render(
            <Provider store={store}> 
                <App />
            </Provider>
        );
        const plusButton = screen.getByText(/Plus/i);
        await userEvent.click(plusButton);
        await userEvent.click(plusButton);
        const resetButton = screen.getByText(/Reset/i);
        await userEvent.click(resetButton);
        const currentValue = screen.getByText(/0/i);
        expect(currentValue).toBeDefined();
    });

});
