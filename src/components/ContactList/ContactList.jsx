import { ButtonDel, Item } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "components/redux/selectors";
import { useDispatch } from "react-redux";
import { deleteContact } from "components/redux/contactsSlice";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact())
  }
  return (
    <ul>
      {contacts.map(({id, name, number}) => {
        return (
          <Item key={id} >
                <p>{name}: </p>
                <p>{number} </p>
            <ButtonDel  onClick={handleDeleteContact}>Delete</ButtonDel>
          </Item>
        );
      })}
    </ul>
  );
};
