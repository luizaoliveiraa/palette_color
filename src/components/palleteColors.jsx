import React, { useEffect, useState } from "react";

export function BytesColor(props) {
  const { change } = props; //desconstrucao de obj -

  const [color, setColor] = useState("#fff");

  const [locked, setLocked] = useState(false);

  const geraCor = () => {
    let a = (Math.random() * 0xfffff * 1000000).toString(16);
    setColor("#" + a.slice(0, 6));
  };
  useEffect(() => {
    if (!locked) geraCor();
  }, [change]); //primeiro   arg é funcao e segundo é array contendo o state - toda vez que ele muda, executa a funcao do primeiro argumento ;  se o array estiver vazio ele executa a funcao do prim arg qdo o componente todo for rendezerizado - qdo aparece na tela pela primeira vez, faz uma vez e só se estiver vazio
  //permite inicializar o estado de qlqr coisa que irá sofrer uma alteração

  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100px",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <p
          onClick={() => {
            navigator.clipboard.writeText(color.toUpperCase());
            alert(color.toUpperCase() + " copied!");
          }}
          style={{
            cursor: "pointer",
          }}
        >
          {color.toUpperCase()}
        </p>
        <button
          style={{
            border: "none",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            backgroundColor: "transparent",
            position: "absolute",
            right: "20px",
          }}
          onClick={() => {
            setLocked((prev) => !prev); //estado anterior do state (Variável) - antes dela mudar
          }}
        >
          {locked ? "  🔒" : "  🔓"}
        </button>
      </div>
    </div>
  );
}
