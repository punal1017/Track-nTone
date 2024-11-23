
import React, { useState } from 'react';
import '../App.css';

function RandomWorkout() {
  const [selectedCategory, setSelectedCategory] = useState('chest');
  const [selectedExercise, setSelectedExercise] = useState(null);

  const categories = {
    chest: [
      { name: 'Push-ups', image: 'https://media.tenor.com/gI-8qCUEko8AAAAC/pushup.gif' },
      { name: 'Bench Press', image: 'https://www.bodybuilding.com/images/2021/march/incline_bench_press_12-5-700xh.gif' },
      { name: 'Incline Dumbbell Press', image: 'https://media.giphy.com/media/3o6Zt5WUEue6v4NfA4/giphy.gif' },
      { name: 'Chest Flyes', image: 'https://www.bodybuilding.com/images/2021/march/chest-fly-header-v2-830x467.jpg' },
      { name: 'Dips', image: 'https://www.bodybuilding.com/images/2021/march/chest_dip_12-5-700xh.gif' },
      { name: 'Cable Crossovers', image: 'https://media.giphy.com/media/3o7aD5Z3YXeEvTsaU8/giphy.gif' },
      { name: 'Clap Push-ups', image: 'https://media.giphy.com/media/3o6Zt7wH3ZW7gWMiFC/giphy.gif' },
      { name: 'Pec Deck Machine', image: 'https://media.giphy.com/media/3o6Zt6J0g7lEkJhG9u/giphy.gif' },
      { name: 'Decline Bench Press', image: 'https://www.bodybuilding.com/images/2021/march/decline-bench-press-header-830x467.jpg' },
      { name: 'Chest Press Machine', image: 'https://media.giphy.com/media/3o6ZsYGsQwLtqTlOrS/giphy.gif' },
    ],
    back: [
      { name: 'Pull-ups', image: 'https://media.giphy.com/media/3o6ZsYFs2bONR7uKsk/giphy.gif' },
      { name: 'Deadlifts', image: 'https://media.giphy.com/media/3o6Zt0VrCQWjR0KLoA/giphy.gif' },
      { name: 'Bent Over Rows', image: 'https://media.giphy.com/media/3o7aD76TsWPG9By5hS/giphy.gif' },
      { name: 'Lat Pulldowns', image: 'https://media.giphy.com/media/3o6ZsXOnO5nlzq6mS4/giphy.gif' },
      { name: 'T-Bar Rows', image: 'https://media.giphy.com/media/3o6Zt5wG4eqM7q3kcU/giphy.gif' },
      { name: 'Seated Cable Rows', image: 'https://media.giphy.com/media/3o6ZsJdSkm0kwZirpG/giphy.gif' },
      { name: 'Single Arm Dumbbell Rows', image: 'https://media.giphy.com/media/3o7aD8nU7Ib0cI1tNq/giphy.gif' },
      { name: 'Face Pulls', image: 'https://media.giphy.com/media/3o6Zt6p7R9kjtF6BE8/giphy.gif' },
      { name: 'Hyperextensions', image: 'https://media.giphy.com/media/3o7aD1TTW59tI9xDla/giphy.gif' },
      { name: 'Renegade Rows', image: 'https://media.giphy.com/media/3o6Zt8T6FEu1dD1k3G/giphy.gif' },
    ],
    legs: [
      { name: 'Squats', image: 'https://media.giphy.com/media/3o6ZsYYgGJ92TIB1Y4/giphy.gif' },
      { name: 'Lunges', image: 'https://media.giphy.com/media/3o6ZsYYG1Elz9GJ6V6/giphy.gif' },
      { name: 'Leg Press', image: 'https://media.giphy.com/media/3o6Zt9C2uyWxQqFZzW/giphy.gif' },
      { name: 'Romanian Deadlifts', image: 'https://media.giphy.com/media/3o6Zt9T2Xe6In9G7Wu/giphy.gif' },
      { name: 'Leg Curls', image: 'https://media.giphy.com/media/3o6Zt0LsMkFA5hQZK8/giphy.gif' },
      { name: 'Leg Extensions', image: 'https://media.giphy.com/media/3o7aD3mN9Mbi2yHJfo/giphy.gif' },
      { name: 'Calf Raises', image: 'https://media.giphy.com/media/3o6Zt5OaPzwZfWpy0M/giphy.gif' },
      { name: 'Bulgarian Split Squats', image: 'https://media.giphy.com/media/3o6Zt6p2p2ZmvLR0a0/giphy.gif' },
      { name: 'Sumo Squats', image: 'https://media.giphy.com/media/3o6Zt9T2Xe6In9G7Wu/giphy.gif' },
      { name: 'Box Jumps', image: 'https://media.giphy.com/media/3o6Zt0LsMkFA5hQZK8/giphy.gif' },
    ],
    core: [
      { name: 'Plank', image: 'https://sporium.net/wp-content/uploads/2020/12/plank.jpg' },
      { name: 'Crunches', image: 'https://sporium.net/wp-content/uploads/2020/12/Crunch-nasil-yapilir.gif' },
      { name: 'Leg Raises', image: 'https://sporium.net/wp-content/uploads/2020/12/karin-kasi-egzersizleri-leg-raises.gif' },
      { name: 'Russian Twists', image: 'https://sporium.net/wp-content/uploads/2020/12/Sitting-Twist-obliques-egzersizi.gif' },
      { name: 'Bicycle Crunches', image: 'https://sporium.net/wp-content/uploads/2020/12/mide-kasi-egzersizleri-bicycle-crunches.gif' },
      { name: 'Mountain Climbers', image: 'https://sporium.net/wp-content/uploads/2020/05/Mountain-Climbers.gif' },
      { name: 'Toe Touches', image: 'https://sporium.net/wp-content/uploads/2020/12/toe-taps-egzersiz.gif' },
      { name: 'V-Ups', image: 'https://sporium.net/wp-content/uploads/2020/12/v-ups-egzersizi.gif ' },
      { name: 'Flutter Kicks', image: 'https://sporium.net/wp-content/uploads/2020/12/karin-kasi-egzersizi-Flutter-Kicks.gif' },
      { name: 'Hanging Leg Raises', image: 'https://sporium.net/wp-content/uploads/2020/12/karin-kasi-egzersizleri-leg-raises.gif' },
    ],
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleCloseModal = () => {
    setSelectedExercise(null);
  };

  return (
    <div className="random-workout">
      <h2>Workout Exercises</h2>
      <select value={selectedCategory} onChange={handleCategoryChange} className="select-category">
        <option value="chest">Chest</option>
        <option value="back">Back</option>
        <option value="legs">Legs</option>
        <option value="core">Core</option>
      </select>
      <div className="workout-list">
        {categories[selectedCategory].map((exercise, index) => (
          <div
            key={index}
            className="workout-item"
            onClick={() => handleExerciseClick(exercise)}
          >
            <h3>{exercise.name}</h3>
            <img src={exercise.image} alt={exercise.name} className="workout-thumbnail" />
          </div>
        ))}
      </div>

      {selectedExercise && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>X</span>
            <h3>{selectedExercise.name}</h3>
            <img src={selectedExercise.image} alt={selectedExercise.name} className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomWorkout;
