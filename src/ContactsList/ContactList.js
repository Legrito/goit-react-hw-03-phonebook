import { ContactItem } from './ContactItem/';
import styles from './ContactList.module.css'

export const ContactList = ({ contacts, onClick, filteredValue }) => {
    return (
    <ul className={styles.list}>
        {filteredValue > 0 ?
        < ContactItem contacts={contacts} onClick={onClick }  />
        : <p>No contacts</p>}
      </ul>
    )
}