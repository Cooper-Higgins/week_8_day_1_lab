import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  // Addition test
  it('should be able to add a number to another number', () => {
    const runningTotal = container.getByTestId('running-total');
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const operator_add = container.getByTestId('operator-add')
    fireEvent.click(operator_add);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const operator_equals = container.getByTestId('operator-equals')
    fireEvent.click(operator_equals);
    expect(runningTotal.textContent).toEqual('5');
  })

  // Subtraction test
  it('should be able to subtract a number from another number', () => {
    const runningTotal = container.getByTestId('running-total');
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const operator_subtract = container.getByTestId('operator-subtract')
    fireEvent.click(operator_subtract);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const operator_equals = container.getByTestId('operator-equals')
    fireEvent.click(operator_equals);
    expect(runningTotal.textContent).toEqual('3');
  })

  // Multiplication test
  it('should be able to multiply two numbers', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const operator_multiply = container.getByTestId('operator-multiply')
    fireEvent.click(operator_multiply);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const operator_equals = container.getByTestId('operator-equals')
    fireEvent.click(operator_equals);
    expect(runningTotal.textContent).toEqual('15');
  })

  // Division test
  it('should be able to divide two numbers', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const operator_divide = container.getByTestId('operator-divide')
    fireEvent.click(operator_divide);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const operator_equals = container.getByTestId('operator-equals')
    fireEvent.click(operator_equals);
    expect(runningTotal.textContent).toEqual('7');
  })

  // Concatenation test
  it('should be able to concatenate multiple number button clicks', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const operator_equals = container.getByTestId('operator-equals')
    fireEvent.click(operator_equals);
    expect(runningTotal.textContent).toEqual('21');
  })

  // Multiple operator test
  it('should be able to chain multiple operations together', () => {
    const runningTotal = container.getByTestId('running-total');
    const button8 = container.getByTestId('number8');
    fireEvent.click(button8);
    const operator_divide = container.getByTestId('operator-divide')
    fireEvent.click(operator_divide);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const operator_multiply = container.getByTestId('operator-multiply')
    fireEvent.click(operator_multiply);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const operator_equals = container.getByTestId('operator-equals')
    fireEvent.click(operator_equals);
    expect(runningTotal.textContent).toEqual('10');
  })

  // Clear the running total without affecting the calculation
  it('should be able to clear the running total without affecting the calculation', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const operator_add = container.getByTestId('operator-add')
    const clear = container.getByTestId('clear');
    const operator_equals = container.getByTestId('operator-equals')

    fireEvent.click(button3);
    fireEvent.click(operator_add);
    fireEvent.click(button5);
    fireEvent.click(operator_add);
    fireEvent.click(button3);
    fireEvent.click(clear);
    fireEvent.click(operator_add);
    fireEvent.click(button5);
    fireEvent.click(operator_equals);

    expect(runningTotal.textContent).toEqual('13');
  })
})

