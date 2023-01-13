import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomDropdown from "../../components/CustomDropdown";

describe('CustomDropdown', () => {
    it('renders', () => {
        render(<CustomDropdown />)
        expect(screen.getByText(/Choose a car/i)).toBeInTheDocument()
    })

    it('check if the default value is correct' , () => {
        render(<CustomDropdown />)
        const selectedOption = screen.getByRole('option', { name: /BMW/i, selected: true})
        expect(selectedOption).toBeInTheDocument()
    })

    it('changes the selected option to the option clicked' , async () => {
        const user = userEvent.setup();

        render(<CustomDropdown />)
        const dropDown = screen.getByRole('listbox')
        await user.selectOptions(dropDown, 'Lambo')

        const selectedOption = screen.getByRole('option', { name: /Lambo/i, selected: true})
        expect(selectedOption).toBeInTheDocument()
    })

})