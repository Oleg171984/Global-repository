const useInput = ({ label, type = 'text', value, onChange, name }) => {
  return {
    label,
    type,
    value,
    onChange,
    name,
    fullWidth: true,
  };
};

export default useInput;
