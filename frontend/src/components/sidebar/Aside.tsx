import LinkNavegacao from "./LinkNavegacao";

export default function Aside(){
    return(
        <aside>
            <nav>
                <div className="felx flex-col gap-[10px]">
                <span className="text-[#888888] text-[16px]">Início</span>
                <LinkNavegacao texto="Página Inicial" url="" svg={}/>
                </div>

                <div className="felx flex-col gap-[10px]">
                    <span className="text-[#888888] text-[16px]">Escolar</span>
                    <div className="flex flex-col gap-[40px]">
                        <LinkNavegacao texto="Dar baixa pagamento"      url="" svg={}/>
                        <LinkNavegacao texto="Ver aluno ativos"         url="" svg={}/>
                        <LinkNavegacao texto="Ver todas as rotas"       url="" svg={}/>
                        <LinkNavegacao texto="Atualizar horário alunos" url="" svg={}/>
                        <LinkNavegacao texto="Alterar dia pagamento"    url="" svg={}/>
                        <LinkNavegacao texto="Adicionar novo aluno"     url="" svg={}/>
                    </div>
                </div>

                <div className="felx flex-col gap-[10px]">
                    <span className="text-[#888888] text-[16px]">Ações extras</span>
                    <LinkNavegacao texto="Ver histórico" url="" svg={}/>
                </div>
            </nav>
        </aside>
    );
}