import React from "react";

const Description = () => {
  return (
    <div className="p-4 md:p-8 md:w-2/3">
      {/* Feature List */}
      <ul className="list-none pl-5 sm:pl-6 space-y-2 sm:space-y-[1.4rem] text-primary text-sm sm:text-base md:text-3xl">
        <li>
          Faróis de LED com nivelamento automático e temporizador – Follow Me
          Home
        </li>
        <li>Faróis de neblina dianteiros</li>
        <li>Lanternas traseiras de LED</li>
        <li>Acendimento automático dos faróis</li>
        <li>Maçanetas externas cromadas</li>
        <li>Aerofólio traseiro</li>
        <li>
          Retrovisores externos na cor do veículo com regulagem elétrica,
          rebatimento elétrico, indicadores de direção e iluminação de
          boas-vindas
        </li>
        <li>
          Abertura elétrica do porta-malas com função de memória para ajuste da
          altura da tampa
        </li>
        <li>Abertura eletrônica do porta-malas com sensor de presença</li>
        <li>
          Airbags de cortina, frontais, laterais e de joelho para o motorista
        </li>
        <li>
          Assistente de pré-colisão (Pré-Crash System – PCS) com alerta sonoro e
          visual e, se necessário, frenagem automática
        </li>
        <li>Assistente de reboque (TSC), de descida e de subida (HAC)</li>
        <li>Controle adaptativo de velocidade de cruzeiro (ACC)</li>
        <li>
          Controle eletrônico de estabilidade do veículo (VSC) e de tração
          (A-TRC)
        </li>
        <li>Sensores de estacionamento dianteiros (2) e traseiros (4)</li>
        <li>
          Sistema auxiliar BAS (sistema de assistência em frenagem de
          emergência) nas 4 rodas
        </li>
        <li>
          Sistema auxiliar EBD (distribuição eletrônica de força de frenagem)
          nas 4 rodas
        </li>
        <li>Alerta de Mudança de Faixa (Lane Departure Alert – LDA)</li>
        <li>Aviso de ponto cego (BSM)</li>
        <li>Alerta de tráfego traseiro (RCTA)</li>
        <li>
          Isofix para fixação de cadeirinha para crianças no banco traseiro
        </li>
        <li>Trava de segurança das rodas</li>
      </ul>
    </div>
  );
};

export default Description;
