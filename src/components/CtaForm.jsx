import useCtaStore from "../store/useCtaStore";

function CtaForm() {
  // Extract state and actions from the Zustand store
  const { formData, updateField, resetForm } = useCtaStore();

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateField(name, type === "checkbox" ? checked : value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // You can add validation or API calls here
    if (!formData.acceptTerms) {
      alert("Por favor, aceite os termos de privacidade.");
      return;
    }

    // Reset the form after submission
    resetForm();
  };
  return (
    <div className="bg-forground">
      <section className="container mx-auto p-6 border-b border-line-light pb-[7rem] pt-[10rem]">
        {/* Heading and Description */}
        <div className="mb-8 md:mb-[5rem] space-y-[1rem]">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-6xl md:w-1/2">
            Você está procurando algum modelo em específico?
          </h2>
          <p className="text-primary font-[400] text-sm sm:text-base md:text-xl">
            Deixe seu contato para que a nossa equipe entre em contato com você!
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 border p-8 md:py-[9rem] md:px-[5rem] rounded-4xl border-line"
        >
          {/* Input Fields */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 md:text-3xl text-xl font-[400]">
            <input
              type="text"
              name="modelo"
              placeholder="Modelo"
              value={formData.modelo}
              onChange={handleChange}
              className="border border-gray-300 px-[1.5rem] py-4 md:py-[1.2rem] rounded-xl focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              className="border border-gray-300 px-[1.5rem] py-4 md:py-[1.2rem] rounded-xl focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 px-[1.5rem] py-4 md:py-[1.2rem] rounded-xl focus:outline-none focus:border-blue-500"
            />
            <input
              type="tel"
              name="numero"
              placeholder="Número"
              value={formData.numero}
              onChange={handleChange}
              className="border border-gray-300 px-[1.5rem] py-4 md:py-[1.2rem] rounded-xl focus:outline-none focus:border-blue-500"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white px-[1.5rem] py-4 md:py-[1.2rem] rounded-xl hover:bg-gray-800 transition duration-300 sm:w-auto md:text-3xl text-xl"
            >
              Enviar
            </button>
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="mt-[4rem] flex items-start space-x-2">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="border border-gray-300 rounded mt-1"
            />
            <label
              htmlFor="acceptTerms"
              className="text-sm text-gray-500 sm:text-xl tracking-custom font-light"
            >
              De acordo com a LGPD, concordo em fornecer os dados acima para que
              o Touwing Care entre em contato comigo para apresentar serviços.
              Seu nome, e-mail e telefone serão utilizados de acordo com a nossa
              Política de Privacidade.
            </label>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CtaForm;
