import { ButtonDel, Item } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "redux/selectors";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const handleDeleteContact = evt => {
    dispatch(deleteContact(evt.target.id))
  }
  return (
    <ul>
      {contacts.map(({id, name, number}) => {
        return (
          <Item key={id} >
                <p>{name}: </p>
                <p>{number} </p>
            <ButtonDel id={id} onClick={handleDeleteContact}>Delete</ButtonDel>
          </Item>
        );
      })}
    </ul>
  );
};
