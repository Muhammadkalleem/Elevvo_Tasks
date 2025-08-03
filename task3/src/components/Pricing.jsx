
const plans = [
    {
      name: "Free",
      price: "$0/mo",
      features: ["Basic Tasks", "1 User", "Limited Storage"],
    },
    {
      name: "Pro",
      price: "$9/mo",
      features: ["Unlimited Tasks", "Collaboration", "Priority Support"],
    },
    {
      name: "Team",
      price: "$29/mo",
      features: ["Team Dashboard", "Reports", "Custom Workflows"],
    },
  ];
  
  export default function Pricing() {
    return (
      <section      className="py-20 px-4 bg-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Pricing</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div key={i} className="border rounded-lg p-6 text-center shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</p>
              <ul className="text-gray-600 mb-4">
                {plan.features.map((f, i) => (
                  <li key={i} className="mb-1">• {f}</li>
                ))}
              </ul>
              <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  