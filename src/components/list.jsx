import { Person } from "./person"


export const List = ({people}) => {
    return <section>
        {people.map((person) => {
        return<Person key={person.id} {...person}/>
        })}
    </section>
  
}
