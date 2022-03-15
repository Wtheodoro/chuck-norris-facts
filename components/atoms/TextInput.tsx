interface TextInputProps {
  value: any
  onChange: (value: any) => void
  onKeyDown: (event: any) => any
}

const TextInput = ({ value, onChange, onKeyDown }: TextInputProps) => (
  <input
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onKeyDown={onKeyDown}
  />
)

export default TextInput