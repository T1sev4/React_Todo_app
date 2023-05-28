import styles from './Input.module.css'
function Input(props) {
  const {placeholder, value, onChange} = props
  return (
    <input
    type="text"
    placeholder={placeholder}
    className={styles.input}
    value={value}
    onChange={onChange}
  />
  );
}

export default Input;