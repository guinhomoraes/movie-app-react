import './style.css';

interface MovieSearchProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export function MovieSearch({ value, onChange, onSearch }: MovieSearchProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar filme..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onSearch}>Buscar</button>
    </div>
  );
}
