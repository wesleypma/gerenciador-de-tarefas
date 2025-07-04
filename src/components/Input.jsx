function Input(props) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props} // Todas as props que eu passar para o Input, eu vou passar para o input desse HTML aqui
    />
  );
}

export default Input;
