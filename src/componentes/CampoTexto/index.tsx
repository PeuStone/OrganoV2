import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterar: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({ aoAlterar, placeholder, label, valor, obrigatorio = false, tipo = 'text' }: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...`

    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterar(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor}
                onChange={aoDigitar}
                required={obrigatorio}
                placeholder={placeholderModificada}
                type={tipo}
            />
        </div>
    )
}

export default CampoTexto