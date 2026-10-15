const Notification = ({ type, message }) => {
    const successStyle = {
        color: 'green',
        fontSize: 20,
        backgroundColor: 'lightgrey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: '10px',
        margin: '10px',
    }
    const errorStyle = {
        color: 'red',
        fontSize: 20,
        backgroundColor: 'lightgrey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: '10px',
        margin: '10px',
    }

    const style = type === 'success' ? successStyle : errorStyle

    if (!message) {
        return null
    }


    return (
        <div style={style} className='notification'>
            {message}
        </div>
    )
}

export default Notification;