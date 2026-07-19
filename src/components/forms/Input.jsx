/**
 * 
 * @param {string} placeholder 
 * @param {string} value
 * @param {(s: string) => void} onChange
 */
export function Input({placeholder, value, onChange}){
    return <div>
        <input 
        type="text" 
        className="border-red-500 border-1 p-2  "
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        />
    </div>
}