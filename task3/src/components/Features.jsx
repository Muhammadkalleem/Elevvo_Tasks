
const features = [
    {
      icon: "📅",
      title: "Task Scheduling",
      desc: "Set deadlines and get reminders on time.",
    },
    {
      icon: "✅",
      title: "Task Tracking",
      desc: "Track progress and mark completed tasks easily.",
    },
    {
      icon: "📊",
      title: "Productivity Insights",
      desc: "Visual reports to analyze your task habits.",
    },
  ];
  
  export default function Features() {
    return (
      <section    className="py-20 px-4 bg-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Features</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, index) => (
            <div key={index} className="text-center p-6 border rounded-lg shadow hover:shadow-md transition">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  