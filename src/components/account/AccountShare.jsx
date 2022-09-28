import SwitchButton from "../buttons/SwitchButton"
export default function AccountShare() {
    return (
        <div className="accountShare-container p-3">
            <section>
                <h2 className="fw-bold fs-3">Compartilhamento de atividades</h2>
                <p className="font-smaller text-secondary">Decida como seu perfil e atividade são exibidos aos outros.</p>
                <SwitchButton text={"Incluir meu perfil e anúncio nos mecanismos de busca"} text2={"Ativar isto significa que mecanismos de busca, como o Google, exibirão seu perfil e as páginas dos seus anúncios nos resultados de busca."} />
            </section>
            <section>
                <h2 className="fw-bold fs-3">Compartilhamento de dados</h2>
                <p className="font-smaller text-secondary">Decida como seus dados são usados nas pesquisas do Mybnb.</p>
                <SwitchButton text={"Use meu primeiro nome e foto de perfil para ajudar a combater a discriminação"} text2={"Ao ativar isso, você nos ajuda a entender melhor como podemos identificar e evitar situações de discriminação no Mybnb."} />
            </section>
        </div>
    )
}