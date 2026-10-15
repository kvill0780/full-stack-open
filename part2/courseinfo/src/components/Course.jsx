const Part = (props) => {
    console.log(props)
    const { part } = props
    return (
        <div>
            <p>{part.name} {part.exercises}</p>
        </div>
    )
}

const Course = (props) => {
    console.log(props)
    const { course } = props
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <div>
            <h2>{course.name}</h2>
            {course.parts.map(part =>
                <Part key={part.id} part={part}/>
            )}
            <b>total of {total} exercises</b>
        </div>
    )
}

export default Course