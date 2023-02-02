import React from 'react'
import { render, screen } from '@testing-library/react'
import ConditionalMock from '../../components/ConditionalMock'

describe('ConditionalMock', () => {
    it('should show page message if configuration is set to true', () => {
        render(
        <ConditionalMock />
        )
        expect(screen.getByText(/page is shown/i)).toBeInTheDocument()
    })
})