import { Label } from "components/ContactForm/ContactForm.styled"

export const Filter = ({value, setValue}) => {
    return (
        <Label>  
            <input type="text" name="filter" onChange={setValue} value={value} />
        </Label>
    ) 
} 