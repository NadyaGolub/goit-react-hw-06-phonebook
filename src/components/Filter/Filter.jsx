import { Label } from "components/ContactForm/ContactForm.styled";
import { setFilterValue } from "components/redux/filterSlice";
import { selectFilter } from "components/redux/selectors";
import { useDispatch, useSelector } from "react-redux";


export const Filter = () => {
    const value = useSelector(selectFilter);
    const dispatch = useDispatch();
    const handleSetFilter = evt => {
        dispatch(setFilterValue(evt.target.value));
    }
    return (
        <Label>  
            <input type="text" name="filter" onChange={handleSetFilter} value={value} />
        </Label>
    ) 
} 