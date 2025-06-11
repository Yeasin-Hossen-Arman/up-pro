import React, { useState } from "react";

const coursesData = [
  { id: 1, title: "English Basics Course", description: "Learn the basics english" },
  { id: 2, title: "Spoken English ", description: "Learn Speaking english" },
  { id: 3, title: "English Writting", description: "Learn english written" },
];

// CoursesList Component: shows all courses clickable
function CoursesList({ onSelectCourse }) {
  return (
    <div className="p-6 pt-20 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Our Courses</h2>
      <ul className="space-y-3">
        {coursesData.map((course) => (
          <li
            key={course.id}
            className="p-4 border rounded hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelectCourse(course)}
          >
            {course.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

// CourseDetails Component: shows course detail with Learn button
function CourseDetails({ course, onBack }) {
  return (
    <div className="p-6 pt-28 max-w-xl mx-auto">
      <button
        onClick={onBack}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back to Courses
      </button>

      <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
      <p className="mb-6">{course.description}</p>

      <button
        onClick={() => alert(`Show course: ${course.title}`)}
        className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Learn
      </button>
    </div>
  );
}

// Parent Component to handle state switching
export default function CoursesContainer() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div>
      {!selectedCourse ? (
        <CoursesList onSelectCourse={setSelectedCourse} />
      ) : (
        <CourseDetails course={selectedCourse} onBack={() => setSelectedCourse(null)} />
      )}
    </div>
  );
}
