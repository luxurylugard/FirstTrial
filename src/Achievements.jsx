const achievements = [
  { number: "7518", name: "Completed Tasks" },
  { number: "3472", name: "Happy Customers" },
  { number: "2184", name: "Expert Employees" },
  { number: "4523", name: "Awards Won" },
];

export default function Achievements() {
  const achievementsLists = achievements.map((item, index) => (
    <li key={index}>
      <p>{item.number}</p>
      <p>{item.name}</p>
    </li>
  ));
  return (
    <>
      <section className="achievements-body">
        <div className="achievements">
          <ul>{achievementsLists}</ul>
        </div>
      </section>
    </>
  );
}
