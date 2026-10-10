let exercises = []

//code to refactor into creating login
function createWorkout()
{
    if(!inputVal(document.getElementById("workoutName").value,'') || !inputVal(exercises.length,0) )
    {   
        alert('All boxes must have inputs')
    }
    else
    {
        fetch('api.php',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({action: 'save_workout', name: document.getElementById("workoutName").value})   
        })
    
        .then(response => response.text())
        .then(result => 
        {
            let workoutId = parseInt(result);

            for(let i = 0; i < exercises.length; i++)
            {
                fetch('api.php',
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify
                    ({
                    action: 'save_exersize',
                    workout_id: workoutId,
                    name: exercises[i].name,
                    planned_sets: exercises[i].sets,
                    planned_reps: exercises[i].reps
                    })
                })   
            }   
            alert('Workout added!')
            clearInputs()
        });
    } 
}