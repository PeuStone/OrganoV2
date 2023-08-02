import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterar: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
}

const CampoTexto = ({ aoAlterar, placeholder, label, valor, obrigatorio = false }: CampoTextoProps) => {

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
            />
        </div>
    )
}

export default CampoTexto