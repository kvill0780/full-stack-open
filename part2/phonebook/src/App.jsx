import { useEffect, useState } from 'react'
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import personServices from "./services/persons.js";
import Notification from "./components/Notification.jsx";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [notification, setNotification] = useState({ message: null, type: null });

    useEffect(() => {
        personServices
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const onSubmit = (event) => {
        event.preventDefault();

        const personExist = persons.find(
            (person) => person.name === newName
        )

        if (!personExist) {
            const newPerson = {
                name: newName,
                number: newNumber,
            }
            personServices
                .create(newPerson)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                })

            setNotification({
                message:`Added ${newName}`,
                type: 'success',
            })
            setTimeout(() => {
                setNotification({
                    message: null,
                    type: null,
                })
            }, 3000)
        }
        else {
            const decision = window.confirm(
                `${newName} is already added to phonebook, replace the old number with a new one ?`
            )
            if (decision) {
                const changedPerson = {
                    ...personExist,
                    number: newNumber
                }
                personServices
                    .update(personExist.id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(p => {
                            return p.id !== personExist.id ? p : returnedPerson
                        }))

                        setNotification({
                            message: `${newName} number was updated`,
                            type: 'success',
                        })

                        setTimeout(() => {
                            setNotification({
                                message: null,
                                type: null,
                            })
                        }, 3000)

                        setNewName("")
                        setNewNumber("")
                    })
            }
        }
    }

    const deletePerson = (id) => {
        const person = persons.find((person) => person.id === id)
        const decision = window.confirm(`Delete ${person.name}`)

        if (decision) {
            personServices
                .remove(id)
                .then(response => {
                    setPersons(persons.filter(p => p.id !== id))
                    setNotification({
                        message: `${person.name} was deleted`,
                        type: 'success',
                    })
                })
                .catch(error => {
                    setNotification({
                        message:`Information of '${person.name}' has already been removed from server`,
                        type: 'error',
                    });
                    setTimeout(() => {
                        setNotification({
                            message: null,
                            type: null,
                        })
                    }, 3000)
                    setPersons(persons.filter(p => p.id !== id));

                })
        }

    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const personsToShow = !filter
        ? persons
        : persons.filter(person => {
            return(
                person.name.toLowerCase().includes(filter.toLowerCase())
            )
        });


    return (
        <div>
            <h2>Phonebook</h2>

            <Notification
                type={notification.type}
                message={notification.message}
            />

            <Filter filter={filter} handleFilterChange={handleFilterChange} />

            <h3>Add a new</h3>

            <PersonForm
                onSubmit={onSubmit}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />

            <h3>Numbers</h3>

            <Persons
                personsToShow={personsToShow}
                deletePerson={deletePerson}
            />
        </div>
    )
}

export default App