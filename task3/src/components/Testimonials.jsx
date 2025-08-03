
const reviews = [
    {
      name: "Aisha",
      text: "TaskFlow changed how I manage my daily work. Super clean UI!",
    },
    {
      name: "Ahmed",
      text: "No more missed deadlines. I love the reminders!",
    },
    {
      name: "Zara",
      text: "Simple, effective, and reliable. Perfect for teams too.",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section    className="py-20 px-4 bg-gray-100" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">What Users Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
              <p className="text-gray-700 italic mb-4">"{r.text}"</p>
              <h4 className="font-semibold text-blue-600">— {r.name}</h4>
            </div>
          ))}
        </div>
      </section>
    );
  }
  