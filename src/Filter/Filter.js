import styles from './Filter.module.css';

export const Filter = ({ filter, onChange}) => {
    return (
        <input type="text" className={styles.filter} name="filter" value={filter} onChange={onChange}/>
    )
}