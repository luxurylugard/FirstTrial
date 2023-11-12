import Services from "./Services";

const list = [
  {
    number: "28.3k",
    name: "Students Enrolled",
    titleColor: "hsl(170, 75%, 41%)",
    background: "hsla(170, 75%, 41%, 0.15)",
  },
  {
    number: "32.4k",
    name: "Class Comepleted",
    titleColor: "hsl(351, 83%, 61%)",
    background: "hsla(351, 83%, 61%, 0.15)",
  },
  {
    number: "100%",
    name: "Satisfaction Rate",
    titleColor: "hsl(260, 100%, 67%)",
    background: "hsla(260, 100%, 67%, 0.15)",
  },
  {
    number: "345+",
    name: "Top Instructors",
    titleColor: "hsl(42, 94%, 55%)",
    background: "hsla(42, 94%, 55%, 0.15)",
  },
];

const categories = [
  { title: "Data Science", numbers: "90 Courses" },
  { title: "UI/UX Design", numbers: "80 Courses" },
  { title: "Modern Physics", numbers: "70 Courses" },
  { title: "Religious Studies", numbers: "60 Courses" },
  { title: "Marketing", numbers: "50 Courses" },
  { title: "Finance", numbers: "40 Courses" },
];

export default function LastElegance() {
  const listItems = list.map((item, index) => (
    <li key={index} style={{ background: item.background }}>
      <p style={{ color: item.titleColor }}>{item.number}</p>
      <p>{item.name}</p>
    </li>
  ));

  const categoryList = categories.map((item, index) => (
    <li key={index}>
      <a href={`#${item}`}>
        <p>{item.title}</p>
        <p>{item.numbers}</p>
      </a>
    </li>
  ));
  return (
    <>
      <section className="elegance-body">
        <div className="categories">
          <p>Course Categories</p>
          <h1>
            Browse Top <span className="categories-txt">Categories</span>
          </h1>

          <div className="categories-item">
            <ul>{categoryList}</ul>
          </div>

          <button class="btn">View All Categories</button>
        </div>

        <Services />

        <div className="status">
          <ul>{listItems}</ul>
        </div>

        <div className="elegance">
          <p className="elegance-heading">This Is Elegance</p>
          {/* <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis libero repellat, impedit omnis minima tenetur nihil
            possimus necessitatibus ut obcaecati voluptas, ducimus, odio harum
            reprehenderit at veniam. Voluptate temporibus laudantium eaque illum
            veritatis odio nobis nisi eveniet incidunt. Ullam nam hic veritatis
            esse ipsum temporibus asperiores ipsa, iste sapiente eligendi?
          </p> */}
        </div>
      </section>
    </>
  );
}
