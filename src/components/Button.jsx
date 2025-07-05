function Button(props) {
  return (
    <button
      className="bg-slate-400 p-2 rounded-md text-white"
      {...props} // Todas as props que eu passar para o Botão, eu vou passar para o botão desse HTML aqui, inclusive o valor que eu passo para dentro do meu botão
    ></button>
  );
}

export default Button;
