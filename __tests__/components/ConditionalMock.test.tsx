import React from 'react'
import { render, screen } from '@testing-library/react'
import ConditionalMock, { getConfigFlag } from '../../components/ConditionalMock'

describe('ConditionalMock', () => {
    test.each([
        {
            userName: 'John' 
        },
        {
            userName: 'Jane' 
        }
    ])(`show page if config is set to true and $userName is the user`, ({ userName }) => {
        ;(getConfigFlag as jest.Mock).mockImplementation(
            (name: string, defaultValue: string) => {
              const { getConfigFlag: actualImplementation } = jest.requireActual(
                '../../components/ConditionalMock',
              )
              if (name === 'shouldShowPage') {
                return true
              if (name === 'userName') {
                return userName
              } else {
                return actualImplementation(name, defaultValue)
              }
              }
            }
          )

        render(
            <ConditionalMock />
        )
        expect(screen.getByText(/page is shown/i)).toBeInTheDocument()
        expect(screen.getByText(userName).toBeInTheDocument()
    })

    test.each([
        {
            shouldShowPage: false,
            userName: 'John' 
        },
        {
            shouldShowPage: false,
            userName: 'Jane' 
        },
    ])(`don't show page if config is set to true and $userName is the user`, (shouldShowPage, userName) => {
        ;(getConfigFlag as jest.Mock).mockImplementation(
            (name: string, defaultValue: string) => {
              const { getConfigFlag: actualImplementation } = jest.requireActual(
                '../../components/ConditionalMock',
              )
              if (name === 'shouldShowPage') {
                return true
              if (name === 'userName') {
                return userName
              } else {
                return actualImplementation(name, defaultValue)
              }
              }
            }
          )

        render(
            <ConditionalMock />
        )
        expect(screen.queryByText(/page is shown/i)).toBeNull()
        expect(screen.queryByText(userName).toBeNull())
    })
})