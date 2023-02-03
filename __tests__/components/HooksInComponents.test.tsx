import React from 'react'
import { render, screen } from '@testing-library/react'
import HooksInComponents from '../../components/HooksInComponents'

jest.mock('../../utils/useGetCars')

describe('HooksInComponents', () => {
    it('shows loading page while loading', () => {
        jest.mock('../../utils/useGetCars', () => {
            return jest.fn(() => [true, undefined])
        })

       render(
            <HooksInComponents />
       ) 
       expect(screen.getByText(/page is not yet loaded/i)).toBeInTheDocument()
    })

    it('shows cars data after loading', () => {
        jest.mock('../../utils/useGetCars', () => {
            return jest.fn(() => [false, [{ id: 'm', name: 'Maserati'}, {id: 'b', name: 'Bughatti'}]])
        })
       render(
            <HooksInComponents />
       ) 
       expect(screen.getByText(/maserati/i)).toBeInTheDocument()
       expect(screen.getByText(/bughatti/i)).toBeInTheDocument()
    })
})