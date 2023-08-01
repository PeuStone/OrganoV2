import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterar: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio: boolean
}

const CampoTexto = (props: CampoTextoProps) => {

    const placeholderModificada = `${props.placeholder}...`

    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        props.aoAlterar(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor}
                onChange={aoDigitar}
                required={props.obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto